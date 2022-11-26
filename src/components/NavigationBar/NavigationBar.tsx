import React from "react";
import { Link } from "react-router-dom";
import ROUTES, { ROUTES_NAMES } from "../../constants/paths";

const NavigationBar = () => {
	const routesKeys = Object.keys(ROUTES) as Array<keyof typeof ROUTES>;

	return (
		<>
			{routesKeys.map((key) => (
				<Link key={key} to={ROUTES[key]}>
					{ROUTES_NAMES[key]}
				</Link>
			))}
		</>
	);
};

export default NavigationBar;
