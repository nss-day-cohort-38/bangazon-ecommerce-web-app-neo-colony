const apiUrl = "http://localhost:8000";

export default {
  getOne(route, id) {
    return fetch(`${apiUrl}/${route}/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
  },

  
};