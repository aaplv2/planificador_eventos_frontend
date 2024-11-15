export async function actionFecth(url, method, headers, body) {
  const BASE_URL = "https://planificador-eventos-backend.vercel.app";

  const response = await fetch(`${BASE_URL + url}`, {
    method: method,
    headers: headers,
    body: body,
  });
  const data = await response.json();
  return data;
}
