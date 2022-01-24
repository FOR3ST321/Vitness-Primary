$(document).ready(function () {
  // get category
  var categories = [];
  blog.forEach(getCategory);
  function getCategory(item) {
    categories.push(item.category);
  }
  categories = categories.sort();
  categories = jQuery.unique(categories);

  // category section
  var params = new URLSearchParams(location.search);
  var category = params.get("category");
  if (category) {
    category = category.replace("-", " ");
  }

  $(".category-item-container").append(`
    <button class="category-item ${
      !category ? "category-active" : ""
    }" onclick="location.href = './blog.html'">
        <div class="category-text">All</div>
    </button>
  `);
  categories.forEach(appendCategories);
  function appendCategories(item) {
    $(".category-item-container").append(`
        <button class="category-item ${item} ${category && category == item ? "category-active" : ""}" onclick="location.href = './blog.html?category=${item.replace(" ", "-")}'">
            <div class="category-text">${item}</div>
        </button>
    `);
  }

  if (category) {
    $(".category-section").append(`
        <div class="current-category">Category: ${category}</div>
    `);
  } else {
    $(".category-section").append(`
        <div class="current-category">Category: All</div>
    `);
  }

  // blog section
  if (category) {
    blog.forEach(blogFunction);
    function blogFunction(item) {
      if (category == item.category) {
        $(".blog-section").append(`
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
    }
  } else {
    blog.forEach(blogFunction);
    function blogFunction(item) {
      $(".blog-section").append(`
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
  }
});
