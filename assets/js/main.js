$(document).ready(function () {
  // navbar
  $(".navbar").css("display", "none");
  $("#dropdown").click(function () {
    $(".navbar").slideToggle();
  });

  $(".popup-close").mouseenter(function () { 
    $(this).css({
      padding: '0px 10px',
      backgroundColor: '#e6e6e6',
      borderRadius: '5px',
      cursor:'pointer'
    })
  }).mouseleave(function () { 
    $(this).css({
      backgroundColor: 'white'
    })
  });

  $('.popup').click(function(e){
      if(!$(e.target).is($(':not(.popup)'))){
        $(this).hide();
      }
  })

  $('.popup-close').click(function(){
    $('.popup').hide();
  })
});
