$(document).ready(function () {
  // class
  programs.forEach(classFunction);
  function classFunction(item) {
    $(".class-content").append(`
      <a href="./classes.html?id=${item.id}" class="class-content-item">
        <div class="class-pict" id="class-pict-${item.id}"></div>
        <div class="class-desc">
          <div class="class-name">${item.name}</div>
          <div class="class-time">${item.duration}</div>
        </div>
      </a>
    `);
    $(`#class-pict-${item.id}`).css("background-image", `url(${item.image})`);
  }

  // blog
  blog.forEach(blogFunction);
  function blogFunction(item) {
    $(".blog-content").append(`
      <a href="./blog-detail.html?id=${item.id}" class="blog-content-item">
        <div class="blog-item-img" id="blog-item-img-${item.id}">
          <div class="blog-category">${item.category}</div>
        </div>
        <div class="blog-item-content">
          <div class="blog-title">${item.blogTitle}</div>
          <div class="blog-time">${item.datePosted}</div>
          <div class="blog-excerpt">${item.excerpt}</div>
        </div>
      </a>
    `);
    $(`#blog-item-img-${item.id}`).css(
      "background-image",
      `url(${item.image})`
    );
  }
});
