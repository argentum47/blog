var Blog =  {
  blogs: [
    {
      id: 1,
      title: 'First Blog',
      content: 'My first experience with express and react with redux. Full isomorphic.'
  },
  {
    id: 2,
    title: 'Second Blog',
    content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'
  },
  {
    id: 3,
    title: 'Third Blog',
    content: 'Suspendisse in leo porta, ornare justo eget, hendrerit nunc. Quisque pulvinar odio leo, vitae tempor ex vestibulum et. Vivamus molestie vulputate nisi, quis interdum enim scelerisque at. Etiam ex nisi, accumsan eget pulvinar vitae, ornare non ante. Proin eu semper mi. Sed ante diam, sollicitudin id dolor vel, egestas facilisis sem.'
  }],

  create: function(blog, cb) {
    if(!(blog || blog.title)) {
      cb(Error("invalid data"))
    } else {
      blog.id = this.blogs.length + 1;
      this.blogs.push(blog);
      cb(null, blog);
    }
  },

  get: function(predicate, cb) {
    if(!(predicate || Object.getOwnPropertyNames(predicate).length)) {
      cb(Error("invalid data"))
    } else {
      var result = this.blogs.filter(function(blog) {
        return Object.keys(predicate).reduce(function(res, k) { return res && predicate[k] == blog[k] },true)
      });
      cb(null, result);
    }
  },

  all: function(noob, cb) {
    cb(null, this.blogs);
  }
}


module.exports = Blog
