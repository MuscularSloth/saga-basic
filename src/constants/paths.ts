const ROUTES = {
	HOME_PAGE: "/",
	PLANETS_PAGE: "/planets",
};

export const ROUTES_NAMES: { [key in keyof typeof ROUTES]: string } = {
	HOME_PAGE: "Peoples Page",
	PLANETS_PAGE: "Planets Page",
};

export default ROUTES;
