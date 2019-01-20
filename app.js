const $ = function(selector) {
  return Array.from(document.querySelectorAll(selector));
} 

const toggleDropdown = function() {
  $('#drop-down-link')[0].onclick = function () {
    $('.options')[0].classList.toggle('open');
  };
}

const addClass = function(element, className) {
    element.classList.add(className);
}

const removeClass = function(element, className) {
    element.classList.remove(className);
}

const handleFocus = function(selector, event, className) {
  $(selector).forEach(function(currentElement) {
    if(event.target === currentElement) {
      addClass(currentElement, className)
    } 
    else
      removeClass(currentElement, className);
  });
}

document.addEventListener("DOMContentLoaded", function(event) {
  toggleDropdown();
  
  $('header nav a').forEach(function (element) {
    element.onclick = function (event) {
      handleFocus('header nav a', event, 'highlight');
      $('h1')[0].innerText = event.target.innerText;
      $('.content-area').forEach(function(e) {
        e.classList.toggle('show');
      })
    }
  });

  $('.app-container__top nav a').forEach(function(element) {
    element.onclick = function (event) {
      handleFocus('.app-container__top nav a', event, 'selected');
    }
  })

});