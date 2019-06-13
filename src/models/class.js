import * as classFetch from '../services/class.js'

export default {

    namespace: 'classModel',

    state: {
        userData: '',
        isCreateClass: false,
        classData: '',
        AllClassData: '',
        isjoinClass: false,
        isexitClass: false,
        siginData:'',
        queryLeave:''
    },

    subscriptions: {

    },

    effects: {

        *createClass({ payload }, { call, put }) {
            console.log(payload)
            const data = yield call(classFetch.createClass, { payload })
            console.log(data)
            yield put({ type: 'isCreateClass', payload: { type: data.status } })
        },
        *queryClass({ payload }, { call, put }) {
            console.log(payload)
            const data = yield call(classFetch.queryClass, { payload })
            console.log(data)
            yield put({ type: 'isqueryClass', payload: { type: data } })
        },
        *queryAllClass({ payload }, { call, put }) {
            console.log(payload)
            const data = yield call(classFetch.queryAllClass, { payload })
            console.log(data)
            yield put({ type: 'isqueryAllClass', payload: { type: data } })
        },
        *joinClass({ payload }, { call, put }) {
            console.log(payload)
            const data = yield call(classFetch.joinClass, { payload })
            console.log(data)
            yield put({ type: 'isjoinClass', payload: { type: data.status } })
        },
        *exitClass({ payload }, { call, put }) {
            console.log(payload)
            const data = yield call(classFetch.exitClass, { payload })
            console.log(data)
            yield put({ type: 'isexitClass', payload: { type: data.status } })
        },
        // 签到部分
        *submitSigin({ payload }, { call, put }) {
            console.log(payload)
            const data = yield call(classFetch.submitSigin, { payload })
            console.log(data)
            yield put({ type: 'isexitClass', payload: { type: data.status } })
        },
        *querySigin({ payload }, { call, put }) {
            console.log(payload)
            const data = yield call(classFetch.querySigin, { payload })
            console.log(data)
            yield put({ type: 'siginData', payload: { type: data } })
        },
        *doSigin({ payload }, { call, put }) {
            console.log(payload)
            const data = yield call(classFetch.doSigin, { payload })
            console.log(data)
            yield put({ type: 'isexitClass', payload: { type: data.status } })
        },

        *submitLeave({ payload }, { call, put }) {
            console.log(payload)
            const data = yield call(classFetch.submitLeave, { payload })
            console.log(data)
            // yield put({ type: 'isexitClass', payload: { type: data.status } })
        },
        
        *queryLeave({ payload }, { call, put }) {
            console.log(payload)
            const data = yield call(classFetch.queryLeave, { payload })
            console.log(data)
            yield put({ type: 'isqueryLeave', payload: { type: data.data } })
        },
        *dealLeave({ payload }, { call, put }) {
            console.log(payload)
            const data = yield call(classFetch.dealLeave, { payload })
            console.log(data)
            // yield put({ type: 'isqueryLeave', payload: { type: data.data } })
        },

    },

    reducers: {
        saveData(state, { payload }) {
            return { ...state, userData: payload};
        },
        isCreateClass(state, { payload }) {
            return { ...state, isCreateClass: payload.type};
        },
        isqueryClass(state, { payload }) {
            return { ...state, classData: payload.type};
        },
        isqueryAllClass(state, { payload }) {
            return { ...state, AllClassData: payload.type};
        },
        isjoinClass(state, { payload }) {
            return { ...state, isjoinClass: payload.type};
        },
        isexitClass(state, { payload }) {
            return { ...state, isexitClass: payload.type};
        },
        siginData(state, { payload }) {
            return { ...state, siginData: payload.type};
        },
        isqueryLeave(state, { payload }) {
            return { ...state, queryLeave: payload.type};
        },

    },

};
