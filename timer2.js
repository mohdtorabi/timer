const stdin = process.stdin;
stdin.setEncoding('utf8');
stdin.on("data", (data) => {
  
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'b') {
    console.log("beep");
    process.stdout.write('\x07');
    
    
  }

  if (!isNaN(Number(data)) && Number(data) >= 1) {
    let seconds = (Number(data) * 1000);
    setTimeout(() => {
      console.log("beeeeep");
      return process.stdout.write('\x07');
    }, seconds);
  }
  
});


