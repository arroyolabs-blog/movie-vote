'use strict';

/*
Example Movie Voter Class

AL.movie.init();
*/

var AL = AL || {};

AL.movie = (function() {
  
  var votes = 0;
  
  function upvote() {
    votes += 1;
    updateVotes();
  }
  
  function downvote() {
    votes -= 1;
    updateVotes();
  }
  
  function updateVotes() {
    document.getElementById('votes').innerHTML = votes;
  }
  
  var init = function() {

    document.getElementById('upvote').addEventListener('click', upvote);
    document.getElementById('downvote').addEventListener('click', downvote);
    
    updateVotes();
  };
  
  return {
    init: init
  }
  
})();
