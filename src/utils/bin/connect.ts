import axios from "axios";

export const connect = async (args: string[]): Promise<string> => {
	const currUser = localStorage.getItem("username");

	if (!currUser) {
		return "로그인부터 해주세요.";
	}

	if (
		!(
			(args[0] === "init" && args.length >= 3) ||
			(args[0] === "list" && args.length === 1) ||
			(!["init", "list"].includes(args[0]) && args.length === 1)
		)
	) {
		return (
			"사용법:\n- connect <사용자명>: <사용자명>과 연결\n- connect init <블로그 링크>" +
			" <하고싶은" +
			" 말>: 내 정보 등록\n-" +
			" connect list: 내 연결 정보 조회"
		);
	}

	if (args[0] === "init") {
		try {
			await axios.patch("/api/connect", {
				fromUser: currUser,
				link: args[1],
				description: args.slice(2).join(" "),
			});

			return "연결 정보가 성공적으로 등록되었습니다.";
		} catch (e) {
			return "서버에 문제가 발생했습니다.";
		}
	} else if (args[0] === "list") {
		try {
			const resp = await axios.get("/api/connect?fromUser=" + currUser);

			const { fromUser, connecting, connectedBy } = resp.data;

			return `- ${fromUser}의 연결 정보\n- 연결 요청한 사용자(총 ${
				connecting.length
			}명): ${connecting.join(", ")}\n- 연결 요청 받은 사용자(총 ${
				connectedBy.length
			}명): ${connectedBy.join(", ")}`;
		} catch (e) {
			return "서버에 문제가 발생했습니다.";
		}
	} else {
		try {
			const resp = await axios.post("/api/connect", {
				toUser: args[0],
				fromUser: currUser,
			});

			const { fromUser, link, description, message } = resp.data;

			return `${message}\n\n- 사용자명: ${fromUser}\n- 블로그 링크: <a href=${link}>${link}</a>\n- 하고싶은 말: ${description}`;
		} catch (e) {
			return e.response.data.message;
		}
	}

	return ``;
};
