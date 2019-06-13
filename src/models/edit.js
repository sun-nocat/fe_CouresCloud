import * as user from '../services/user.js'

export default {

    namespace: 'editModel',

    state: {
        userData: '',
        isSuccess: false
    },

    subscriptions: {

    },

    effects: {
        *getData({ payload }, { call, put }) {
            console.log(payload)
            const data = yield call(user.getMessage, { payload })
            console.log(data)
            // 
            yield put({ type: 'saveData', payload: { type: data } })

        },
        *updateMessage({ payload }, { call, put }) {
            console.log(payload)
            const data = yield call(user.updateMessage, { payload })
            console.log(data)
            // 
            yield put({ type: 'isSuccess', payload: { type: data.status } })

        }
    },

    reducers: {
        saveData(state, { payload }) {
            console.log(payload)
            return { ...state, userData: payload};
        },
        isSuccess(state, { payload }) {
            return { ...state, isSuccess: payload.type};
        },


    },

};
