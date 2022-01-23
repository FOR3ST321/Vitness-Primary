$(document).ready(function () {
  programs.forEach(display);
  function display(item) {
    $(".content-section").append(`
          <button class="content-item content-item-${item.id}" >
            <div class="class-name">${item.name}</div>
            <div class="class-duration">${item.duration}</div>
            <div class="class-details">Details ></div>

          </button>
        `);
    $(`.content-item-${item.id}`).css(
      "background-image",
      `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url(${item.image})`
    );
  }



  $(".content-item").mouseenter(function(){
    $(this).children('.class-details').animate({
      opacity: '1'
    }, 100)
    $(this).css({
      border: "0px solid #99bbff"
    }).animate({
      borderWidth : '6'
    }, 100)
  })

  $(".content-item").mouseleave(function(){
    $(this).children('.class-details').animate({
      opacity: '0'
    }, 100)
    $(this).css({
      border: "6px solid #99bbff"
    }).animate({
      borderWidth : '0'
    }, 100)
  })
})
