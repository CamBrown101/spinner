const spinner = () => {
  const line = ["|", "/", '-', '\\', '|', "/", '-', '\\', '|'];
  let timeout = 100;
  for (let i = 0; i < line.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r ${line[i]}    `);
    }, timeout);
    timeout += 200;
  }
};

spinner();