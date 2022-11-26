import {
	getPlanetsSuccess,
	getPlanetsFailure,
} from "./../../reducers/planets/planetsActions";
import { SagaIterator } from "redux-saga";
import { takeEvery, put, call } from "redux-saga/effects";
import { planetsTypes } from "../../reducers/planets/planetsTypes";

export function* planetsWatcher() {
	yield takeEvery(planetsTypes.GET_PLANETS_FETCH, planetsFetchWorker);
	yield takeEvery(
		planetsTypes.GET_SINGLE_PLANET_FETCH,
		singlePlanetFetchWorker
	);
}

export function* planetsFetchWorker(): SagaIterator {
	const apiStarWars = "https://swapi.dev/api/planets";

	try {
		const request = yield call(fetch, apiStarWars);
		const data = yield call([request, request.json]);
		yield put(getPlanetsSuccess(data));
	} catch (e) {
		yield put(getPlanetsFailure(e));
	}
}

export function* singlePlanetFetchWorker(): SagaIterator {}
