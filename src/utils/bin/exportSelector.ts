import * as backend from "./backend";
import * as data from "./data";
import * as frontend from "./frontend";

const commands = {
	backend,
	data,
	frontend,
};

export default commands[process.env.NEXT_PUBLIC_WEB_MODE];
