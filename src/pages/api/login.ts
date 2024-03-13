const fs = require("fs").promises;
const path = require("path");
const process = require("process");

const { google } = require("googleapis");

const CREDENTIALS_PATH = path.join(process.cwd(), "credentials.json");

/**
 * Load or request or authorization to call APIs.
 *
 */
async function authorize() {
	// const client_email = process.env.CLIENT_EMAIL;
	// const private_key = process.env.PRIVATE_KEY.replace(/\\n/g, "\n");

	const client_email = "backspace@chavolog.iam.gserviceaccount.com";
	const private_key =
		"-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQDWPr/8gyHfKLqu\nOr4S72wXRJ1PNlrSepgPFKEqCRKIRP3KF27G7aA2ZYiRNT768DC5g7H0Rtgmjq0n\n/pwWeMxyE4QOnRoJqmOYlmNW6UjBUCF6Hibe8YFnN1Y6noI43+vtYR6DLCV8A52P\nPCMg1+122yccbrResQ10sQ3sMc02OxeYyVJQB/FxkoIUS4Hx1UmGNnK65AaRa5bC\n2vL5u/4cbgD2ou3B+5g9SD4hz9IeY91Y7bMUnddQMYMBwYkm8bAQCWnW5SsQ9Sh6\nlr7g2MEh3EOtoEGctZzB+v6WnNNbeRbTQPvNr7a6/nbhYPBaaCUqad8faPo1D9xm\nwQzAuIhRAgMBAAECggEAGcop8CqU3DkZ57k4gi0B9PcUfKGNY0LQpRgVomq/KVos\ntrQFaLrYC1RDkT84mpppMxuwQzh38oRAQc07WtUlvyGsRtoQdVNmc8q+oIqqcGLF\n9N5GTZYCvrsBjULhaBlEXCnRs3aP+JKy17gkfmKfuiv9VEXbPn7PoNljVKhWDI3t\n50TW0SE2IEdUt+xwRhYEELs0burXXTPs8h/xGJYiu0/HnYgalnF6QNbnw2X2PL1G\nRZYL/rMEm7ens0kmp/Z/8df/HFmyBLP8JgSr7pnVC2FlP2aMn2q71qXQztugxpSY\nnGwNtfano5jrYnu7SVLQFH5N7cKBpJmPV4sVSs46pQKBgQD8+FUMUVLqoLucv4gR\nz/ZRXxWdZSOioXRjvjMIfFqejeEpBQ3U7l91J48NuAYzHTlUN85uU2f7WPfNwgys\nhEpIVigWBQq4YZQyqDRM03VbamHT9V5rOBmmx5/KWGpPx0Zpxx7q1o7W6q2nPQlQ\nI8NiSEpnu10wMyCaWtAU+/8txwKBgQDYz616/LoMUQDKCD2bVsm1o1bK8mmTq5Vj\nsSH0RckbPAuIGyC5/T3QZC7Viu2eyX9T6l5EohcWIAoOt1KrVvmSe//dVSc+6fvZ\nn1idXVIlMt9NyI3FMgpIjSwi7NSVGGNgqK8XOknfMGH6VVrH7ka9Y6beGABBlVEp\nixmZ1B75JwKBgG8X69mt+Tj6/4l1/5668pSHqmll2kF4oDGRfL30RqOs8T3fb1Sc\nnqVHiyZeM7LM2blnjKucy2RxjNn6pzA4JJsh4xbQfgW9LKUWg2ld0AMmc/Huptl1\nWKaKslzdeUqx2/VmMei18yLlCwAP6QAdxJdr4ekuOl2Jhn7i9NDSXh1PAoGALxDu\ndRt1/AR9ql4dmaI+iZra1ZXIS5FdDdY/K7sWjD39tt9EvHt4Nsv4ysytBuJxLLNd\nIYMahegQpt8vKBjqdt1KTy8UJPlAfh60avz+PysLBOS7ugpB5zwWT8Kf53ny4OHd\nmKpDrRrguipbWbmlS6ndaKtHKvWSN/WFajp9OtMCgYBzKA5GvSUww4NCSp3qkon8\nHzWl7gYDjykyXyNieMYVnKHK8ufCD0jmGNB6916sBO0igEBqesTDcC28BKK1dyPT\niVTEua5NAhweS6JgaUu2n7NjcbCoEPSmZlI3zs5ag4mlbhX2tTyjp1p1oqyLjOF9\nuoO6sFQzidjSniUdQCnLgw==\n-----END PRIVATE KEY-----\n";

	const client = new google.auth.JWT(client_email, null, private_key, [
		"https://www.googleapis.com/auth/spreadsheets",
	]);

	return client;
}

const spreadsheetId =
	process.env.SPREADSHEET_ID ||
	"1CoFrSX0U5AwWULnjyDtVN-aRXizDmWor8k31S5XfeUo";
const sheetName = process.env.SHEET_NAME || "Sheet1";

async function listUsers(auth) {
	const sheets = google.sheets({ version: "v4", auth });
	const res = await sheets.spreadsheets.values.get({
		spreadsheetId,
		range: `${sheetName}!A2:B`,
	});
	const rows = res.data.values;

	return rows;
}

async function updateUser(auth, rowIdx) {
	const sheets = google.sheets({ version: "v4", auth });
	await sheets.spreadsheets.values.update({
		spreadsheetId,
		range: `${sheetName}!B${2 + rowIdx}`,
		valueInputOption: "RAW",
		resource: {
			values: [
				[
					new Date().toLocaleString("ko-KR", {
						timeZone: "Asia/Seoul",
					}),
				],
			],
		},
	});
}

export default async function handler(req, res) {
	if (req.method !== "POST") {
		res.status(405).json({ error: "Method not allowed" });
		return;
	}

	const { username } = req.body;

	const client = await authorize();
	const usersInfo = await listUsers(client);
	const users = usersInfo.map((user) => user[0]);

	const userIdx = users.findIndex((user) => user === username);

	if (userIdx !== -1) {
		if (
			usersInfo[userIdx][1] === undefined ||
			!usersInfo[userIdx][1].includes("2023")
		) {
			await updateUser(client, userIdx);
		}

		return res.status(200).json({});
	}

	return res.status(401).json({
		message: "User not found",
	});
}
