"use strict";

hexo.extend.generator.register('thePosts', function (locals) {
  var jsonData = locals.posts.filter(function (post) {
    return post.random !== false;
  }).map(function (post) {
    return {
      title: post.title || "暂无标题",
      abbrlink: post.abbrlink,
      cover: post.cover,
      description: post.description || "暂无简介"
    };
  });
  return {
    path: 'random.json',
    data: JSON.stringify(jsonData)
  };
});