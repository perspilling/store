$(document).ready(function() {

    $("#comment-dialog-form").dialog({
        autoOpen: false,
        height: 'auto',
        width: 350,
        modal: true,
        buttons: {
            "Legg til valgt kommentar": function() {
                $(this).dialog("close");
            },
            Cancel: function() {
                $(this).dialog("close");
            }
        }
    });

    $("#add-comment").button().click(function() {
        $("#comment-dialog-form").dialog("open");
    });

});