//banner disappears when scrolling down and reappears when scrolling up
var prevScrollpos = window.pageYOffset;

// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;

//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("banner").classList.add("sticky");
//   } else {
//     document.getElementById("banner").classList.remove("sticky");
//   }

//   prevScrollpos = currentScrollPos;
// };
//change border radius of the banner when hovering over ProductsMenuButton
const productsMenuButton = document.getElementById('productsMenuButton');
const banner = document.getElementById('banner');


function showMenu() {
  var nav = document.getElementById('nav_list_banner');
  var menuColor = document.getElementById('productsMenuButton');
  nav.style.display = 'block';
  menuColor.style.opacity = '1';
  banner.style.borderBottomLeftRadius = '0';
  banner.style.borderBottomRightRadius = '0';
}

function hideMenu() {
  var nav = document.getElementById('nav_list_banner');
  var menuColor = document.getElementById('productsMenuButton');
  nav.style.display = 'none';
  menuColor.style.opacity = '0.8';
  banner.style.borderRadius = '50px';
}

function showProductSlides() {
  var productLists = document.getElementsByClassName('Product_list');
  var menuPictures = document.getElementsByClassName('menuPicture');

  for (var i = 0; i < productLists.length; i++) {
    productLists[i].classList.add('hidden');
    menuPictures[i].classList.add('hidden');
  }

  var currentProductList = this.querySelector('.Product_list');
  var currentMenuPicture = this.querySelector('.menuPicture');

  if (currentProductList && currentMenuPicture) {
    currentProductList.classList.remove('hidden');
    currentMenuPicture.classList.remove('hidden');
  }
}

function hideProductSlides() {
  var productLists = document.getElementsByClassName('Product_list');
  var menuPictures = document.getElementsByClassName('menuPicture');

  for (var i = 0; i < productLists.length; i++) {
    productLists[i].classList.add('hidden');
    menuPictures[i].classList.add('hidden');
  }
}

 
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