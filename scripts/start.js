const { exec } = require('child_process');

const react = exec('yarn start4000', function (error, stdout, stderr) {
  if (error) {
    console.log(error.stack);
    console.log('Error code: '+error.code);
    console.log('Signal received: '+error.signal);
  }
  console.log('App Process STDOUT: '+stdout);
  console.log('App Process STDERR: '+stderr);
});

react.on('exit', function (code) {
  console.log('App process exited with exit code '+code);
});

const ws2files = exec('yarn ws2files', function (error, stdout, stderr) {
    if (error) {
      console.log(error.stack);
      console.log('Error code: '+error.code);
      console.log('Signal received: '+error.signal);
    }
    console.log('ws2files Process STDOUT: '+stdout);
    console.log('ws2files Process STDERR: '+stderr);
  });
  
  ws2files.on('exit', function (code) {
    console.log('ws2files process exited with exit code '+code);
  });