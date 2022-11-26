export type IPeopleKeysTypes = keyof typeof peopleTypes;
export type IPeopleValuesTypes = typeof peopleTypes[IPeopleKeysTypes];

export const peopleTypes = {
	GET_PEOPLE_FETCH: "PEOPLE/GET_FETCH",
	GET_SINGLE_PERSON_FETCH: "PEOPLE/GET_SINGLE_PERSON",
	GET_PEOPLE_SUCCESS: "PEOPLE/GET_SUCCESS",
	GET_PEOPLE_FAILURE: "PEOPLE/GET_FAILURE",
};
