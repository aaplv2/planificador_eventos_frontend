export async function getFetch(url, method, body) {
  const baseUrl = `http://localhost:3000`;
  const response = await fetch(`${baseUrl}/${url}`, {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + localStorage.getItem("jwt") || "",
    },
    body,
  })
//   .then((res) => {
//     if (res.ok) {
//       return res.json();
//     }
//     return Promise.reject(`Error: ${res.status}`);
//   });
  const data = await response.json();
  return data;
}
