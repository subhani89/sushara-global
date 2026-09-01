document.querySelectorAll(".inquiry-form").forEach(function (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var formData = new FormData(form);
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    }).catch(function () {});

    var message = document.createElement("p");
    message.className = "form-success";
    message.textContent =
      "Thank you! Your enquiry has been submitted. Our team will get back to you within 12 business hours.";

    form.hidden = true;
    form.insertAdjacentElement("afterend", message);
  });
});
