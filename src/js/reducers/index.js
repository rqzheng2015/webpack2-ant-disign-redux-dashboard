/**
 * Created by rqzheng on 2017/2/17.
 */
import {combineReducers} from 'redux';
import dashboardReducer from './dashboard';
//store只有一个
//但是reducer可以分拆成很多个
//然后用combineReducers组合
export default combineReducers({
    dashboardStore: dashboardReducer,
});
