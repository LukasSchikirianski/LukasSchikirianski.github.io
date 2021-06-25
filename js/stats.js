/*
var url = 'https://api.github.com/users/LukasSchikirianski/repos';

var request = new XMLHttpRequest();
request.open('GET', url);

request.onload = function () {
  // Request finished. Do processing here.
  console.log(request.response());
};

request.send(null);
*/

window.onload = function () {
  document.getElementById("projects").innerHTML = '1234' + ' <em>Projects</em>';
  document.getElementById("code_frequency").innerHTML = '567' + ' <em>Code Frequency</em>';
  document.getElementById("all_time_commits").innerHTML = '8901' + ' <em>All Time Commits</em>';
  document.getElementById("placeholder_1").innerHTML = '12' + ' <em>Placeholder 1</em>';
  document.getElementById("placeholder_2").innerHTML = '34' + ' <em>Placeholder 2</em>';
  document.getElementById("placeholder_3").innerHTML = '56' + ' <em>Placeholder 3</em>';

  function getRequest() {

  var request = new XMLHttpRequest();

  request.onload = function () {
    document.getElementById("code_frequency").innerHTML = 'IT WORKS' + ' <em>Code Frequency</em>';
  };

  request.open("GET", "https://api.github.com/users/LukasSchikirianski/repos", true);
  request.send();
  }
}