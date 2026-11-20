import { getRelativeLocaleUrl, getAbsoluteLocaleUrl } from "astro:i18n";
import { routes } from "../../i18n/routes.js";

export function linkbuilder(currentLang, path) {
	const targetLang = currentLang === "uk" ? "en" : "uk";

	const currentPath =
		currentLang === "uk"
			? path.split("/").filter(Boolean).slice(0)
			: path.split("/").filter(Boolean).slice(1);

	const page = Object.entries(routes).find(
		([, value]) => value[currentLang] === currentPath[0],
	);
	const slug = currentPath.length > 1 ? currentPath[1] : "";

	const targetPage = page ? page[1][targetLang] : "";
    const currentPage = page ? page[1][currentLang] : "";

	const targetUrl = getRelativeLocaleUrl(targetLang, `${targetPage}/${slug}`);
    const absCurrentUrl = getAbsoluteLocaleUrl(currentLang, currentPath.join("/"));
    const absAlterUrl = getAbsoluteLocaleUrl(targetLang, `${targetPage}/${slug}`);

	return { targetUrl, absCurrentUrl, absAlterUrl, targetLang, currentPage };    
}