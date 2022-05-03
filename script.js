function validateForm() {

  var name = document.forms["form"]["name"].value;
  if (name == "") {
    alert("Name must be filled out please...");
    return false;
  }

  var phoneNumber = document.forms["form"]["phoneNumber"].value;
  if (phoneNumber == "") {
    alert("Phone number must be filled out please...");
    return false;
  }
  if (phoneNumber.length < 11) {
    alert('Invalid Number');
    return false;
  }

  var decision = document.forms["form"]["decision"].value;
  if (decision == "") {
    alert("Select either yes or no to whether you consent to communications from us");
    return false;
  }

  if (confirm('Are you sure you have filled in everything you want to?'))
                return true;
            else
                return false;
}
