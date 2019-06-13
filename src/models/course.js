import * as courseAPI from '../services/course.js'

export default {

    namespace: 'courseModel',

    state: {
        courseData: '',
        isSuccess: false,
        myCourse:'',
        queryCourseMsg:''

    },

    subscriptions: {

    },

    effects: {
        *createCourse({ payload }, { call, put }) {
            console.log(payload)
            const data = yield call(courseAPI.createCourse, { payload })
            console.log(data)
            // 
            // yield put({ type: 'saveData', payload: { type: data } })

        },
        *queryCourse({ payload }, { call, put }) {
            console.log(payload)
            const data = yield call(courseAPI.queryCourse, { payload })
            console.log(data)
            // 
            yield put({ type: 'isqueryCourse', payload: { type: data } })

        },
        *chooseCourse({ payload }, { call, put }) {
            console.log(payload)
            const data = yield call(courseAPI.chooseCourse, { payload })
            console.log(data)
            // 
            // yield put({ type: 'isSuccess', payload: { type: data.status } })

        },
        *delCourseStudent ({ payload }, { call, put }) {
            console.log(payload)
            const data = yield call(courseAPI.delCourseStudent, { payload })
            console.log(data)
            // 
            // yield put({ type: 'isSuccess', p6ayload: { type: data.status } })

        },
        *myCourse ({ payload }, { call, put }) {
            console.log(payload)
            const data = yield call(courseAPI.myCourse, { payload })
            yield put({ type: 'saveMyCourse', payload: { type: data}})
            console.log(data)

        },
        *delMyCourseStudent ({ payload }, { call, put }) {
            console.log(payload)
            const data = yield call(courseAPI.delMyCourseStudent, { payload })
            console.log(data)
            // 
            // yield put({ type: 'isSuccess', p6ayload: { type: data.status } })

        },

        *queryCourseMsg ({ payload }, { call, put }) {
            console.log(payload)
            const data = yield call(courseAPI.queryCourseMsg, { payload })
            console.log(data)
            // 
            yield put({ type: 'isqueryCourseMsg', payload: { type: data.data } })

        },
        *download ({ payload }, { call, put }) {
            console.log(payload)
            const data = yield call(courseAPI.download, { payload })
            console.log(data)
            // 
            // yield put({ type: 'isqueryCourseMsg', payload: { type: data.data } })

        },
    },

    reducers: {
        isqueryCourse(state, { payload }) {
            return { ...state, courseData: payload.type};
        },
        saveMyCourse(state, { payload }) {
            return { ...state, myCourse: payload.type}
        },
        isqueryCourseMsg(state, { payload }) {
            return { ...state, queryCourseMsg: payload.type}
        },

    },

};
