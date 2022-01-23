$(document).ready(function () {
  programs.forEach(display);
  function display(item) {
    $(".content-section").append(`
          <button class="content-item content-item-${item.id}">
            <div class="class-name">${item.name}</div>
            <div class="class-duration">${item.duration}</div>
          </button>
        `);
    $(`.content-item-${item.id}`).css(
      "background-image",
      `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${item.image})`
    );
  }
});
