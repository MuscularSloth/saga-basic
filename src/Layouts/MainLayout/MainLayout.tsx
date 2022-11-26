import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import ROUTES from "../../constants/paths";
import PeoplePage from "../../pages/PeoplePage/PeoplePage";
import PlanetsPage from "../../pages/PlanetsPage/PlanetsPage";

const MainLayout = () => {
	return (
		<>
			<BrowserRouter>
				<NavigationBar />

				<Routes>
					<Route path={ROUTES.HOME_PAGE} element={<PeoplePage />} />
					<Route path={ROUTES.PLANETS_PAGE} element={<PlanetsPage />} />
				</Routes>
			</BrowserRouter>
		</>
	);
};

export default MainLayout;
