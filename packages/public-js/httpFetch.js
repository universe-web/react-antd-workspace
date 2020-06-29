const { REACT_APP_ORIGIN: origin } = process.env;

function stringifyLocation(data) {
  if (Object.keys(data).length === 0) {
    return "";
  }

  let params = "?";
  for (let key in data) {
    params += key + "=" + data[key] + "&";
  }

  return params.slice(0, -1);
}

function fetchApi(option = {}) {
  let { url, method, body } = option;

  let init = {
    headers: { Accept: "application/json" },
    credentials: "include",
  };

  init.method = (method && method.toUpperCase()) || "GET";
  url = origin + url;

  if (method === "GET") {
    url += stringifyLocation(body || {});
  } else {
    init.headers["Content-Type"] = "application/json";

    if (body) {
      init.body = JSON.stringify(body);
    }
  }

  return fetch(url, init)
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.statusText);
      }

      return response.json();
    })
    .then((data) => data);
}

export { fetchApi };
