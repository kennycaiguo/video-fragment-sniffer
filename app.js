$(document).ready(function() {
  function getFragment(i, time, fragFrom, fragTo, prefixURL, suffixURL) {
    setTimeout(function() {
      if (i == fragFrom) {
        $("#getFragments .loading").removeClass("hidden");
        $("#getFragments .loading .text-info").removeClass("hidden");
      }
      i = Math.round(i);
      $("#getFragments .loading .text-info .number").text(i+1);
      var url = prefixURL + i + suffixURL;
      var fragmentWindow = window.open(url,'_blank');
      fragmentWindow.blur();
      window.focus();

      if (i == fragTo) {
        $("#getFragments .loading .text-info").addClass("hidden");
        $("#getFragments .loading .text-success").removeClass("hidden");
      }
    }, time);
  }

  $(document).on("submit", "#getFragments", function(event) {
    event.preventDefault();
    var fragFrom = $("#fragFrom").val();
    var fragTo = $("#fragTo").val();
    var prefixURL = $("#prefixURL").val();
    var suffixURL = $("#suffixURL").val();
    var requestsDelay = Math.round($("#requestsDelay").val());
    var time = 0;
    $("#getFragments .loading").addClass("hidden");
    $("#getFragments .loading .text-info").addClass("hidden");
    $("#getFragments .loading .text-danger").addClass("hidden");
    $("#getFragments .loading .text-success").addClass("hidden");

    if (!$.isNumeric(fragFrom) || !$.isNumeric(fragTo) || !prefixURL.trim() || !suffixURL.trim() || !$.isNumeric(requestsDelay)) {
      $("#getFragments .loading").removeClass("hidden");
      $("#getFragments .loading .text-danger").removeClass("hidden");
    }
    else {
      for (var i = fragFrom; i <= fragTo; i++) {
        getFragment(i, time, fragFrom, fragTo, prefixURL, suffixURL);
        time += requestsDelay;
      }
    }
  });
});
