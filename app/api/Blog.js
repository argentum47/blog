import fetch from '../ajax.js';

class BlogApi {
  status(resp) {
    if(resp.status >= 200 && resp.status < 300)
      return Promise.resolve(resp)
    else
      return Promise.reject(new Error(resp.statusText))
  }

  json(resp) {
    return JSON.parse(resp.responseText)
  }

  all() {
    return fetch('/api/blogs')
    .then(this.status)
    .then(this.json)
  }

  find(id) {
    return fetch(`api/blogs/${id}`)
      .then(this.status)
      .then(this.json)
  }

  create(title, content) {
    return fetch('/api/blogs/create', {
      method: 'POST',
      body: `title=${title}&content=${content}`
    })
    .then(this.status)
    .then(this.json)
  }
}

export default new BlogApi();
