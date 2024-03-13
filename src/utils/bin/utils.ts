import * as bin from "./index";
import { DEFAULT_USER } from "../../utils/shellProvider";

export const help = async (args: string[]): Promise<string> => {
	const commonCommands = Object.keys(bin).filter(
		(cmd) => cmd !== "ModeCommands",
	);
	const commands = [...commonCommands, ...Object.keys(bin.ModeCommands)]
		.sort()
		.join(", ");

	let ret = `사용 가능한 명령어들:\n${commands}\n\n`;
	ret += `'useradd <이름>' 출석체크\n'about'         반상회 정보 확인\n'chat'          질의 응답\n'review'        반상회 후기 설문\n\n`;
	ret += `[tab]\t 명령어 자동 완성\n[ctrl+l] 터미널 정리\n[ctrl+c] 명령어 취소`;

	return ret;
};

export const echo = async (args: string[]): Promise<string> => {
	return args.join(" ");
};

export const chat = async (args: string[]): Promise<string> => {
	return localStorage.getItem("username")
		? "Chat Opened"
		: "Please login first";
};

export const whoami = async (args: string[]): Promise<string> => {
	return localStorage.getItem("username") ?? DEFAULT_USER;
};

export const cotemaster = async (args: string[]): Promise<string> => {
	window.open("https://www.codetree.ai");

	return "Opening Codetree...";
};

export const logout = async (args: string[]): Promise<string> => {
	localStorage.removeItem("username");
	window.location.reload();

	return "Logged out";
};

export const sudo = async (args?: string[]): Promise<string> => {
	return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const repo = async (args?: string[]): Promise<string> => {
	setTimeout(function () {
		window.open(
			"https://github.com/chavokim/backspace-cli-homepage",
			"_blank",
		);
	}, 1000);

	return "Opening repository...";
};

export const chavo = async (args?: string[]): Promise<string> => {
	const content = `<strong>코딩테스트 준비를 위한 알고리즘 정석, 코드트리</strong>의 CTO 김재휘입니다.🙇‍
2023년도 5월에 열린 글또 8기 백엔드 반상회부터 해당 사이트를 만들어서 운영하고 있습니다.
감사하게도 많은 분들이 좋아해주셔서 지속적으로 반상회에서 사용되고 있고, 오늘의 반상회에서도 사용될 예정입니다.
해당 글을 작성하는 지금은 딱 2024/03/14 04:05:19입니다. 그렇습니다. 새벽 감성에 젖기 좋은 시간이죠. 🌙
저는 글또를 통해 많은 분들을 만났고, 그를 통해 성장할 수 있었습니다. 
이번 반상회도 많은 분들이 만나서 성장할 수 있는 시간이 되었으면 좋겠습니다. 🥹
그리고 혹시나 해당 사이트가 마음에 드신다면, 저를 만날 때 \`<strong>사랑해요 김재휘</strong>\`라고 말해주시고
코딩테스트를 준비하실 때 <a href="https://www.codetree.ai"><strong>코드트리</strong></a>를 이용해주시면 감사하겠습니다.
\`<strong>chavo</strong>\` 커멘드를 치시고 해당 글을 읽어주신 모든 분들에게 사랑을 전합니다.
땡큐 앤 알러뷰! 
`;

	const str =
		"<div style='display: flex;flex-direction:column;align-items:" +
		" center;'><img" +
		" src='https://blog.chavo.dev/_next/image?url=%2Fprofile.jpg&w=384&q=75'" +
		` style='border-radius: 50%; width: 150px;margin-bottom: 16px;' /><span style='text-align: center'>${content}</span></div>`;

	return str;
};
