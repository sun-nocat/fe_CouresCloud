import fetch from 'dva/fetch';

function parseJSON(response) {
  return response.json();
}

function checkStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response;
  }

  const error = new Error(response.statusText);
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  console.log(options)
  return fetch(url, options)
    .then(checkStatus)
    .then(parseJSON)
    .then(data => ({ data }))
    .catch(err => ({ err }));
}

export const post = (url, payload, options) => {
  return request(
    url,
    {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {
        "Content-Type": "application/json"
      },
      // credentials: "include"
    },
    options
  );
};


// export const get = (url, payload, options) => {
//   let params = [];
//   let getUrl = url;
//   if (!isEmpty(payload)) {
//     params = Object.keys(payload).map(c => {
//       const value = payload[c];
//       return [
//         c,
//         "=",
//         encodeURIComponent(
//           typeof value === "object" ? JSON.stringify(value) : value
//         )
//       ].join("");
//     });
//   }
//   // getUrl = wrapUrlWithCtoken(getUrl + "?" + params.join("&"));
//   if (params.length > 0) {
//     getUrl = wrapUrlWithCtoken(getUrl + "?" + params.join("&"));
//   } else {
//     getUrl = wrapUrlWithCtoken(getUrl);
//   }

//   return request(
//     getUrl,
//     {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json"
//       },
//       credentials: "include"
//     },
//     options
//   );
// };