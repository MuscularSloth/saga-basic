import { IPeopleTypes } from "./../types/peopleTypes";

export interface IPeopleAction {
	type: IPeopleTypes;
	payload?: any;
}

export const getPeopleFetch = (): IPeopleAction => ({
	type: "GET_PEOPLE_FETCH",
});

export const getPeopleSuccess = (): IPeopleAction => ({
	type: "GET_PEOPLE_SUCCESS",
});

export const getPeopleFailure = (): IPeopleAction => ({
	type: "GET_PEOPLE_FAILURE",
});
