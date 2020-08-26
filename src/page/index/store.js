import { createStore } from '../../annx/store';

//创建reducer容器
let reducers = (state, action) => {
    if (!action || !action.type) return state;
    switch (action.type){
        case 'add':
            return {
                ...state,
                id: state.id  + action.payload
            }
        case 'minute':
            return {
                ...state,
                id: state.id  - action.payload
            }
    }
}
//创建初始化state数据
let initialState = {
    id: 200,
}

//获取store容器
export let store = createStore(reducers, initialState);
export let state = store.getState();
