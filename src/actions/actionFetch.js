export async function actionFecth(url, method, headers, body) {
  const BASE_URL = "http://localhost:3000";

  const response = await fetch(`${BASE_URL + url}`, {
    method: method,
    headers: headers,
    body: body,
  });
  const data = await response.json();
  return data;
}
