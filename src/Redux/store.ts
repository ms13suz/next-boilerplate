// #region Global Imports
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from "redux-devtools-extension/developmentOnly";
// #endregion Global Imports

// #region Local Imports
import Reducers from "./Reducers";
import rootSaga from "./Sagas";
// #endregion Local Imports

export const makeStore = (initialState: {}) => {
    const sagaMiddleware = createSagaMiddleware()
    const store = createStore(
        Reducers,
        initialState,
        composeWithDevTools(applyMiddleware(sagaMiddleware))
    );

    (store as any).sagaTask = sagaMiddleware.run(rootSaga)

    return store
};

