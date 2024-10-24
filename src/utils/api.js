class Api {
  constructor(baseUrl) {
    this._baseUrl = baseUrl;
  }

  handleRes(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getFetch(url, method, body) {
    return fetch(`${this._baseUrl}/${url}`, {
      method,
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + localStorage.getItem("token") || "",
      },
      body,
    }).then(this.handleRes);
  }

  getUserInfo() {
    return this.getFetch("users/me", "GET");
  }

  updateUserInfo(name, about) {
    return this.getFetch(
      "users/me",
      "PATCH",
      JSON.stringify({
        name,
        about,
      })
    );
  }

  uploadImage(data) {
    return this.getFetch("upload", "POST", { data });
  }
}

const api = new Api(
  // `https://api.aroundfull.chickenkiller.com`
  `http://localhost:3000`
);

export default api;
