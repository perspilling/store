//All this logic will automatically be available in application.js.
//You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/

$(document).ready(function() {
    //var form = $("#review-dialog-form");
    var form = $("#review-dialog-form2");
    var review_form = $("#new-review-form");


    form.dialog({
        autoOpen: false,
        modal: true,
        title: 'Submit a review',
        width: 'auto',
        buttons:  {
            "Submit": function() {
                console.log(form);
                review_form.ajaxForm(function() {
                    alert("Thank you for your review!");
                });
                $(this).dialog('close');
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $('a.new_review_popup').click(function() {
        console.log("opening popup dialog");
        form.dialog('open');
        // prevent default action
        return false;
    });

    //$("#new_review_popup").submitWithAjax();  // works - why?
    //review_form.submitWithAjax();  // doesn't work - why?
    //$('a.new_review_popup').submitWithAjax(); // works - hmm


    /*
    $("#dialog-form").dialog({
        autoOpen: false,
        height: 300,
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
    */

});


