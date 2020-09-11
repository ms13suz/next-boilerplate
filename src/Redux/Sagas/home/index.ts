/* eslint-disable */
import { call, put, takeLatest } from 'redux-saga/effects';
import { ActionConsts } from "@Definitions";
import { HomeActions } from "@Actions";
import { PlanetaryService } from "@Services";

function* GetApod(payload : any) {
    try {
        const response = yield call(PlanetaryService.GetPlanetImage, {...payload});

        yield put(HomeActions.Map(response));

    } catch (err) {
        console.log(JSON.stringify(err))
    }
}

export function* homeSaga() {
    // takeEvery:
    // listen for certain actions that are going to be dispatched and take them and run through our worker saga.
    yield takeLatest(ActionConsts.Home.GetReducer, GetApod);
}
