$(document).ready(function () {
  programs.forEach(display);
  
  function display(item) {
    $(".content-section").append(`
          <button class="content-item content-item-${item.id}" data-id="${item.id}">
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

  function getClassData(id){
    let picked = null;
    programs.forEach(e => {
      if(e.id === id) picked = e;
    });
    return picked;
  }

  $('.popup').hide();


  $(".content-item").mouseenter(function(){
    $(this).children('.class-details').animate({
      opacity: '1'
    }, 100)
    $(this).css({
      border: "0px solid #99bbff"
    }).animate({
      borderWidth : '6'
    }, 100)
  }).mouseleave(function(){
    $(this).children('.class-details').animate({
      opacity: '0'
    }, 100)
    $(this).css({
      border: "6px solid #99bbff"
    }).animate({
      borderWidth : '0'
    }, 100)
  })

  $('.content-item').click(function (e) { 
    //data
    let data = getClassData($(this).data('id'));
    // console.log(data);
    $('#popup-title').text(data.name)
    $('#popup-text-duration').text(data.duration);
    $('#popup-text-desc').text(data.description);
    $('.popup').show();
  });
})
