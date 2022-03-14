function del() {
  return {
    method: 'DELETE'
  }
}

function post(body) {
  return {
    method: 'POST',
    headers : {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }
}

function put(body) {
  return {
    method: 'PUT',
    headers : {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }
}

const FetchOptions = {delete : del, post, put}

export default FetchOptions