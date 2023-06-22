var previousButton = null;

function changeButtonColor_Border(event) {
  var targetElement = event.target;

  if (targetElement.tagName === 'BUTTON') {
    var targetButton = targetElement;
  
    if (previousButton !== null) {
      previousButton.style.backgroundColor = '';
      previousButton.style.color = '';
    }
  
    targetButton.style.backgroundColor = '#70C3F2';
    targetButton.style.color = 'white';
  
    previousButton = targetButton;
  
    // Get the index of the clicked button
    var buttons = document.querySelectorAll('.pages button');
    var index = Array.from(buttons).indexOf(targetButton);
  
    // Hide all headers and containers
    var headers = document.querySelectorAll('.container_right_top h1');
    var containers = document.querySelectorAll('.ContactContainers');
    headers.forEach(function(header) {
      header.style.display = 'none';
    });
    containers.forEach(function(container) {
      container.style.display = 'none';
    });
  
    // Show the corresponding header and container
    headers[index].style.display = 'block';
    containers[index].style.display = 'block';
  }
}

// Automatically click the first button on page load
document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.pages button');
  buttons[0].click();
});