// #region Local Imports
import { ActionConsts } from "@Definitions";

// #region Interface Imports
import { IHomePage } from "@Interfaces";
// #endregion Interface Imports

export const HomeActions = {
    Map: (payload: {}) => ({
        payload,
        type: ActionConsts.Home.SetReducer,
    }),

    Reset: () => ({
        type: ActionConsts.Home.ResetReducer,
    }),

    GetApod: (payload: IHomePage.Actions.IGetApodPayload) => ({
        payload,
        type: ActionConsts.Home.GetReducer,
    }),
};
