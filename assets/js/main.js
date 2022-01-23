$(document).ready(function () {
  // navbar
  $(".navbar").css("display", "none");
  $("#dropdown").click(function () {
    $(".navbar").slideToggle();
  });
});
