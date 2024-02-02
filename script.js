$(document).ready(function(){
    $('#myTabs a').click(function (e) {
      e.preventDefault();
      $(this).tab('show');
    });
  });

  $(document).ready(function() {

    $('.counter').each(function () {
$(this).prop('Counter',0).animate({
    Counter: $(this).text()
}, {
    duration: 4000,
    easing: 'swing',
    step: function (now) {
        $(this).text(Math.ceil(now));
    }
});
}); 

});  