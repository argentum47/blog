class BlogApi {
  status(resp) {
    if(resp.status >= 200 && resp.status < 300)
      return Promise.resolve(resp)
    else
      return Promise.reject(new Error(resp.statusText))
  }

  json(resp) {
    return resp.json()
  }

  all() {
    return fetch('/api/blogs')
    .then(this.status)
    .then(this.json)
  }

  find(id) {
    return fetch(`api/blogs/${id}`)
      .then(status)
      .then(json)
  }

  create(title, content) {
    return fetch('/api/blogs/create', {
      method: 'POST',
      body: `title=${title}&content=${content}`
    })
    .then(status)
    .then(json)
  }
}

export default new BlogApi();
