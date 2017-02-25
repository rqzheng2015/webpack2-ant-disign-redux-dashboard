'use strict';

import * as TYPES from './types';

module.exports = {

    //侧边栏开启
    setCollapsedTrue() {
        return {
            'type': TYPES.COLLAPSED_ON,
            'collapsed': true,
        }
    },
    //侧边栏关闭
    setCollapsedFalse(){
        return {
            'type': TYPES.COLLAPSED_OFF,
            'collapsed': false,
        }
    }
}