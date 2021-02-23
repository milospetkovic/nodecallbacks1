// callbacks with named functions
console.log('Before');
getUser(1, gRepositories);
console.log('After');
 
function gRepositories(data) {
  console.log("User: ", data);
  getRepositories(data.gitHubUsername, gCommits);
}
 
function gCommits(repos) {
  console.log("Repositories: ", repos);
  getCommits(repos[0], displayCommits);
}
 
function displayCommits(commits) {
  console.log('Commits: ', commits);
}
 
 
//Mains
function getUser(id, callback) {
  setTimeout(function(){
    console.log('Reading user from database..');
    callback({id: id, gitHubUsername: 'milos'});
  }, 2000);
}
 
function getRepositories(username, callback) {
  setTimeout(function() {
    console.log("Getting repositories for " + username);
    callback(['repo1', 'repo2', 'repo3']);
  }, 2000);
}
 
function getCommits(rep, callback) {
  setTimeout(function() {
    console.log("Here are the commits from " + rep);
    callback("COMMIT");
  }, 2000);
}