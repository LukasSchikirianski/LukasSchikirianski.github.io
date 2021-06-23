const owner_name = 'LukasSchikirianski';
const repo_all = 'all';

function loadStats() {
    let code_frequency = await octokit.request('GET /repos/{owner}/{repo}/stats/code_frequency', {
    owner: owner_name,
    repo: repo_all
    });
    document.getElementById("code_frequency_p").innerHTML = 1234;

    let commit_activity = await octokit.request('GET /repos/{owner}/{repo}/stats/commit_activity', {
    owner: owner_name,
    repo: repo_all
    });
}
