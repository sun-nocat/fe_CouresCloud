import fetch from 'dva/fetch';

export function createCourse({ payload }) {
    return fetch('http://127.0.0.1:3000/createCourse', {
        method: 'post',
        credentials: "include",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        });
}


export function queryCourse({ payload }) {
    return fetch('http://127.0.0.1:3000/queryCourse', {
        method: 'get',
        credentials: "include",
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        });
}

export function chooseCourse({ payload }) {
    return fetch(`http://127.0.0.1:3000/chooseCourse?id=${payload.id}`, {
        method: 'get',
        credentials: "include",
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        });
}


export function delCourseStudent ({ payload }) {
    return fetch(`http://127.0.0.1:3000/delCourseStudent?student_id=${payload.student_id}&course_id=${payload.course_id}`, {
        method: 'get',
        credentials: "include",
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        });
}



export function myCourse ({ payload }) {
    return fetch(`http://127.0.0.1:3000/myCourse`, {
        method: 'get',
        credentials: "include",
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        });
}



export function delMyCourseStudent ({ payload }) {
    return fetch(`http://127.0.0.1:3000/delCourseStudent?id=${payload.id}`, {
        method: 'get',
        credentials: "include",
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        });
}


export function queryCourseMsg ({ payload }) {
    return fetch(`http://127.0.0.1:3000/queryCourseMsg`, {
        method: 'get',
        credentials: "include",
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        });
}


export function download ({ payload }) {
    return fetch(`http://127.0.0.1:3000/download?path='${payload.path}'`, {
        method: 'get',
        credentials: "include",
    })
        .then(response => {
            return response.json()
        })
        .catch(error => {
            return error
        });
}