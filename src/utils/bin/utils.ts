import * as bin from "./index";
import { DEFAULT_USER } from "../../utils/shellProvider";

export const help = async (args: string[]): Promise<string> => {
	const commonCommands = Object.keys(bin).filter(cmd => cmd !== "ModeCommands");
	const commands = [
		...commonCommands,
		...Object.keys(bin.ModeCommands),
	].sort().join(", ");
	
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
