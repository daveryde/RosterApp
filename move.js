var item;
var span;

function getElement(e) {
  if (e.target.tagName.toLowerCase() == 'img') {
    item = e.target.parentNode;
    document.addEventListener('mouseover', setItem, false);
  }
}

function setItem(e) {
  var hovItem = e.target.parentNode;
  if (hovItem.style.order > item.style.order && hovItem.style.order != -1) {
    var temp = item.style.order;
    item.style.order = hovItem.style.order;
    hovItem.style.order = temp;
  } else if (hovItem.style.order < item.style.order) {
    var temp = item.style.order;
    item.style.order = hovItem.style.order;
    hovItem.style.order = temp;
  }
  document.removeEventListener('mouseover', setItem, false);
}

function orderList() {
  span = document.getElementsByClassName('polaroidBox');

  for (var i = 0; i < span.length; i++) {
    span[i].style.order = i;
  }
}

function saveOrder() {
  var faces = [];

  var temp = localStorage.getItem('Baker');

  console.log(temp);

  // for (var id in span) {
  //   faces[span[id].style.order] = localStorage.key(i);
  // }
}

function start() {
  document.addEventListener('mousedown', getElement, false);
  document.getElementById('order').addEventListener('click', orderList, false);
}

window.addEventListener('click', saveOrder, false);
window.addEventListener('load', orderList, false);
window.addEventListener('load', start, false);
