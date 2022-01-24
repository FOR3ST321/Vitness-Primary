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
      if (fields.value === "" || parseInt(fields.value) < 10) {
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

$("#joinForm").submit((e) => {
  e.preventDefault();
  const data = $("#joinForm").serializeArray();
  console.log(data);
  var error = validate(data).errorMsg;
  error.forEach(writeError);
  function writeError(item) {
    $(`.error-${item.field}`).text(item.message);
  }
});
