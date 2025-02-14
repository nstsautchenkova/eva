/////////////////////////////
//       language         //
///////////////////////////

$(document).ready(function () {
  $(".language").click(function () {
    $(".language").not($(this)).removeClass('active');
    $(this).addClass("active");
  });
});


/////////////////////////////
//     navigate-page      //
///////////////////////////

document.addEventListener('DOMContentLoaded', () => {
  const navButtons = document.querySelectorAll('[data-navigate-to]')
  const screens = document.querySelectorAll('[data-screen]')

  function hideAllScreens() {
    screens.forEach(screen => {
      screen.setAttribute('style', 'display: none')
    })
  }

  navButtons.forEach(btn => {
    btn.addEventListener('click', e => {
      const currentBtn = e.currentTarget.getAttribute('data-navigate-to')
      const currentScreen = document.querySelector(`[data-screen=${currentBtn}]`)
      hideAllScreens()
      currentScreen.removeAttribute('style')
    })
  })
})

/////////////////////////////
//        popup           //
///////////////////////////

$(document).ready(function () {
  $(".popup-button").click(function () {
    var popupId = $(this).attr('data-id');
    $(".popup[data-id='" + popupId + "']").addClass('popup--show');
    $(".popup-ov").addClass('popup--show');
  });

  $(".popup-close").click(function () {
    $(this).parents(".popup").removeClass("popup--show");
  });
});


/////////////////////////////
//    choice-token        //
///////////////////////////

$(document).ready(function () {

  $(".choice-token").click(function () {
    var tokenImg = $(this).find('.token-img').attr('src');
    var tokenName = $(this).find('.token-name').text();

    $(".wallet-tokenname").text(tokenName);
    $('.wallet-token').attr('src', tokenImg)
  });

});

/////////////////////////////
//      Copy Txt          //
///////////////////////////

$(document).ready(function () {
  $('.copy__btn').click(function () {
    var copyId = $(this).attr('data-id');
    var $temp = $("<input>");
    $("body").append($temp);
    $temp.val($('#' + copyId + '').text()).select();
    $('#' + copyId + '').css('color', 'rgb(105 110 255 / 100%)');

    function cbg() {
      $('#' + copyId + '').css('color', 'rgb(0 0 0 / 100%)');
    }
    setTimeout(cbg, 1200);

    document.execCommand("copy");
    $temp.remove();
  });
});


/////////////////////////////
//      dropdown          //
///////////////////////////

$(document).ready(function () {
  $(".dropdown__btn").click(function () {
    $(this).siblings(".dropdown__list").slideToggle('medium');
    $(this).toggleClass('active');
  });
});

/////////////////////////////
//      ctooltip          //
///////////////////////////

$(document).ready(function () {
  $(".ctooltip__btn").click(function () {
    $(this).siblings(".ctooltip__content").show();
  });

  $(".ctooltip__close").click(function () {
    $(this).parents(".ctooltip__content").hide();
  });

  $(document).mouseup(function (e) {
    var container = $(".ctooltip__content");
    if (container.has(e.target).length === 0) {
      container.hide();
    }
  });
});

//////////////////////////////////////
//      progress value full        //
////////////////////////////////////

$(document).ready(function () {
  $('.progress progress').each(function () {
    var $this = $(this);

    let progressValue = $this.val();
    let progressMax = $this.attr('max');

    $this.parent('.progress').find('.progress__val').html(progressValue);
    $this.parent('.progress').find('.progress__max').html(progressMax);

    if (progressValue < progressMax) {
      $this.parent().removeClass('progress-full');
    } else {
      $this.parent().addClass('progress-full');
    }
  })
});

/////////////////////////////
//       preloader        //
///////////////////////////

$(window).on('load', function () {
  $('.preloader').delay(1500).fadeToggle(500);
});

/////////////////////////////
//       alerts           //
///////////////////////////

$(document).ready(function () {
  function alertsShow() {
    $('.alerts').addClass('alerts--show');
  }

  function alertsClose() {
    $('.alerts').removeClass('alerts--show');
  }

  setTimeout(alertsShow, 2200);
  setTimeout(alertsClose, 4500);
});