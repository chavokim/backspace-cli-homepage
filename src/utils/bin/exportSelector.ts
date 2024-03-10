import * as backend from "./backend";
import * as data from "./data";
import * as frontend from "./frontend";
import * as connectto from "./connectto";

const commands = {
	backend,
	data,
	frontend,
	connectto,
};

export default commands[process.env.NEXT_PUBLIC_WEB_MODE];
