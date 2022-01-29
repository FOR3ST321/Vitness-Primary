$(document).ready(function () {
    // class
    // for(let i = programs.length-1;i>=programs.length-4;i--){
    //   let item = programs[i];
    //   $(".class-content").append(`
    //   <button class="class-content-item">
    //     <div class="class-pict" id="class-pict-${item.id}"></div>
    //     <div class="class-desc">
    //       <div class="class-name">${item.name}</div>
    //       <div class="class-time">${item.duration}</div>
    //     </div>
    //   </button>
    // `);
    //     $(`#class-pict-${item.id}`).css(
    //         "background-image",
    //         `url(${item.image})`
    //     );
    // }
    programs.forEach(classFunction);
    function classFunction(item) {
        $(".class-content").append(`
      <button class="class-content-item">
        <div class="class-pict" id="class-pict-${item.id}"></div>
        <div class="class-desc">
          <div class="class-name">${item.name}</div>
          <div class="class-time">${item.duration}</div>
        </div>
      </button>
    `);
        $(`#class-pict-${item.id}`).css(
            "background-image",
            `url(${item.image})`
        );
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

    //slider
    let firstimg = true;
    slider.forEach(function (item) {
        $(".sliders-content").append(
            `
      <div class="slider-container" id="slide-${item.id}">
            <div class="slider-img-container">
                <img src="${item.image}" alt="" class="slider-img"/>
            </div>
            <div class="slider-content">
                <p class="slider-title">${item.title}</p>
                <p class="slider-desc">${item.description}</p>
                ${
                    item.hasBtn
                        ? `<button data-url="${item.btnUrl}" class="slider-btn"> Detail >></button>`
                        : ""
                }
            </div>
        </div>
      `
        );

        $(".dot-sliders").append(`
        <span class="dot" id="dot-${item.id}"></span>
        `);

        if (firstimg) {
            firstimg = false;
            $("#dot-" + item.id).css({ backgroundColor: "white" });
        } else {
            $("#slide-" + item.id).hide();
        }
    });

    let slideIndex = 1;
    let first = true;
    let currSlide = "";

    let interval;

    function showSlides() {
        if (first) {
            first = false;
            slider.forEach((el) => {
                $("#slide-" + el.id).hide();
            });
            $("#slide-" + slideIndex).show();
            currSlide = "#slide-" + slideIndex;
        } else {
            //geser kiri minus yang sekarang, geser kiri 0 yang mau next
            $(currSlide)
                .css({ opacity: 1, marginLeft: "0" })
                .animate(
                    { opacity: 0, marginLeft: "-100px" },
                    700,
                    function () {
                        //change index
                        $("#dot-" + slideIndex).css({
                            backgroundColor: "#6baddd",
                        });
                        slideIndex++;
                        if (slideIndex > slider.length) {
                            slideIndex = 1;
                        }
                        $(currSlide).hide();
                        $("#slide-" + slideIndex).show();

                        //change dot color
                        $("#dot-" + slideIndex).css({
                            backgroundColor: "white",
                        });

                        $("#slide-" + slideIndex)
                            .css({ opacity: 0, marginLeft: "100px" })
                            .animate({ opacity: 1, marginLeft: "0px" }, 700);
                        currSlide = "#slide-" + slideIndex;
                    }
                );
        }
    }

    interval = setInterval(showSlides, 5000);

    $(".dot").on("click", function () {
        let dotId = this.id
        $(currSlide)
            .css({ opacity: 1, marginLeft: "0" })
            .animate({ opacity: 0, marginLeft: "-100px" }, 700, function () {
                //change index
                $("#dot-" + slideIndex).css({ backgroundColor: "#6baddd" });
                slideIndex = dotId.substr(4); //ganti posisi indexnya
                $(currSlide).hide();
                $("#slide-" + slideIndex).show();

                //change dot color
                $("#dot-" + slideIndex).css({ backgroundColor: "white" });

                $("#slide-" + slideIndex)
                    .css({ opacity: 0, marginLeft: "100px" })
                    .animate({ opacity: 1, marginLeft: "0px" }, 700);
                currSlide = "#slide-" + slideIndex;
            });
          first = true;
          clearInterval(interval);//berhentiin dulu interval
          interval = setInterval(showSlides, 5000); //jalanin lagi looping, kasih tau kalau dipanggil dari dot
    });

    $(".slider-btn").on("click", function () {
        // console.log();
        window.location.replace($(this).data("url"));
    });
});
