const getStats = async () => {

  var response = await fetch('https://api.github.com/users/LukasSchikirianski/repos');
  var data = await response.json();
  var repositoryCount = await Object.keys(data).length;

  return repositoryCount; //, codeFrequency, allTimeCommits, placeholder1, placeholder2, placeholder3;
}


getStats()
  .then(repositoryCount => document.getElementById('projects')
    .innerHTML = repositoryCount + ' <em>Projects</em>')

  //.then(codeFrequency => document.getElementById('code_frequency')
  //  .innerHTML = codeFrequency + ' <em>Code Frequency</em>')

  //.then(allTimeCommits => document.getElementById('all_time_commits')
  //  .innerHTML = allTimeCommits + ' <em>All Time Commits</em>')

  //.then(placeholder1 => document.getElementById('placeholder_1')
  //  .innerHTML = placeholder1 + ' <em>Placeholder 1</em>')

  //.then(placeholder2 => document.getElementById('placeholder_2')
  //  .innerHTML = placeholder2 + ' <em>Placeholder 2</em>')

  //.then(placeholder3 => document.getElementById('placeholder_3')
  //  .innerHTML = placeholder3 + ' <em>Placeholder 3</em>')

  .catch(error => console.error(error));

  

