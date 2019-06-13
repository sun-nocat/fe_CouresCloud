import fetch from 'dva/fetch';

export function createClass({ payload }) {
    return fetch('http://127.0.0.1:3000/createClass', {
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


export function queryClass({ payload }) {
    return fetch('http://127.0.0.1:3000/queryClass', {
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

export function queryAllClass({ payload }) {
    return fetch('http://127.0.0.1:3000/queryClass?type="lalal"', {
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

export function joinClass({ payload }) {
    return fetch(`http://127.0.0.1:3000/joinClass?id=${payload.id}`, {
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

export function exitClass({ payload }) {
    return fetch(`http://127.0.0.1:3000/exitClass?id=${payload.id}`, {
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

// 签到
export function submitSigin({ payload }) {
    return fetch(`http://127.0.0.1:3000/submitSigin`, {
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

// 查看签到

export function querySigin({ payload }) {
    return fetch(`http://127.0.0.1:3000/querySigin?id='${payload.id}'`, {
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


// 学生签到


export function doSigin({ payload }) {
    return fetch(`http://127.0.0.1:3000/doSigin`, {
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




export function queryLeave({ payload }) {
    return fetch(`http://127.0.0.1:3000/queryLeave`, {
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


// 签到
export function submitLeave({ payload }) {
    return fetch(`http://127.0.0.1:3000/submitLeave`, {
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



// 签到
export function dealLeave({ payload }) {
    return fetch(`http://127.0.0.1:3000/dealLeave`, {
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