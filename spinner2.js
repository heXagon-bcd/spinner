process.stdout.write('hello from spinner1.js... \rheyyy\n');

const spinner = function (callback) {
  const arr = ["|", "/", "-","\\", "|"];
  let timer = -100;
  for (let i = 0; i < arr.length; i++) {
    timer += 200;
    //console.log(timer)
    setTimeout(() => {
      process.stdout.write(`\r${arr[i]}     `);//spaces becasuse the cursor needs to move far away enough from the animation
    }, (timer))
  };
}

spinner();