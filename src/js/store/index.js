/**
 * Created by rqzheng on 2017/2/17.
 */
'use strict';


import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, autoRehydrate} from 'redux-persist';
import localforage from 'localforage'
import reducers from '../reducers';
import createLogger from 'redux-logger';
import array from './array';
import promise from './promise';

//判断是否在chrome dev mode中
/*
 let isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;
 */

//引用的日志插件
const logger = createLogger();
//中间件定义
let middlewares = [
    thunk,
    promise,
    array,
    logger
];


//利用中间件加强store.dispatch的功能
let createAppStore = applyMiddleware(...middlewares)(createStore);


export default function configureStore(onComplete: ()=>void) {
    const store = autoRehydrate()(createAppStore)(reducers);
    let opt = {
        storage: localforage,
        transform: [],
    };
    persistStore(store, opt, onComplete);
    window.store = store;
    /*if (isDebuggingInChrome) {

     }*/
    return store;
}


