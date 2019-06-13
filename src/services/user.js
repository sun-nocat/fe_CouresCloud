import fetch from 'dva/fetch';


export function login({ payload }) {
  return fetch('http://127.0.0.1:3000/login', {
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


export function logout({ payload }) {
  return fetch('http://127.0.0.1:3000/logout', {
    method: 'get',
    credentials: "include"

  })
    .then(response => {
      return response.json()
    })
    .catch(error => {
      return error
    });
}


export function register({ payload }) {
  return fetch('http://127.0.0.1:3000/register', {
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


export function getMessage({ payload }) {
  return fetch('http://127.0.0.1:3000/getMessage', {
    method: 'get',
    credentials: "include"
  })
    .then(response => {
      return response.json()
    })
    .catch(error => {
      return error
    });
}



export function updateMessage({ payload }) {
  return fetch('http://127.0.0.1:3000/updateMessage', {
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