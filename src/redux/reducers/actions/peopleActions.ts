import { IPeople, IPeoples } from "./../stores/peopleStore";
import { peopleTypes } from "./../types/peopleTypes";
import { IPeopleValuesTypes } from "./../types/peopleTypes";

export interface IPeopleAction {
	type: IPeopleValuesTypes;
	payload?: any;
}

export const getPeopleFetch = (): IPeopleAction => ({
	type: peopleTypes.GET_PEOPLE_FETCH,
});

export const getSinglePersonFetch = (url: string): IPeopleAction => ({
	type: peopleTypes.GET_SINGLE_PERSON_FETCH,
	payload: url,
});

export const getPeopleSuccess = (
	data: IPeople[] | IPeoples
): IPeopleAction => ({
	type: peopleTypes.GET_PEOPLE_SUCCESS,
	payload: data,
});

export const getPeopleFailure = (error: string | unknown): IPeopleAction => ({
	type: peopleTypes.GET_PEOPLE_FAILURE,
	payload: error,
});
