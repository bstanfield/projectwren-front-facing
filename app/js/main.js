document.addEventListener('DOMContentLoaded', () => {
  var $ = require('jquery');
  $('.nav-fixed').hide()

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  // Navbar scroll
  if ($('.background-hero-image').length > 0) {
    $(document).scroll(function () {
      var scroll = $(this).scrollTop();
      if (scroll > 655) {
        $('.nav-fixed').show()
        $('.nav-fixed .nav-items').css('background-color', '#F4F3F0', 'border-bottom', '0px solid grey');
        $('.nav-fixed').css('opacity', '100');
      } else {
        $('.nav-fixed .nav-items').css('background-color', 'transparent', 'border-bottom', '1px solid grey');
        $('.nav-fixed').css('opacity', '0');
      }
      if (scroll < 50 && scroll >= 0) {
        $('.nav-fixed').hide()
      }
    });
  } else {
    $(document).scroll(function () {
      var scroll = $(this).scrollTop();
      if (scroll > 350) {
        $('.nav-fixed').show()
        $('.nav-fixed .nav-items').css('background-color', '#F4F3F0', 'border-bottom', '0px solid grey');
        $('.nav-fixed').css('opacity', '100');
      } else {
        $('.nav-fixed .nav-items').css('background-color', 'transparent', 'border-bottom', '1px solid grey');
        $('.nav-fixed').css('opacity', '0');
      }
      if (scroll < 50 && scroll >= 0) {
        $('.nav-fixed').hide()
      }
    });
  }
  
  // Dynamic tooltips?
  let tooltips = {
    carbon_sequestration: {
      tippyContent: `A natural or artificial process by which carbon dioxide is removed from the atmosphere.`,
      text: 'carbon sequestration',
      type: 'noun'
    },
    carbon_footprint: {
      tippyContent: `The amount of carbon dioxide and other compounds emitted by the consumption of fossil fuels by a person or group.`,
      text: 'carbon footprint',
      type: 'noun'
    }
  }

  let footnotes = {
    test: {
      tippyContent: 'We are all students from the University of Southern California <br><a class="citation-link" href="references.html#test">Read more...</a>',
    },
    tapingo: {
      tippyContent: `Phenomenal application <br><a class="citation-link" href="references.html#tapingo">Read more...</a>`,
    }
  }

  const createFootnote = (ele) => {
    let classList = $(ele).attr('class').split(/\s+/);
    classList = classList.filter(x => x != 'tippy');
    classList = classList.filter(x => x != 'skipper-theme');

    console.log('classList[1]: ', classList[1]);
    const tippy = footnotes[classList[1]].tippyContent;
    console.log('tippy: ', footnotes[classList[1]].tippyContent);
    const num = classList[2];
    $(`.${classList[1]}`).replaceWith(`<span class='tippy skipper-theme' data-tippy-content='${tippy}' tabindex='0'><sup>${num}</sup></span><script> tippy('.tippy', { theme: 'skipper', animation: 'shift-away', animateFill: false, duration: 200, arrow: true, arrowType: 'round', allowHTML: true, trigger: 'click', interactive: 'true' }) </script>`)
  }

  let divs = document.getElementsByClassName("footnote");
  Object.entries(divs).map((element) => createFootnote(element[1]));

  const replaceTooltip = (name) => {
    const text = $(name).text();

    // this will equal some string
    if (typeof tooltips[text] != 'undefined') {
      const obj = tooltips[text];
      $(name).replaceWith(`<a class='tippy skipper-theme' data-tippy-content='<strong>${capitalize(obj.text)} (${obj.type})</strong><br> ${obj.tippyContent}' tabindex='0'>${obj.text}</a><script> tippy('.tippy', { theme: 'skipper', animation: 'shift-away', animateFill: false, duration: 200, arrow: true, arrowType: 'round', allowHTML: true, trigger: 'click mouseenter' }) </script>`)
    } else {
      $(name).replaceWith(text)
    }
  }
  
  // This is horseshit
  if ($(".tooltip1").text() != '') {
    replaceTooltip('.tooltip1');
  } 
  
  if ($(".tooltip2").text() != '') {
    replaceTooltip('.tooltip2');
  }

  if ($(".tooltip3").text() != '') {
    replaceTooltip('.tooltip3');
  }

  if ($(".tooltip4").text() != '') {
    replaceTooltip('.tooltip4');
  }

  const url = $(location).attr('href');
  if (url.includes('references')) {
    if (url.includes('#')) {
      const anchor = url.split('#')[1];
      console.log(anchor);
      $(`a[name=${anchor}]`).next('.sub').prepend('👉 ');
    }
  }

});
