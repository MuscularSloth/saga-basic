import { peopleTypes } from "./peopleTypes";
import { IPeopleAction } from "./peopleActions";

export interface IPeople {
	name: string;
	height: string;
	mass: string;
	hair_color: string;
	skin_color: string;
	eye_color: string;
	birth_year: string;
	gender: string;
	homeworld: string;
	films: string[];
	species: string[];
	vehicles: string[];
	starships: string[];
	created: string;
	edited: string;
	url: string;
}

export interface IPeoples {
	count: number;
	next: string | null;
	previous: string | null;
	results: IPeople[];
}

interface IPeopleState {
	isLoading: boolean;
	isError: boolean;
	errorMessage: string | null;
	data: IPeople[] | IPeoples;
}

const initialState: IPeopleState = {
	isLoading: false,
	isError: false,
	errorMessage: null,
	data: [],
};

export const peopleStore = (
	state = initialState,
	action: IPeopleAction
): IPeopleState => {
	const {
		GET_PEOPLE_FETCH,
		GET_SINGLE_PERSON_FETCH,
		GET_PEOPLE_SUCCESS,
		GET_PEOPLE_FAILURE,
	} = peopleTypes;

	switch (action.type) {
		case GET_PEOPLE_FETCH:
		case GET_SINGLE_PERSON_FETCH:
			return { ...state, isError: false, isLoading: true };
		case GET_PEOPLE_SUCCESS:
			return {
				...state,
				isError: false,
				isLoading: false,
				data: action.payload,
			};
		case GET_PEOPLE_FAILURE:
			return {
				...state,
				isError: true,
				isLoading: false,
				errorMessage: action.payload.message,
			};
		default:
			return state;
	}
};
