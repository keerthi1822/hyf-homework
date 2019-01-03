const watchFirstEpisode = function() {
    // draw call stack
    console.log('Watch first episode');
  };
  
  const watchBreakingBad = function() {
    console.log('Watching Breaking bad');
    // draw call stack
    watchFirstEpisode();
    console.log('No more for today');
  };
  
  const goForARun = function() {
    console.log('Im running! look at me!');
  }
  
  const helpStudentsWithHomework = function() {
    console.log('Help help help');
  }
  
  function finishMondayEvening(functionThatIsParameter) {
    functionThatIsParameter();
    // draw call stack
    goForARun();
    // draw call stack
    helpStudentsWithHomework();
    // draw call stack
    console.log('done for today')
  }
  
  // draw call stack
  finishMondayEvening(watchBreakingBad);
  // draw call stack