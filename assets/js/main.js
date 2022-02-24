$(document).ready(function () {
  const img = new Image();
  img.src = "./assets/img/logo/logo.png";

  function setScreensaver() {
    var canvas = document.getElementById("CanvasScreenSaver");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    var ctx = canvas.getContext("2d");

    imgWidth = img.width / 7;
    imgHeight = img.height / 7;

    if (window.innerWidth < 800) {
      imgWidth = img.width / 8;
      imgHeight = img.height / 8;
      if (window.innerWidth < 450) {
        imgWidth = img.width / 10;
        imgHeight = img.height / 10;
        if (window.innerWidth < 350) {
          imgWidth = img.width / 12;
          imgHeight = img.height / 12;
        }
      }
    }

    let x = 0;
    let y = 0;
    let x1 = 1;
    let y1 = 1;

    function draw() {
      ctx.clearRect(0, 0, canvas.width + imgWidth, canvas.height + imgHeight);
      ctx.drawImage(img, x, y, imgWidth, imgHeight);
      if (x <= 0) {
        x1 = 2;
        if (window.innerWidth < 450) x1 = 1;
      } else if (x >= canvas.width - imgWidth) {
        x1 = -2;
        if (window.innerWidth < 450) x1 = -1;
      }
      if (y <= 0) {
        y1 = 2;
        if (window.innerWidth < 450) y1 = 1;
      } else if (y >= canvas.height - imgHeight) {
        y1 = -2;
        if (window.innerWidth < 450) y1 = -1;
      }
      y += y1;
      x += x1;
      window.requestAnimationFrame(draw);
    }
    window.requestAnimationFrame(draw);
  }

  // navbar
  $(".navbar").css("display", "none");
  $("#dropdown").click(function () {
    $(".navbar").slideToggle();
  });

  $(".popup-close")
    .mouseenter(function () {
      $(this).css({
        padding: "0px 10px",
        backgroundColor: "#e6e6e6",
        borderRadius: "5px",
        cursor: "pointer",
      });
    })
    .mouseleave(function () {
      $(this).css({
        backgroundColor: "white",
      });
    });

  $(".popup").click(function (e) {
    if (!$(e.target).is($(":not(.popup)"))) {
      $(this).hide();
    }
  });

  $(".popup-close").click(function () {
    $(".popup").hide();
  });

  //screensaver
  var timeout;
  $(document)
    .on("mousemove keydown click", function () {
      $("#CanvasScreenSaver").hide();
      clearTimeout(timeout);
      timeout = setTimeout(function () {
        $("#CanvasScreenSaver").show();
        setScreensaver();
      }, 10 * 1000);
    })
    .click();
});
