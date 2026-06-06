/*
  db_A4_newsletter.js
  Declan Bannerman, June 2026
  external javascript for the runevine studios newsletter signup form
  this file handles two things: the welcome alert on page load, and the
  form validation that runs before the form gets submitted
  kept external so its reusable and keeps the html clean
*/


/* window.onload is what is leveraged to make sure that the whole page has actually loaded before
   any of this runs. if we dont wait then the getElementById calls below
   could fail because the form elements wouldnt have actually existed yet which is an error waiting to happen */
window.onload = function () {

  /* welcome alert that comes up as per the assessment requirement.
     this fires as soon as the page has finished loading */
  alert("Welcome to the RUNEVINE STUDIOS Corporation - Newsletter Signup");

  /* grab the references to the form and both the name fields now that the DOM is ready. this also functions for storing them here so that there doesnt need to be a call for getElementById multiple times */
  var form       = document.getElementById("newsletter-form");
  var firstField = document.getElementById("first-name");
  var lastField  = document.getElementById("last-name");


  /* this runs whenever the user hits the submit button on the site. the event parameter then lets it call preventDefault if the validation fails
     which stops the form from actually sending anything out to the server */
  form.onsubmit = function (event) {

    /* trim() strips any of the spaces thatthe user might have typed at the start or end so that a field with just a space in it still counts as empty */
    var firstName = firstField.value.trim();
    var lastName  = lastField.value.trim();

    /* using this flag so we can check on both the fields as well as give specific feedback rather than just bailing out on the first problem */
    var isValid = true;

    /* check first name first. if its empty then it shows an alert and puts the
       cursor back in that field so as to let the user knows where to go */
    if (firstName === "") {
      alert("Please enter your First Name before submitting.");
      firstField.focus();
      isValid = false;
    }

    /* only check last name if first name passed, otherwise two alerts
       at once would be a bit annoying for the user */
    if (isValid && lastName === "") {
      alert("Please enter your Last Name before submitting.");
      lastField.focus();
      isValid = false;
    }

    /* if either field failed validation we stop here.
       preventDefault then stops the POST request from going to the server.
       return false is there as a fallback just in case its needed */
    if (!isValid) {
      event.preventDefault();
      return false;
    }

    /* if we get here both fields had content so it can be confirmed to the user
       that the form is actually working and going through. this alert fires before the POST sends */
    alert("Thank you, " + firstName + "! Your newsletter signup has been submitted.");

    /* returning true lets the form submit normally */
    return true;

  }; /* end of form.onsubmit */

}; /* end of window.onload */
