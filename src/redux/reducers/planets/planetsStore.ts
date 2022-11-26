import { planetsTypes } from "./planetsTypes";
import { IPlanetsAction } from "./planetsActions";

export interface IPlanet {
	name: string;
	rotation_period: string;
	orbital_period: string;
	diameter: string;
	climate: string;
	gravity: string;
	terrain: string;
	surface_water: string;
	population: string;
	residents: string[];
	films: string[];
	created: string;
	edited: string;
	url: string;
}

export interface IPlanets {
	count: number;
	next: string | null;
	previous: string | null;
	results: IPlanet[];
}

interface IPlanetState {
	isLoading: boolean;
	isError: boolean;
	errorMessage: string | null;
	data: IPlanet | IPlanets | null;
	currentPlanetLink: string | null;
}

const initialState: IPlanetState = {
	isLoading: false,
	isError: false,
	errorMessage: null,
	data: null,
	currentPlanetLink: null,
};

export const planetsStore = (
	state = initialState,
	action: IPlanetsAction
): IPlanetState => {
	const {
		GET_PLANETS_FETCH,
		GET_SINGLE_PLANET_FETCH,
		GET_PLANETS_SUCCESS,
		GET_PLANETS_FAILURE,
	} = planetsTypes;

	console.log(action);

	switch (action.type) {
		case GET_PLANETS_FETCH:
			return { ...state, isError: false, isLoading: true };
		case GET_SINGLE_PLANET_FETCH:
			return {
				...state,
				isError: false,
				isLoading: true,
				currentPlanetLink: action.payload,
			};
		case GET_PLANETS_SUCCESS:
			return {
				...state,
				isError: false,
				isLoading: false,
				data: action.payload,
			};
		case GET_PLANETS_FAILURE:
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
