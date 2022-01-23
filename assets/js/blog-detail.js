$(document).ready(function () {
  $(".back-btn").click(function () {
    window.history.back();
  });
  var params = new URLSearchParams(location.search);
  var id = params.get("id");
  if (id) {
    id = id - 1;
    $(".img-section").css(
      "background-image",
      `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),url(${blog[id].image})`
    );
    $(".img-section").append(`
      <button class="category">${blog[id].category}</button>
      <div class="title">${blog[id].blogTitle}</div>
      <div class="date-posted">${blog[id].datePosted}</div>
    `);
    $(".content-section").append(`
      <div class="content-desc">${blog[id].description}</div>
    `);
  }
});
