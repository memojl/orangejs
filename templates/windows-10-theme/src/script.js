(function($) {
  var $noti = $('.toast__noti'),
    $body = $('body'),
    $items = new Array(),
    $count = 0,
    $mainItem = $('.sub__menu li');
  $mainItem.on('click', function(e) {
    var $item = $noti.clone();
    $item.children('.icon').addClass($(this).attr('class')).removeClass(function(index, css) {
      return (css.match(/\bcol-md-\S+/g) || []).join(' ');
    });
    $item.children('.title').text($(this).text());
    $item.children('p').text($(this).attr('title'));
    $items.push($item);
    $body.append($item.css({
      marginBottom: ($count * 70) + ($count * 2)
    }));
    $item.animate({
      right: 0
    }, 500);
    $count += 1;
    $item.children('.close').on('click', function(e) {
      $item.css({
        right: -300
      });
      //$item.remove();
      var index = $items.indexOf($item);
      $items.splice(index, 1);
      for (var i = index; i < $items.length; i++) {
        $items[i].animate({
          marginBottom: $items[i].css('margin-bottom').replace('px', '') - (70 + $count)
        }, 450 + (i * 100));
      }
      $count -= 1;
    });
  });
  $mainItem.on('contextmenu', function(e) {
    e.preventDefault();
    var $this = $(this),
      $context = $('.context__menu'),
      $context_li = $('.context__menu li');
    $this.append($context);
    $context.css({
      display: 'block',
      left: event.layerX,
      top: event.layerY,
    });
    $context.hover(function() {}, function() {
      $(this).fadeOut(100);
    })
    $context_li.on('click', function() {
      var $_this = $(this);
      $this = $context.parent('li');
      if ($_this.data('size') === 'small') {
        $this.removeClass(function(index, css) {
          return (css.match(/\bcol-md-\S+/g) || []).join(' ');
        });
        $this.addClass('col-md-2');
      } else if ($_this.data('size') === 'medium') {
        $this.removeClass(function(index, css) {
          return (css.match(/\bcol-md-\S+/g) || []).join(' ');
        });
        $this.addClass('col-md-4');
      } else if ($_this.data('size') === 'large') {
        $this.removeClass(function(index, css) {
          return (css.match(/\bcol-md-\S+/g) || []).join(' ');
        });
        $this.addClass('col-md-6');
      }
      //settings.afterSizeChange();
      $context.fadeOut(100);
    });
  });
  setInterval(function(){
    if($items.length > 0){
      $items[0].css({
        right: -300
      });
      //$items[0].remove();
      $items.splice(0, 1);
      for (var i = 0; i < $items.length; i++) {
        $items[i].animate({
          marginBottom: $items[i].css('margin-bottom').replace('px', '') - 70
        }, 450 + (i * 100));
      }
      $count -= 1;
    }
  },3000);
}(jQuery));

(function($){
  
}(jQuery));