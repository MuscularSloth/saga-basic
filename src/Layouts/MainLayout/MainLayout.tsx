import React from "react";
import NavigationBar from "../../components/NavigationBar/NavigationBar";
import PeoplePage from "../../pages/PeoplePage/PeoplePage";

const MainLayout = () => {
	return (
		<>
			<NavigationBar />
			<PeoplePage />
		</>
	);
};

export default MainLayout;
