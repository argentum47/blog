class BlogApi {
  status(resp) {
    console.log(resp)
    if(resp.status >= 200 && resp.status < 300)
      return Promise.resolve(resp)
    else
      return Promise.reject(new Error(resp.statusText))
  }

  json(resp) {
    return resp.json()
  }

  all() {
    fetch('/api/blogs')
    .then(status)
    .then(json)
  }

  find(id) {
    fetch(`api/blogs/${id}`)
      .then(status)
      .then(json)
  }

  create(title, content) {
    fetch('/api/blogs/create', {
      method: 'POST',
      body: `title=${title}&content=${content}`
    })
    .then(status)
    .then(json)
  }
}

export default BlogApi;
