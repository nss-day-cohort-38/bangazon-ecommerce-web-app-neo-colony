const remoteURL = "http://localhost:8000";

export default {
  get(id) {
    return fetch(`${remoteURL}/order`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${sessionStorage.getItem("bangazon-token")}`,
      },
    }).then((result) => result.json());
  },
  post(newOrder) {
   return fetch(`${remoteURL}/order`, {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       "Accept": "application/json",
       Authorization: `Token ${sessionStorage.getItem("bangazon-token")}`,
     },
     body: JSON.stringify(newORder) 
   }).then(data => data.json()); 
  },
  update(editedOrder) {
    return fetch(`${remoteURL}/orders/${editedOrder.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Token ${sessionStorage.getItem("banagzon-token")}`,
      },
      body: JSON.stringify(editedOrder)
   })
  },
  delete(id) {
     return fetch(`${remoteURL}/order/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Token ${sessionStorage.getItem("bangazon-token")}`,
        },
      })
    }
 };
