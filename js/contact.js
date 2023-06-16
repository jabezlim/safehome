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
    
    // Hide all headers and images
    var headers = document.querySelectorAll('.container_right_top h1');
    var images = document.querySelectorAll('.container_right_bottom img');
    headers.forEach(function(header) {
      header.style.display = 'none';
    });
    images.forEach(function(image) {
      image.style.display = 'none';
    });
    
    // Show the corresponding header and image
    headers[index].style.display = 'block';
    images[index].style.display = 'block';
  }
}

// Automatically click the first button on page load
document.addEventListener('DOMContentLoaded', function() {
  var buttons = document.querySelectorAll('.pages button');
  buttons[0].click();
});

//Q&A 
const accordions = document.getElementsByClassName("accordion");

for (let i = 0; i < accordions.length; i++) {
  accordions[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      closeAllPanels();
      panel.style.display = "block";
    }
  });
}

function closeAllPanels() {
  const panels = document.getElementsByClassName("panel");
  for (let i = 0; i < panels.length; i++) {
    panels[i].style.display = "none";
  }
}