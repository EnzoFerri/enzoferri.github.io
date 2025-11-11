if (window.addEventListener) window.addEventListener('load', setBoxes(boxIds), false);
else if (window.attachEvent) window.attachEvent('onload', setBoxes(boxIds) );

function setBoxes(boxIds) {
  var boxes = new Array();
  for(var i=0; i<boxIds.length; i++) {
    boxes[i] = document.getElementById(boxIds[i]);
  }
  setEqualHeight(boxes);
}
function setEqualHeight(columns) {
  var tallestcolumn = 0;
  for(var i=0,j=columns.length; i<j; i++) {
    currentHeight = columns[i].clientHeight;
    if(currentHeight > tallestcolumn) {
      tallestcolumn = currentHeight;
    }
  }
  for(var i=0,j=columns.length; i<j; i++) {
    columns[i].style.height = tallestcolumn+'px';
  }
} 