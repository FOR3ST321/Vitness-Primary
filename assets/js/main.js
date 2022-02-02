$(document).ready(function () {
    function setScreensaver() {
        var canvas = document.getElementById("CanvasScreenSaver");
        var ctx = canvas.getContext("2d");
        var img = document.getElementById("logoCanvas");
        ctx.drawImage(img, 0, 0, img.width / 7, img.height / 7);

        let logo = document.getElementById("CanvasScreenSaver");
        let toBottom = true;
        let toRight = true;
        setInterval(() => {
            let height = window.innerHeight - img.height/7;
            let width = window.innerWidth - img.width/7;
            let top = logo.offsetTop;
            let left = logo.offsetLeft;
            if (top >= height) {
                toBottom = false;
            } else if (top <= 0) {
                toBottom = true;
            }

            if (left >= width) {
                toRight = false;
            } else if (left <= 0) {
                toRight = true;
            }

            if (toBottom) {
                top = top + 2;
            } else top = top - 2;
            if (toRight) {
                left = left + 2;
            } else left = left - 2;

            logo.style.top = `${top}px`;
            logo.style.left = `${left}px`;
        }, 8);
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
            $("#ScreenSaver").hide();
            clearTimeout(timeout);
            timeout = setTimeout(function () {
                $("#ScreenSaver").show();
                setScreensaver();
            }, 10 * 1000);
        })
        .click();
});
