$(document).ready(function() {

    $("#comment-dialog-form").delegate('.comment-list-item', 'click', function() {
        var commentName = $(this).children(".comment-name").text();
        var commentContent = $(this).children(".comment-content").text();

        if ($(this).parent().hasClass("selected-comment-list")) {
            $(this).remove()
        } else {
            var selectedCommentHtml =
                "<div class=\"comment-list-item\">" +
                    "<span class=\"comment-name\" style=\"display: none;\">" + commentName + "</span>" +
                    "<span class=\"left-arrow\">&#x25C0;</span>" +
                    "<span class=\"comment-text\">" + commentContent + "</span>" +
                    "</div>";
            $(".selected-comment-list").append(selectedCommentHtml);
        }
    });

    $("#comment-dialog-form").dialog({
        autoOpen: false,
        width: 700,
        height: 500,
        modal: true,
        buttons: {
            "Legg til valgt kommentar": function() {
                var selectedCommentTextList = $(".selected-comment-list .comment-list-item .comment-text");
                var selectedCommentNameList = $(".selected-comment-list .comment-list-item .comment-name");
                var scNames = [];
                var scTexts = [];
                if (selectedCommentNameList.length != 0) {
                    /*
                     for (i = 0; i < selectedCommentNameList.length; i++) {
                     scNames[i] = selectedCommentNameList[i].innerText;
                     scTexts[i] = selectedCommentTextList[i].innerText;
                     }
                     */
                    selectedCommentNameList.each(function(i) {
                        scNames[i] = $(this).text();
                    });
                    selectedCommentTextList.each(function(i) {
                        scTexts[i] = $(this).text();
                    });
                    $('#result').html('Følgende kommentarer be valgt: <tt>' + scNames.toString() + '</tt>');
                    var commentInputField = $('.selected-comments textarea');
                    var currentCommentText = commentInputField.val();
                    commentInputField.val(currentCommentText + scTexts.join("\n\n") + "\n\n");
                }
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

    /*
     $("#comment-dialog-form").dialog({
     autoOpen: false,
     height: 'auto',
     width: 400,
     modal: true,
     buttons: {
     "Legg til valgt kommentar": function() {
     var checkedBoxes = $('[name="comment-checkbox-group"]:checked');
     var commentLabels = $('label');
     var cbNames = [];
     if (checkedBoxes.length == 0) {
     selectedComments[i] = '<tr><td>Ingen kommentar</td></tr>';
     } else {
     for (i = 0; i < checkedBoxes.length; i++) {
     cbNames[i] = checkedBoxes[i].id;
     selectedComments[i] = '<tr><td>' + commentLabels[i].innerText + '</td></tr>';
     }
     }
     $('#result').html('The following checkboxes are selected: <tt>' + cbNames.toString() + '</tt>');
     $('#selected-comments tbody').html(selectedComments.toString());
     $(this).dialog("close");
     },
     Cancel: function() {
     $(this).dialog("close");
     }
     }
     });
     */

});