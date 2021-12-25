function isEmail(email) {
              
    // Regular Expression (Accepts every special
    // character along with @ symbol)
    var regexp = /\S+@\S+\.\S+/;
      
    // Converting the email to lowercase
    return regexp.test(String(email).toLowerCase());
}

function send_mail() {
    var email_ele = document.getElementById("email_id");
    isValid = isEmail(email_ele.value);
    console.log(isValid);
    if (!isValid) {
        alert("Please enter a valid email");
    }
    else {
        var url = "https://charabdys-mail.herokuapp.com/submit_mail/chr2467";
        let request = new XMLHttpRequest();
        request.open("POST", url, true);
        request.setRequestHeader("Content-Type", "application/json");
        let form = document.getElementById("christmas-form");
        let loading = document.getElementById("loading");
        let success = document.getElementById("success");
        form.classList.toggle("hidden");
        loading.classList.toggle("hidden");
        request.onload = function () {
            loading.classList.toggle("hidden");
            var data = JSON.parse(this.response);
            if (data.code == 200) {
                success.classList.toggle("hidden");
            }
            if (data.code == 495) {
                let repeat = document.getElementById("repeat");
                repeat.classList.toggle("hidden");
            }
        };
        let name_ = document.getElementById("name_id").value;
        console.log(name_);
        body = {
            email: email_ele.value,
            name: name_,
        };
        console.log(JSON.stringify(body));
        request.send(JSON.stringify(body));
    }
}

function resetForm(element) {
    console.log(element)
    let form = document.getElementById("christmas-form");
    element.classList.toggle("hidden");
    form.classList.toggle("hidden");
}