$(document).ready(function () {
  $("#btnSave").click(function () {
    // Get form values
    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const number = $("#number").val().trim();
    const propertyName = $("#propertyName").val().trim();
    const isChecked = $("#checkbox").is(":checked");

    // Clear previous error messages
    $(".error").empty();

    // Validate form fields
    if (name === "") {
      $("#name").focus();
      return errorMessage("Name is required");
    }
      if ( email === "" ) {
          $("#email").focus();
      return errorMessage("Email is required");
    }
      if ( number === "" ) {
          $("#number").focus();
      return errorMessage("Mobile number is required");
    }
      if ( propertyName === "" ) {
          $("#propertyName").focus();
      return errorMessage("Property name is required");
    }
    if (!isChecked) {
      return errorMessage("You must agree to the terms");
    }

    // If all validations pass
    $(".error").html("Form submitted successfully!");
    // You can add AJAX call or form submission here if needed
  });
});

// Function to display error messages
function errorMessage(message) {
  $(".error").html(message);
}

// Form toggle

document.querySelector(".menu-button").onclick = function () {
  document.querySelector(".nav-item").classList.toggle("hide");
};
document.querySelector(".close").onclick = function () {
  document.querySelector("form").classList.toggle("hide");
};
