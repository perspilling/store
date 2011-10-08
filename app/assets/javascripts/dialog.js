/*
Place all the behaviors and hooks related to the matching controller here.
 All this logic will automatically be available in application.js.
 You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/
 */

$(document).ready(function() {

    /*
    See also: http://jqueryui.com/demos/dialog/#modal-form
     */

    var name = $("#user-name"),
        email = $("#user-email"),
        password = $("#user-password"),
        allFields = $([]).add(name).add(email).add(password);

    $("#dialog-form").dialog({
        autoOpen: false,
        height: 'auto',
        width: 350,
        modal: true,
        buttons: {
            "Create an account": function() {
                var bValid = true;
                allFields.removeClass("ui-state-error");

                if (bValid) {
                    $("#users tbody").append("<tr>" +
                        "<td>" + name.val() + "</td>" +
                        "<td>" + email.val() + "</td>" +
                        "<td>" + password.val() + "</td>" +
                        "</tr>");
                    $(this).dialog("close");
                }
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        },
        close: function() {
            allFields.val("").removeClass("ui-state-error");
        }
    });

    $("#create-user").button().click(function() {
        $("#dialog-form").dialog("open");
    });

});
