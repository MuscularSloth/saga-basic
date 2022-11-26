export type IPeopleTypes = keyof typeof peopleTypes;

export const peopleTypes = {
	GET_PEOPLE_FETCH: "PEOPLE/GET_FETCH",
	GET_PEOPLE_SUCCESS: "PEOPLE/GET_SUCCESS",
	GET_PEOPLE_FAILURE: "PEOPLE/GET_FAILURE",
};
