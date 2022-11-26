import React from "react";
import { useSelector } from "react-redux";
import { getPeopleSelector } from "../../redux/reducers/selectors/peopleSelector";
import BounceLoader from "react-spinners/BounceLoader";

const PeoplePage = () => {
	const { isLoading, isError, data, errorMessage } =
		useSelector(getPeopleSelector);

	if (isLoading) return <BounceLoader color='#a01989' />;

	if (isError) return <div>Error: {errorMessage}</div>;

	return (
		<>
			<div>PeoplePage</div>

			{data && data.length > 0 ? (
				<table>
					<th>
						<td>Name</td>
						<td>Gender</td>
					</th>
					{data.map((person) => (
						<tr>
							<td>{person.name}</td>
							<td>{person.gender}</td>
						</tr>
					))}
				</table>
			) : (
				<p>No data found</p>
			)}
		</>
	);
};

export default PeoplePage;
