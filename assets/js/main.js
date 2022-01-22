function validate(formData) {
  let data = {
    isValid: true,
    errorMsg: [],
  };

  formData.forEach((fields) => {
    if (fields.name === "name") {
      if (fields.value.length < 3) {
        data.isValid = false;
        data.errorMsg.push({
          field: "name",
          message: "Name must be at least 3 characters!",
        });
      }
    }

    if (fields.name === "age") {
      if (parseInt(fields.value) < 10) {
        data.isValid = false;
        data.errorMsg.push({
          field: "age",
          message: "Age must be at least 10 years old!",
        });
      }
    }

    if (fields.name === "gender") {
      if (fields.value === "") {
        data.isValid = false;
        data.errorMsg.push({
          field: "gender",
          message: "Please select your gender!",
        });
      }
    }

    if (fields.name === "phone") {
      if (
        !fields.value.startsWith("+81") ||
        fields.value.substr(3).length < 11
      ) {
        data.isValid = false;
        data.errorMsg.push({
          field: "phone",
          message: "Phone must starts with “+81” and must be 11 digits length",
        });
      }
    }

    if (fields.name === "email") {
      if (
        !fields.value.endsWith(".com") ||
        !fields.value.startsWith("@") ||
        fields.value.split("@").length != 1
      ) {
        data.isValid = false;
        data.errorMsg.push({
          field: "email",
          message: "Email must be valid!",
        });
      }
    }
  });

  return data;
}

$(document).ready(function () {
  // navbar
  $(".navbar").css("display", "none");
  $("#dropdown").click(function () {
    $(".navbar").slideToggle();
  });

  // class
  programs.forEach(classFunction);
  function classFunction(item) {
    $(".class-content").append(`
      <a href="./classes.html?id=${item.id}" class="class-content-item">
        <div class="class-pict" id="class-pict-${item.id}"></div>
        <div class="class-desc">
          <div class="class-name">${item.name}</div>
          <div class="class-time">${item.duration}</div>
        </div>
      </a>
    `);
    $(`#class-pict-${item.id}`).css("background-image", `url(${item.image})`);
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
});

$("#joinForm").submit((e) => {
  e.preventDefault();
  const data = $("#joinForm").serializeArray();
  console.log(validate(data));
});
