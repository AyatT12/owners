!(function (l) {
  "use strict";
  if (window.innerWidth <= 767)
    {
      l("body").addClass("sidebar-toggled");
      l(".sidebar").addClass("toggled");
    }
    if (window.innerWidth > 767)
      {
        l("body").toggleClass("sidebar-toggled");
        l(".sidebar").toggleClass("toggled");
      }

  l("#sidebarToggle, #sidebarToggleTop").on("click", function (e) {
    l("body").toggleClass("sidebar-toggled");
    l(".sidebar").toggleClass("toggled");
    if (l(".sidebar").hasClass("toggled")) {
      l(".sidebar .collapse").collapse("hide");
    }
  });

  l(window).resize(function () {
  
      !l(".sidebar").hasClass("toggled") &&
      (l("body").addClass("sidebar-toggled"),
      l(".sidebar").addClass("toggled"),
      l(".sidebar .collapse").collapse("hide"));
  });

  l("body .sidebar").on(
    "mousewheel DOMMouseScroll wheel",
    function (e) {
      var o;
      768 < l(window).width() &&
        ((o = (o = e.originalEvent).wheelDelta || -o.detail),
        (this.scrollTop += 30 * (o < 0 ? 1 : -1)),
        e.preventDefault());
    }
  );

  l(document).on("scroll", function () {
    100 < l(this).scrollTop()
      ? l(".scroll-to-top").fadeIn()
      : l(".scroll-to-top").fadeOut();
  });

  l(document).on("click", "a.scroll-to-top", function (e) {
    var o = l(this);
    l("html, body")
      .stop()
      .animate(
        { scrollTop: l(o.attr("href")).offset().top },
        1e3,
        "easeInOutExpo"
      );
    e.preventDefault();
  });


})(jQuery);

///////////////////////language change//////////////////////////////////

const checkbox = document.getElementById('myCheckbox');
const label2 = document.getElementById('checkboxLabel');

checkbox.addEventListener('change', function() {
  const isChecked = checkbox.checked;
  setCustomCSS(isChecked);
  if (isChecked) {
    label2.innerHTML = 'Arabic <i class="fa-solid fa-globe lang_globe"></i>';
  } else {
    label2.innerHTML = 'English <i class="fa-solid fa-globe lang_globe"></i>';
  }
});

function setCustomCSS(isChecked) {
  if (isChecked) {
    localStorage.setItem('customCSS', 'true');
  } else {
    localStorage.removeItem('customCSS');
  }

  window.postMessage({ customCSS: isChecked }, '*');
}

const isChecked = localStorage.getItem('customCSS') === 'true';
checkbox.checked = isChecked;
setCustomCSS(isChecked);
if (isChecked) {
  label2.innerHTML = 'Arabic <i class="fa-solid fa-globe lang_globe"></i>';
}
window.addEventListener('DOMContentLoaded', function() {
  const customCSS = localStorage.getItem('customCSS') === 'true';
  const cssFile = document.getElementById('customCSS');

  if (customCSS) {
    if (!cssFile) {
      addCustomCSS();
    }
  } else {
    if (cssFile) {
      removeCustomCSS();
    }
  }
});

window.addEventListener('message', function(event) {
  if (event.data.customCSS) {
    addCustomCSS();
  } else {
    removeCustomCSS();
  }
});

function addCustomCSS() {
  const cssFile = document.createElement('link');
  cssFile.rel = 'stylesheet';
  cssFile.href = 'css/En_Style.css';
  cssFile.id = 'customCSS';
  document.head.appendChild(cssFile);
}

function removeCustomCSS() {
  const cssFile = document.getElementById('customCSS');
  if (cssFile) {
    cssFile.parentNode.removeChild(cssFile);
  }
}

