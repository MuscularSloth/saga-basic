export type IPlanetsKeysTypes = keyof typeof planetsTypes;
export type IPlanetsValuesTypes = typeof planetsTypes[IPlanetsKeysTypes];

export const planetsTypes = {
	GET_PLANETS_FETCH: "PLANETS/GET_FETCH",
	GET_SINGLE_PLANET_FETCH: "PLANETS/GET_SINGLE_PERSON",
	GET_PLANETS_SUCCESS: "PLANETS/GET_SUCCESS",
	GET_PLANETS_FAILURE: "PLANETS/GET_FAILURE",
};
