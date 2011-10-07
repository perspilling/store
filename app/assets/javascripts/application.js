// This is a manifest file that'll be compiled into including all the files listed below.
// Add new JavaScript/Coffee code in separate files in this directory and they'll automatically
// be included in the compiled file accessible from http://example.com/assets/application.js
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require_tree .

jQuery.ajaxSetup({
    'beforeSend': function(xhr) {
        xhr.setRequestHeader("Accept", "text/javascript")
    }
})

jQuery.fn.submitWithAjax = function() {
    this.submit(function() {
        $.post(this.action, $(this).serialize(), null, "script");
        return false;
    })
    return this;
};

$(document).ready(function() {
    var form = $("#new_review_form");

    $('a.new_review_popup').click(function() {
        form.dialog({
            modal: true,
            title: 'Submit a review',
            width: 'auto'
        });
    });
    //$("#new_review_popup").submitWithAjax();  // works - why?
    //form.submitWithAjax();  // doesn't work - why?
    $('a.new_review_popup').submitWithAjax(); // works - hmm
});

