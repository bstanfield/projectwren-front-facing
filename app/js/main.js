document.addEventListener('DOMContentLoaded', () => {
  var $ = require('jquery');

  // Navbar scroll
  $(document).scroll(function () {
    var scroll = $(this).scrollTop();
    if (scroll > 655) {
      $('.nav-fixed .nav-items').css('background-color', '#F4F3F0', 'border-bottom', '0px solid grey');

      $('.nav-fixed').css('opacity', '100');
    } else {
      $('.nav-fixed .nav-items').css('background-color', 'transparent', 'border-bottom', '1px solid grey');
      $('.nav-fixed').css('opacity', '0');
    }
  });

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

  const capitalize = (s) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }

  const replaceTooltip = (name) => {
    const text = $(name).text();

    // this will equal some string
    if (typeof tooltips[text] != 'undefined') {
      const obj = tooltips[text];
      $(name).replaceWith(`<a class='tippy skipper-theme' data-tippy-content='<strong>${capitalize(obj.text)} (${obj.type})</strong><br> ${obj.tippyContent}' tabindex='0'>${obj.text}<sup>?</sup></a><script> tippy('.tippy', { theme: 'skipper', animation: 'shift-away', animateFill: false, duration: 200, arrow: true, arrowType: 'round', allowHTML: true, trigger: 'click mouseenter' }) </script>`)
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

});
