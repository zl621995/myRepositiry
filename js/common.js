(function($, window, undefined) {
    var $allDropdowns = $();

    $.fn.dropdownHover = function(options) {
    $allDropdowns = $allDropdowns.add(this.parent());

    return this.each(function() {
        var $this = $(this).parent(),
            defaults = {
                delay: 100,
                instantlyCloseOthers: true
            },
            data = {
                delay: $(this).data('delay'),
                instantlyCloseOthers: $(this).data('close-others')
            },
            options = $.extend(true, {}, defaults, options, data),
            timeout;

        $this.hover(function() {
            if(options.instantlyCloseOthers === true)
                $allDropdowns.removeClass('open');

            window.clearTimeout(timeout);
            $(this).addClass('open');
        }, function() {
            timeout = window.setTimeout(function() {
                $this.removeClass('open');
            }, options.delay);
        });
    });
};

$('[data-hover="dropdown"]').dropdownHover();
})(jQuery, this);


if ($(document).scrollTop() >= 40) {
  $('.navbar').eq(0).css('background','#172937');
};
if ($(document).scrollTop() >= 200) {
  $('.dropdown-menu').eq(0).css('background','#172937');
};
$(window).scroll(function() {
  if ($(document).scrollTop() >= 40) {
    $('.navbar').eq(0).css('background','#172937');
  };
  if ($(document).scrollTop() == 0) {
    $('.navbar').eq(0).css('background','transparent');
  };
  if ($(document).scrollTop() >= 200) {
    $('.dropdown-menu').eq(0).css('background','#172937');
  }else{
    $('.dropdown-menu').eq(0).css('background','transparent');
  };
})

  $("#navbutton").click(function(){
    $('.navbar').eq(0).css('background','#172937');
  })
