import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getPeopleSelector } from "../../redux/reducers/people/peopleSelector";
import BounceLoader from "react-spinners/BounceLoader";
import { useDispatch } from "react-redux";
import {
	getPeopleFetch,
	getSinglePersonFetch,
	// getPeopleFailure,
	// getPeopleSuccess,
} from "../../redux/reducers/people/peopleActions";
import { IPeople } from "../../redux/reducers/people/peopleStore";

const PeoplePage = () => {
	const [dataToShow, setDataToShow] = useState<IPeople[]>([]);
	const { isLoading, isError, data, errorMessage } =
		useSelector(getPeopleSelector);

	const dispatch = useDispatch();

	const handleLoadDataClick = async () => {
		dispatch(getPeopleFetch());
	};

	const handlePersonClick = async (url: string) => {
		dispatch(getSinglePersonFetch(url));
	};

	useEffect(() => {
		console.log("useEffect data: ", data);

		if (data && "results" in data) {
			setDataToShow(data.results);
		} else if (data) {
			const newArr: IPeople[] = [];
			newArr.push(data);
			setDataToShow(newArr);
		}
	}, [data]);

	return (
		<>
			<h2>People Page</h2>

			<button onClick={handleLoadDataClick}>Load People Data</button>

			{isLoading && <BounceLoader color='#a01989' />}
			{isError && errorMessage && <div>Error: {errorMessage}</div>}

			{dataToShow && dataToShow.length > 0 ? (
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Gender</th>
						</tr>
					</thead>
					<tbody>
						{dataToShow.map((person) => (
							<tr key={person.name}>
								<td>
									<button onClick={() => handlePersonClick(person.url)}>
										{person.name}
									</button>
								</td>
								<td>{person.gender}</td>
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

export default PeoplePage;
