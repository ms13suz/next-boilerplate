// #region Global Imports
import { Store } from "redux";
import { AppInitialProps } from "next/app";
import { NextPageContext } from "next";
// #endregion Global Imports
import type { Dispatch as ReduxDispatch } from 'redux';

interface AppStore extends Store {
    dispatch: ReduxDispatch;
}

export interface AppWithStore extends AppInitialProps {
    store: AppStore;
}

export interface ReduxNextPageContext extends NextPageContext {
    store: AppStore;
}
