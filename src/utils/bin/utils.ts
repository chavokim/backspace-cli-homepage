import * as bin from "./index";
import { DEFAULT_USER } from "../../utils/shellProvider";

export const help = async (args: string[]): Promise<string> => {
	const commands = Object.keys(bin).sort().join(", ");

	return `Available commands:\n${commands}\n\n[tab]\t trigger completion.\n[ctrl+l] clear terminal.\n[ctrl+c] cancel command.`;
};

export const echo = async (args: string[]): Promise<string> => {
	return args.join(" ");
};

export const whoami = async (args: string[]): Promise<string> => {
	return localStorage.getItem("username") ?? DEFAULT_USER;
};

export const cotemaster = async (args: string[]): Promise<string> => {
	window.open("https://www.codetree.ai");

	return "Opening Codetree...";
};

export const review = async (args: string[]): Promise<string> => {
	window.open("https://blog.chavo.dev");

	return "Opening Review Form...";
};

export const sudo = async (args?: string[]): Promise<string> => {
	setTimeout(function () {
		window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
	}, 1000);

	return `Permission denied: unable to run the command '${args[0]}' as root.`;
};

export const banner = (args?: string[]): string => {
	return `
'########:::::'###:::::'######::'##:::'##::'######::'########:::::'###:::::'######::'########:
 ##.... ##:::'## ##:::'##... ##: ##::'##::'##... ##: ##.... ##:::'## ##:::'##... ##: ##.....::
 ##:::: ##::'##:. ##:: ##:::..:: ##:'##::: ##:::..:: ##:::: ##::'##:. ##:: ##:::..:: ##:::::::
 ########::'##:::. ##: ##::::::: #####::::. ######:: ########::'##:::. ##: ##::::::: ######:::
 ##.... ##: #########: ##::::::: ##. ##::::..... ##: ##.....::: #########: ##::::::: ##...::::
 ##:::: ##: ##.... ##: ##::: ##: ##:. ##::'##::: ##: ##:::::::: ##.... ##: ##::: ##: ##:::::::
 ########:: ##:::: ##:. ######:: ##::. ##:. ######:: ##:::::::: ##:::: ##:. ######:: ########:
........:::..:::::..:::......:::..::::..:::......:::..:::::::::..:::::..:::......:::........::

Type 'help' to see list of available commands.

--
The project is open-source 🎉 type 'repo' to check out the repository.

New 🎉: Try out the new 'theme' command. See all available themes <a href="https://github.com/Destaq/cli-homepage/tree/master/docs/themes">in the docs</a>.
--
`;
};
