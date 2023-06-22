import themes from "../../../themes.json";
import { Theme } from "../../interfaces/theme";

const getTheme = () => {
	const themeName = localStorage.getItem("theme");
	const theme: Theme = themes.find(
		(theme) => theme.name.toLowerCase() === themeName,
	);
	return theme;
};
