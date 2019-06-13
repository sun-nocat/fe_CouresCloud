import * as user from '../services/user.js'

export default {

    namespace: 'loginModel',

    state: {
        value: 'student',
        user: '',
        registerState: '',
        tabOpen:false
    },

    subscriptions: {

    },

    effects: {
        *fetch({ payload }, { call, put }) {  // eslint-disable-line
            yield put({ type: 'save' });
        },
        // 登录
        *login({ payload }, { call, put }) {
            const data = yield call(user.login, { payload });
            yield put({ type: 'userLogin', payload: data })
        },
        *logout({ payload }, { call, put }) {
            const data = yield call(user.logout, {})
            console.log(data)
            if (data.status) {
                yield put({ type: 'userLogin', payload: {} })
                yield put({ type: 'editModel/saveData', payload: {type:""} })
                // yield put({ type: 'userLogin', payload: {} })


            }
        },
        *register({ payload }, { call, put }) {
            console.log(payload)
            const data = yield call(user.register, { payload })
            console.log(data)
            // 注册成功
            yield put({ type: 'changeRegisterState', payload: { type: data.status } })

        }
    },

    reducers: {
        save(state, { payload }) {
            return { ...state };
        },

        userLogin(state, { payload }) {
            console.log(payload)
            return { ...state, user: payload }
        },
        changeRegisterState(state, { payload }) {
            return { ...state, registerState: payload.type }

        },
        tabOpenToTrue(state, { payload }) {
            return { ...state, tabOpen: payload.type }
        }

    },

};
