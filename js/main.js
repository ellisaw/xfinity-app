var sectionNames = ['work', 'stack', 'skill'];

// When window loads, place arrows and hide element descriptions
window.onload = function () {
  for (let i = 0; i < sectionNames.length; i++) {
    loadArrows(sectionNames[i]);
    loadDescriptions(sectionNames[i]);
  }
  /* Arrows don't become clickable until after screen is resized
  ** Quick fix for the issue*/
  window.resizeTo(window.screen.availWidth - 1, window.screen.availHeight - 1);
  window.resizeTo(window.screen.availWidth + 1, window.screen.availHeight + 1);
};

// When window is resized, check sliders for overflow and place arrows
window.onresize = function() {
  for (let i = 0; i < sectionNames.length; i++) {
    loadArrows(sectionNames[i]);
  }
};

// Check for slider overflow and place arrows to scroll
function loadArrows(section) {
  var container = document.getElementById(section + '-container');
  var leftSlider = document.getElementById(section + '-left');
  var rightSlider = document.getElementById(section + '-right');

  // Scroll distance
  leftSlider.addEventListener("click", function() {
    container.scrollLeft -= 200;
  });
  rightSlider.addEventListener("click", function() {
    container.scrollLeft += 200;
  });

  // True if overflow is found and container is scrollable
  var canScroll = container.scrollWidth > container.offsetWidth;

  // Hide arrows when container isn't scrollable
  if (!canScroll) {
    leftSlider.style.display ="none";
    rightSlider.style.display = "none";
  } else {
    leftSlider.style.display = "table-cell";
    rightSlider.style.display = "table-cell";
  }
}

// For a given section, add event listeners to scrollable elements and hide corresponding descriptions
function loadDescriptions(section) {
  // Add event listeners
  var infoContainer = document.getElementById(section + "-container");
  var childElements = infoContainer.childElementCount;
  for (let i = 1; i <= childElements; i++) {
    var elementName = section + "-" + i;
    document.getElementById(elementName).addEventListener("click", function() {
      showDescription(section, i);
    });

    //Hide descriptions
    var elementNameInfo = elementName + '-info';
    document.getElementById(elementNameInfo).style.display = "none";
  }

  //Hide container that holds element descriptions
  document.getElementById(section + '-info').style.display = "none";

}

var lastItem; //last item clicked
var lastContainer; //last info container that was displayed
var open = false; //all descriptions closed by default
function showDescription(section, number) {
  var infoContainer = section + '-info';
  var currentItem = section + '-' + number + '-info';

  // If clicked item is different than last item clicked, display clicked item description
  if (currentItem != lastItem) {
    // If description was already showing, hide respective container
    if (open) {
      document.getElementById(lastContainer).style.display = "none";
      document.getElementById(lastItem).style.display = "none";
    }

    document.getElementById(infoContainer).style.display = "block";
    document.getElementById(currentItem).style.display = "block";

    //description is now open
    open = true;

    //update variables
    lastContainer = infoContainer;
    lastItem = currentItem;
  }

  // If clicked item = last item clicked, toggle description open or closed
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
