import clientPromise from "../../mongodb";

export default async function handler(req, res) {
	if (!["POST", "PATCH", "GET"].includes(req.method)) {
		res.status(405).json({ error: "Method not allowed" });
		return;
	}

	if (req.method === "GET") {
		const { fromUser } = req.query;

		const client = await clientPromise;
		const db = client.db("connectto");

		const members = db.collection(`members`);

		try {
			const currMember = await members.findOne({ fromUser });

			return res.status(200).json(currMember);
		} catch (e) {
			res.status(404).json({
				message: "User not found",
			});
		}
	}

	if (req.method === "POST") {
		const { fromUser, toUser } = req.body;

		const client = await clientPromise;
		const db = client.db("connectto");

		const members = db.collection(`members`);

		try {
			const currMember = await members.findOne({ fromUser });

			if (!currMember) {
				res.status(404).json({
					message:
						"connect init을 사용해서 연결 정보를 등록해주세요.",
				});
			}

			if (fromUser === toUser) {
				const { connecting, connectedBy, ...rest } = currMember;
				return res.status(200).json({
					...rest,
					message: "나의 정보",
				});
			}

			const toMember = await members.findOne({ fromUser: toUser });

			if (!toMember) {
				res.status(404).json({
					message:
						"연결하려는 상대방이 아직 연결 정보를 등록하지 않았습니다.",
				});
			}

			if (currMember.connecting.includes(toUser)) {
				const { connecting, connectedBy, ...rest } = toMember;
				return res.status(200).json({
					...rest,
					message: "이미 연결된 상대방입니다.",
				});
			}

			await members.updateOne(
				{ fromUser },
				{
					$set: {
						connecting: [...currMember.connecting, toUser],
					},
				},
			);

			await members.updateOne(
				{ toUser },
				{
					$set: {
						connectedBy: [...currMember.connectedBy, fromUser],
					},
				},
			);

			const { connecting, connectedBy, ...rest } = toMember;

			return res.status(200).json({
				...rest,
				message: `${currMember.connecting + 1}번째 연결 완료`,
			});
		} catch (e) {
			res.status(404).json({
				message: "User not found",
			});
		}
	}

	if (req.method === "PATCH") {
		const { fromUser, link, description } = req.body;

		const client = await clientPromise;
		const db = client.db("connectto");

		const members = db.collection(`members`);

		try {
			const currMember = await members.findOne({ fromUser });

			if (!currMember) {
				await members.insertOne({
					fromUser,
					link,
					description,
					connecting: [],
					connectedBy: [],
				});
			} else {
				await members.updateOne(
					{ fromUser },
					{
						$set: {
							link,
							description,
						},
					},
				);
			}

			return res.status(200).json({
				message: "연결 정보가 등록되었습니다.",
			});
		} catch (e) {
			res.status(404).json({
				message: "User not found",
			});
		}
	}
}
