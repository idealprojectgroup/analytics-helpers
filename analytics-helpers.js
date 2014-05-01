// analytics-helpers.js
// Version 0.1
//
// This provides an easy way to send an event to Google Analytics
// when a link or button is clicked.
// i.e. <a href='#' data-provides='analytics' data-category='some category' data-action='clicked'>Button</a>
$(document).on("click", "[data-provides=analytics]", function(evt) {

  // These aren't used yet. We don't have functionality to
  // send the label and value parameters.
  default_options = {
    label: null,
    value: null
  };

  data = $(this).data()

  if(data.category && data.action) {
    ga("send", "event", data.category, data.action);
  }
});
