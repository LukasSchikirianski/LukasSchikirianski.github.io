
/*import React, { useEffect, useState } from "react";
 
const GithubStatistics = () => {
  const [githubStats, setGithubStats] = useState({
    stargazers_count: "-",
    forks_count: "-",
  });
 
  useEffect(() => {
    fetch(`https://api.github.com/users/LukasSchikirianski/repos`)
      .then((response) => response.json())
      .then((json) => {
        setGithubStats({
          stargazers_count: json.stargazers_count,
          forks_count: json.forks_count,
        });
      })
      .catch((e) => console.log(`Error while calling GitHub API: ${e}`));
  }, []);
   
  return (
    <div>
      <p>{githubStats.stargazers_count}</p>
      <p>{githubStats.forks_count}</p>
    </div>
  );
};
 
export default GithubStatistics;
*/
