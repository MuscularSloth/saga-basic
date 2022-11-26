import { spawn, call, all } from "redux-saga/effects";
import { peopleWatcher } from "./people/peopleSagas";

export default function* rootSaga(): any {
	const sagas = [peopleWatcher];

	const retrySagas = yield sagas.map((saga) => {
		return spawn(function* () {
			while (true) {
				try {
					yield call(saga);
				} catch (error) {
					console.log(error);
				}
			}
		});
	});

	yield all(retrySagas);
}
