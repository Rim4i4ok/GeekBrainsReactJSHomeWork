const loop = (times = 0, callback = null) => {
  if(times === 0 || callback === null)  return;
  for(let i = 0; i < times; i++){    
      callback();    
  }
}

loop(5, function () { console.log("Hello, world!"); })
