window.onload = function() {
  loadArrows('work');
  loadArrows('stack');
  loadDescriptions('work');
  loadDescriptions('stack');
};




function loadDescriptions(section) {
  var infoContainer = document.getElementById(section + "-container");
  var childElements = infoContainer.childElementCount;

  for (let i = 1; i <= childElements; i++) {
    var elementName = section + "-" + i;
    document.getElementById(elementName).addEventListener("click", function() {
      showDescription(section, i);
    });

    var elementNameInfo = elementName + '-info';
    document.getElementById(elementNameInfo).style.display = "none";
  }

}

var lastItem;
var lastContainer;
var open = false;;
function showDescription(section, number) {
  console.log('clicked');
  var infoContainer = section + '-info';
  var currentItem = section + '-' + number + '-info';

  if (currentItem != lastItem) {
    if (open) {
      document.getElementById(lastContainer).style.display = "none";
      document.getElementById(lastItem).style.display = "none";
    }

    document.getElementById(infoContainer).style.display = "block";
    document.getElementById(currentItem).style.display = "block";

    open = true;

    lastContainer = infoContainer;
    lastItem = currentItem;
  }

  else {
    if (open) {
      document.getElementById(infoContainer).style.display = "none";
      document.getElementById(currentItem).style.display = "none";
      open = false;
    } else {
      document.getElementById(lastContainer).style.display = "block";
      document.getElementById(lastItem).style.display = "block";
      open = true;
    }
  }
}

function loadArrows(section) {
  var container = document.getElementById(section + '-container');
  var leftSlider = document.getElementById(section + '-left');
  var rightSlider = document.getElementById(section + '-right');

  leftSlider.addEventListener("click", function() {
    container.scrollLeft -= 200;
  });

  rightSlider.addEventListener("click", function() {
    container.scrollLeft += 200;
  });

  var canScroll = container.scrollWidth > container.offsetWidth;

  if (!canScroll) {
    leftSlider.style.display ="none";
    rightSlider.style.display = "none";
  } else {
    leftSlider.style.display = "table-cell";
    rightSlider.style.display = "table-cell";
  }

}

window.onresize = function() {
  loadArrows('work');
};
