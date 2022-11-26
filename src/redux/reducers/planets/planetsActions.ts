import { IPlanet, IPlanets } from "./planetsStore";
import { planetsTypes } from "./planetsTypes";
import { IPlanetsValuesTypes } from "./planetsTypes";

export interface IPlanetsAction {
	type: IPlanetsValuesTypes;
	payload?: any;
}

export const getPlanetsFetch = (): IPlanetsAction => ({
	type: planetsTypes.GET_PLANETS_FETCH,
});

export const getSinglePlanetFetch = (url: string): IPlanetsAction => ({
	type: planetsTypes.GET_SINGLE_PLANET_FETCH,
	payload: url,
});

export const getPlanetsSuccess = (
	data: IPlanet[] | IPlanets
): IPlanetsAction => ({
	type: planetsTypes.GET_PLANETS_SUCCESS,
	payload: data,
});

export const getPlanetsFailure = (error: string | unknown): IPlanetsAction => ({
	type: planetsTypes.GET_PLANETS_FAILURE,
	payload: error,
});
