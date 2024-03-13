export const logo = async (args: string[]): Promise<string> => {
	let message = "";
	message += `<span class="text-[2px] sm:text-[5px] leading-[100%] block">                                                                                                                                                                                                                                                                                                                                                                                                      
 ________  ________  ________   ________   _______   ________ _________  _________  ________     
|\\   ____\\|\\   __  \\|\\   ___  \\|\\   ___  \\|\\  ___ \\ |\\   ____\\\\___   ___\\\\___   ___\\\\   __  \\    
\\ \\  \\___|\\ \\  \\|\\  \\ \\  \\\\ \\  \\ \\  \\\\ \\  \\ \\   __/|\\ \\  \\___\\|___ \\  \\_\\|___ \\  \\_\\ \\  \\|\\  \\   
 \\ \\  \\    \\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\\\ \\  \\ \\  \\_|/_\\ \\  \\       \\ \\  \\     \\ \\  \\ \\ \\  \\\\\\  \\  
  \\ \\  \\____\\ \\  \\\\\\  \\ \\  \\\\ \\  \\ \\  \\\\ \\  \\ \\  \\_|\\ \\ \\  \\____   \\ \\  \\     \\ \\  \\ \\ \\  \\\\\\  \\ 
   \\ \\_______\\ \\_______\\ \\__\\\\ \\__\\ \\__\\\\ \\__\\ \\_______\\ \\_______\\  \\ \\__\\     \\ \\__\\ \\ \\_______\\
    \\|_______|\\|_______|\\|__| \\|__|\\|__| \\|__|\\|_______|\\|_______|   \\|__|      \\|__|  \\|_______|
                                                                                                 
	</span>`;

	return message;
};

export const review = async (args: string[]): Promise<string> => {
	window.open("https://forms.gle/QTeBPkJdMUQ2wCC9A");

	return "Opening Review Form...";
};

export const usersheet = async (args: string[]): Promise<string> => {
	window.open(
		"https://docs.google.com/spreadsheets/d/1oV0yxaH8lhDXj42j_AiMc_P_wm1Yq-kGh5QlOsv3mUo/edit?usp=sharing",
	);

	return "Opening a sheet of users...";
};

export const banner = (args?: string[]): string => {
	return `
<div class="flex flex-row flex-wrap text-[9px] md:text-xs">
<span class="text-[1.8vw] sm:text-[11px] md:text-[16px]">
 .o88b.  .d88b.  d8b   db d8b   db d88888b  .o88b. d888888b d888888b  .d88b.  
d8P  Y8 .8P  Y8. 888o  88 888o  88 88'     d8P  Y8 \`~~88~~' \`~~88~~' .8P  Y8. 
8P      88    88 88V8o 88 88V8o 88 88ooooo 8P         88       88    88    88 
8b      88    88 88 V8o88 88 V8o88 88~~~~~ 8b         88       88    88    88 
Y8b  d8 \`8b  d8' 88  V888 88  V888 88.     Y8b  d8    88       88    \`8b  d8' 
 \`Y88P'  \`Y88P'  VP   V8P VP   V8P Y88888P  \`Y88P'    YP       YP     \`Y88P'  
</span>
</div>
반갑습니다. :) 'useradd \<이름\>'을 입력해서 로그인해주세요.

'help'를 입력하시면 여러 기능이 있답니다~!
이스터에그도 있으니 찾아보셔요.
`;
};

export const staff = async (args?: string[]): Promise<string> => {
	let msg = "";
	msg +=
		"🐼조재우: 글또 9기에 처음으로 열리는 반상회 많은 분들이 오셔서 재밌게 즐기고 가셨으면 좋겠습니다.\n";
	msg +=
		':heart_hands:강승현: 이번 컨셉인 "커넥또"처럼 방문해주신 여러분과의 인연이 맺어지면 좋겠어요!\n';
	msg +=
		"😎강병진: 최선을 다해서 준비한 마음이 닿기를 바라면서 다들 남은 한해도 화이팅 💪\n";
	msg +=
		"💓오다혜: 킹왕짱 프론트! 반상회를 함께 준비할 수 있어서 영광이었습니다~ 열심히 준비한 만큼 오늘 모두 재밌게 즐겨주세요~\n";
	msg +=
		"🐑양아름: 가장 행복한 소식 : 내일 주말 / 프론트 반상회 재밌게 즐겨주시고 항상 행복하세요! 😄\n";
	msg +=
		"🤿이용호: 주인공은 원래 마지막에 등장하는 법, 기억에 남는 프론트 반상회가 될 수 있기를 😎\n";
	msg +=
		"🧚변성윤: 오늘 참여하신 분들이 무럭무럭 자라서 행복 가득했으면 좋겠어요, 진심으로요.\n";

	return msg;
};

export const about = async (args?: string[]): Promise<string> => {
	let message = "";

	message += `\n\n<span class="font-bold">\> cat time-table</span>\n\n`;
	message +=
		"💻 sessions\n" +
		"-------+------------------------------\n" +
		" 19:00 | 입장                          \n" +
		"-------+------------------------------\n" +
		" 19:10 | 행사 소개                         \n" +
		"-------+------------------------------\n" +
		" 19:15 | Rust + gRPC 우당탕탕 도입기      \n" +
		"       | - 이성진              \n" +
		"-------+------------------------------\n" +
		" 19:35 | Trade-off 세계에서 살아남기     \n" +
		"       | - 손영인                       \n" +
		"-------+------------------------------\n" +
		" 19:55 | 신입 공채 3개월, 이직할 결심            \n" +
		"       | - 강승현                       \n" +
		"-------+------------------------------\n\n" +
		"👋 networking\n" +
		"-------+------------------------------\n" +
		" 20:20 | 네트워킹                       \n" +
		"-------+------------------------------\n" +
		" 21:25 | 네트워킹 종료, 후기 설문, 기념사진   \n" +
		"-------+------------------------------\n" +
		" 21:30 | 퇴장 high five~🙏             \n" +
		"-------+------------------------------\n\n";

	return message;
};
