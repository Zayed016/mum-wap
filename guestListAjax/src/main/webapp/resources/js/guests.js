$(function() {
    $("#send").click(updateGuests);
});

function updateGuests() {
    var first = $("#first").val();
    var last = $("#last").val();

    $.ajax("guest.ajax", {
		"type": "post",
		"data": {
        	"first": first,
                "last": last
		}
    }).done(displayGuests);
}

function displayGuests(data) {
    "use strict";
    $("#guestList").html("");

    var ul = $("<ul>");
    for (var i = 0; i < data.length; i++) {
        ul.append($("<li>").html(data[i].first + " " +data[i].last) );
    }
    $("#guestList").append(ul);

}