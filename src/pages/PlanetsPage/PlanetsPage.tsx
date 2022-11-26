import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import BounceLoader from "react-spinners/BounceLoader";
import { useDispatch } from "react-redux";
import {
	getPlanetsFetch,
	getSinglePlanetFetch,
} from "../../redux/reducers/planets/planetsActions";
import { IPlanet } from "../../redux/reducers/planets/planetsStore";
import { getPlanetsSelector } from "../../redux/reducers/planets/planetsSelector";

const PlanetsPage = () => {
	const [dataToShow, setDataToShow] = useState<IPlanet[]>([]);
	const { isLoading, isError, data, errorMessage } =
		useSelector(getPlanetsSelector);

	const dispatch = useDispatch();

	const handleLoadDataClick = () => {
		dispatch(getPlanetsFetch());
	};

	const handlePersonClick = (url: string) => {
		dispatch(getSinglePlanetFetch(url));
	};

	useEffect(() => {
		console.log("useEffect data: ", data);

		if (data && "results" in data) {
			setDataToShow(data.results);
		} else if (data) {
			const newArr: IPlanet[] = [];
			newArr.push(data);
			setDataToShow(newArr);
		}
	}, [data]);

	return (
		<>
			<h2>Planets Page</h2>

			<button onClick={handleLoadDataClick}>Load Planets Data</button>

			{isLoading && <BounceLoader color='#a01989' />}
			{isError && errorMessage && <div>Error: {errorMessage}</div>}

			{dataToShow && dataToShow.length > 0 ? (
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Climate</th>
						</tr>
					</thead>
					<tbody>
						{dataToShow.map((planet) => (
							<tr key={planet.name}>
								<td>
									<button onClick={() => handlePersonClick(planet.url)}>
										{planet.name}
									</button>
								</td>
								<td>{planet.climate}</td>
							</tr>
						))}
					</tbody>
				</table>
			) : (
				<p>No data found</p>
			)}
		</>
	);
};

export default PlanetsPage;
