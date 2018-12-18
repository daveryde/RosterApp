function loadSearches() {
  // Welcome message if sessionStorge returns true
  if (!sessionStorage.getItem('herePreviously')) {
    sessionStorage.setItem('herePreviously', 'true');
    document.getElementById('welcome').innerHTML = ', Welcome Back';
  }

  // Determined localStorage length / Create Empty Array For Local Storage
  var length = localStorage.length;
  var faces = [];

  // Load all saved portraits into empty array
  for (var i = 0; i < length; ++i) {
      faces[i] = localStorage.key(i);
  }

  // Sort all saved portraits
  // faces.sort();

  // Find the results ID in the DOM / Create URL destination variable
  var results = document.getElementById('list');
  var url = 'https://apps.azcorrections.gov/mugshots/';

  // Variable to store all of the HTML markup
  var markup = "<div class='row'>";

  // Load portraits array into markup with HTML elements
  for (var face in faces) {
    markup +=
      "<div class='col-sm-4 col-md-4 col-lg-3'>" +
      "<div class='card'>" +
      '' +
      '' +
      "<img class='card-img-top' " +
      "src='" +
      url +
      localStorage.getItem(faces[face]) +
      ".jpg' id='" +
      faces[face] +
      "' alt='" +
      faces[face] +
      "'>" +
      "<div class='card-body text-center'>" +
      "<h4 class='card-title'>" +
      faces[face] +
      '</h4>' +
      "<p class='card-text'>" +
      localStorage.getItem(faces[face]) +
      '</p>' +
      "<button type='button' class='btn btn-danger' id='" +
      faces[face] +
      "' onclick='del(id)'>Delete</button>" +
      '</div></div></div>';
  } // end for loop

  // Close HTML markup variable
  markup += '</div>';

  // Display markup inside the results element ID
  results.innerHTML = markup;
}

// Save the searched item
function saveSearch() {
  // Find the input data from the DOM
  var name = document.getElementById('docname');
  var query = document.getElementById('docnum');

  // Check for empty fields
  if (query === '' && name === '') {
    break;
  }

  // Store input data into localStorage (key/value)
  localStorage.setItem(name.value, query.value);
  name.value = ''; // clear name box
  query.value = ''; // clear number box
  loadSearches(); // reload the localStorage
}

// Delete the item by ID
function del(id) {
  localStorage.removeItem(id);
  loadSearches(); // reload the localStorage
}

// Register event listeners and load localStorage
function start() {
  loadSearches();

  var search = document.getElementById('submitButton');
  search.addEventListener('click', saveSearch, false);
}

//  Starts the app
window.addEventListener('load', start, false);
window.addEventListener('storage', loadSearches, false);
