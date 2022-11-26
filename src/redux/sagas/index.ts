import { spawn, call, all } from "redux-saga/effects";
import { peopleWatcher } from "./people/peopleSagas";
import { planetsWatcher } from "./planets/planetsSagas";

export default function* rootSaga(): any {
	const sagas = [peopleWatcher, planetsWatcher];

	const retrySagas = yield sagas.map((saga) => {
		return spawn(function* () {
			while (true) {
				try {
					yield call(saga);
					break;
				} catch (error) {
					console.log(error);
				}
			}
		});
	});

	yield all(retrySagas);
}
