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
		'🫶강승현: 이번 컨셉인 "커넥또"처럼 방문해주신 여러분과의 인연이 맺어지면 좋겠어요!\n';
	msg +=
		"손영인: 행사 기획은 처음이었는데 다들 적극적이셔서 넘 좋았어요! 얼른 반상회 참여자분들 만나고 싶어요~!\n";
	msg +=
		"😈이승민: 많은 분들이 서로 영감을 주고 받는 행사였으면 좋겠습니다! 참여해주신분들 모두 최고👍\n";
	msg += "🎧이예서: 기억에 오래 남는 하루가 되셨으면 합니다! : \n";
	msg +=
		"🌱문태준: 많은 분들이 이번 반상회를 통해 지속적으로 연결되어 여러 라포가 형성되는 귀한 시간이 되기를 소망합니다!\n";
	msg += "변성윤: 우리 모두 연결되어요. 많이 이야기하고 가시길!\n";
	msg +=
		"김동인: 반상회를 통해 글또 사람들이 서로 연결되는 날로 기억되면 좋겠네요 🤗\n";
	msg +=
		"👻박정현: 글또를 통해서 많은 귀인들을 만나게 되었어요! 참여하시는 분들도 소중한 인연들과 새롭게 연결되시길요!  복잡했던 생각들도" +
		" 이번 반상회에서 여러 사람과 나누어보고 “connecting the dots” 하는 시간 되시길 바라겠습니다 🩷\n";
	msg += "김준홍: 반상회를 통해 새로운 인연을 만들어 가셨으면 좋겠어요 ☺️\n";
	msg +=
		"배지훈: 이렇게 좋은 날 좋은 사람들과 좋은 시간을 보내 수 있었기를 바랍니다~! \n";
	msg +=
		"🍙곽희진 : 글또분들 모두 만나고 싶었어요! 🙂💗오늘을 연결해 또 다음" +
		" 만남이, 또 성장도 함께 이어지길 바라요\n";
	msg +=
		"🌱심동민 : 글또분들 반상회에서 많은 인연 연결되시고 이어가셨으면 좋겠습니다~~! \n";
	msg +=
		"양일표: 이번 기회에 같은 직무 분들을 많이 만날 수 있어서 기대됩니다🤗 다들 친해져요" +
		"🥳\n";
	msg +=
		"금정민: 다양한 사람들과 이야기하고 여러가지를 얻어갈 수 있는 시간이 되길 바라겠습니당 :) 이제 올해 3개월이 지났는데 남은 기간 다들 화이팅해요!  \n";
	msg += "김수빈: 티글 모아 글또 ✏️ \n";
	msg +=
		"민태인: 보람찬 하루, 연결된 두 시간으로 뜻깊은 기억이 되면 좋겠어요 \n";
	msg +=
		"백승주: 글또, 반상회를 통해 다같이 연결돠는 시간 될 수 있으면 좋겠습니다! \n";

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
