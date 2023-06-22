import * as backend from "./backend";
import * as data from "./data";

const commands = {
    backend,
    data,
};

export default commands[process.env.NEXT_PUBLIC_WEB_MODE];
