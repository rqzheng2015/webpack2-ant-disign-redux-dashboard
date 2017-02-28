/**
 * Created by rqzheng on 2017/2/22.
 */
'use strict';
//控制管理系统界面的reducer
import * as TYPES from '../actions/types';

export type State = {
    collapsed: boolean;
};

const initialState = {
    collapsed: false,
};

export default function dashboardReducer(state: State = initialState, action: Action): State {
    switch (action.type) {
        case TYPES.COLLAPSED_OFF:
            return {
                ...state,
                collapsed: false
            };
        case TYPES.COLLAPSED_ON:
            return {
                ...state,
                collapsed: true
            };
        default:
            return state;
    }
}

