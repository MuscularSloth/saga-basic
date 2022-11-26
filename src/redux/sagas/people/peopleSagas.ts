import { getPeopleSelector } from "./../../reducers/people/peopleSelector";
import { SagaIterator } from "redux-saga";
import { takeEvery, put, call, select } from "redux-saga/effects";
import {
	getPeopleSuccess,
	getPeopleFailure,
} from "../../reducers/people/peopleActions";
import { peopleTypes } from "../../reducers/people/peopleTypes";
// import { IPeople, IPeoples } from "./../../reducers/stores/peopleStore";

export function* peopleWatcher() {
	yield takeEvery(peopleTypes.GET_PEOPLE_FETCH, peopleFetchWorker);
	yield takeEvery(peopleTypes.GET_SINGLE_PERSON_FETCH, singlePersonFetchWorker);
}

export function* peopleFetchWorker(): SagaIterator {
	const apiStarWars = "https://swapi.dev/api/people";

	try {
		const request = yield call(fetch, apiStarWars);
		const data = yield call([request, request.json]);
		yield put(getPeopleSuccess(data));
	} catch (e) {
		yield put(getPeopleFailure(e));
	}
}

export function* singlePersonFetchWorker(): SagaIterator {
	const { currentPersonLink } = yield select(getPeopleSelector);

	try {
		const request = yield call(fetch, currentPersonLink);
		const data = yield call([request, request.json]);
		yield put(getPeopleSuccess(data));
	} catch (e) {
		yield put(getPeopleFailure(e));
	}
}
