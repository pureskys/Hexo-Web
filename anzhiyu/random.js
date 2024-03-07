var posts=["posts/a4a20e09/","posts/6632d351/","posts/b76f16d1/","posts/4564416b/","posts/e11ac325/","posts/4e8c38c2/","posts/5523b363/","posts/d03beb59/","posts/b82c27fd/","posts/8b30d4d2/","posts/测试文章/","posts/70eb842b/","posts/4d4b3e5e/","posts/d72657c8/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };