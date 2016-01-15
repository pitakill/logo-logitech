//Logo animation

$(document).on('ready',function(){
  var $logoAnimation = $('.logo'),
      $logoAnimationSlow = $('.logo-slow');

  function addHoverAni() {
    $logoAnimation.removeClass('animation-stopped');
    $logoAnimation.addClass('animation-hover');

    setTimeout(function() {
      $logoAnimation.removeClass('animation-hover');
      $logoAnimation.addClass('animation-stopped')
    }, 1300)
  }

  function addHoverAniSlow() {
    $logoAnimationSlow.removeClass('animation-stopped');
    $logoAnimationSlow.addClass('animation-hover-slow');

    setTimeout(function() {
      $logoAnimationSlow.removeClass('animation-hover-slow');
      $logoAnimationSlow.addClass('animation-stopped')
    }, 10000)
  }

  $logoAnimation.on('mouseenter', function(){
    addHoverAni();
  });

  $logoAnimationSlow.on('mouseenter', function(){
    addHoverAniSlow();
  });
});
