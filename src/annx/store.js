/**
 *
 * @introduce
 * @author
 * @param
 * reducers:{
 *     type: () => {}
 * }
 *
 * @version
 *
 */


export const createStore = (reducers, initialState = {}, enhancer) => {
    // 初始化store
    let state = initialState;
    // 定义一个数组，保存监听的方法
    let listeners = [];
    let isDispatch = false;

    // 实现dispatch方法
    // action: { type: add, payload: ...}
    const dispatch = action => {
        if (isDispatch) return action;
        isDispatch = true;
        state = reducers(state, action);
        isDispatch = false;
        listeners.forEach(listener => listener())
        return state;
    }

    // 提供监听的方法
    const subscribe = listener => {
        listeners.push(listener);
    }

    // 删除监听的方法
    const unsubscribe = listener => {
        const index = listeners.indexOf(listener);
        listeners.splice(index, 1);
    }
    const getState = _ => state;
    return {
        getState,
        dispatch,
        subscribe,
        unsubscribe
    }
}
