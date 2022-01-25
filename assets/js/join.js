function nameHandler(fields) {
    if (fields.value === "") {
        return {
            field: "name",
            message: "Name cannot be empty!",
        };
    } else if (fields.value.length < 3) {
        return {
            field: "name",
            message: "Name must be at least 3 characters!",
        };
    } else {
        return null;
    }
}

function ageHandler(fields) {
    if (fields.value === "") {
        return {
            field: "age",
            message: "Age cannot be empty!",
        };
    } else if (parseInt(fields.value) < 10) {
        return {
            field: "age",
            message: "Age must be at least 10 years old!",
        };
    } else {
        return null;
    }
}

function genderHandler(fields) {
    if (fields.value === "") {
        return {
            field: "gender",
            message: "Please select your gender!",
        };
    } else {
        return null;
    }
}

function phoneHandler(fields) {
    if (fields.value === "") {
        return {
            field: "phone",
            message: "Phone cannot be empty!",
        };
    } else if (
        !fields.value.startsWith("+81") ||
        fields.value.substr(3).length < 11
    ) {
        return {
            field: "phone",
            message:
                "Phone must starts with “+81” and must be 11 digits length",
        };
    } else {
        return null;
    }
}

function emailHandler(fields) {
    if (fields.value === "") {
        return {
            field: "email",
            message: "Email cannot be empty!",
        };
    } else if (
        !fields.value.endsWith(".com") ||
        !fields.value.includes("@") ||
        fields.value.split("@").length == 1
    ) {
        return {
            field: "email",
            message: "Email must be valid & ends with .com!",
        };
    } else {
        return null;
    }
}

function validate(formData) {
    let data = {
        isValid: true,
        errorMsg: [],
    };

    formData.forEach((fields) => {
        switch (fields.name) {
            case "name":
                let name = nameHandler(fields);
                if (name !== null) {
                    data.isValid = false;
                    data.errorMsg.push(name);
                }
                break;
            case "age":
                let age = ageHandler(fields);
                if (age !== null) {
                    data.isValid = false;
                    data.errorMsg.push(age);
                }
                break;
            case "gender":
                let gender = genderHandler(fields);
                if (gender !== null) {
                    data.errorMsg.push(gender);
                }
                break;
            case "phone":
                let phone = phoneHandler(fields);
                if (phone !== null) {
                    data.errorMsg.push(phone);
                }
                break;
            case "email":
                let email = emailHandler(fields);
                if (email !== null) {
                    data.errorMsg.push(email);
                }
                break;
        }
    });

    return data;
}

$("#joinBtn").on("click", function (e) {
    e.preventDefault();
    // console.log(form);
    const data = $("#joinForm").serializeArray();

    $(
        ".error-name, .error-email, .error-gender, .error-age, .error-phone"
    ).text("");
    var error = validate(data).errorMsg;

    // console.log(data)
    if (error.length !== 0) {
        error.forEach(function writeError(item) {
            $(`.error-${item.field}`).text(item.message);
        });
    } else {
        return $("#joinForm").submit();
    }
});
