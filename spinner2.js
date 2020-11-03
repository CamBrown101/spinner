// setTimeout(() => {
//   process.stdout.write('\r |    ');
// }, 100);
// setTimeout(() => {
//   process.stdout.write('\r /    ');
// }, 300);
// setTimeout(() => {
//   process.stdout.write('\r -    ');
// }, 500);
// setTimeout(() => {
//   process.stdout.write('\r \\    ');
// }, 700);
// setTimeout(() => {
//   process.stdout.write('\r |    ');
// }, 900);
// setTimeout(() => {
//   process.stdout.write('\r /    ');
// }, 1100);
// setTimeout(() => {
//   process.stdout.write('\r -    ');
// }, 1300);
// setTimeout(() => {
//   process.stdout.write('\r \\    ');
// }, 1500);
// setTimeout(() => {
//   process.stdout.write('\r |    ');
// }, 1700);

const spinner = () => {
  const line = ["|", "/", '-', '\\', '|', "/", '-', '\\', '|']
  timeout = 100;
  for (let i = 0; i < line.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r ${line[i]}    `);
    }, timeout);
    timeout += 200;
  }
}

spinner()

// for (const char of sentence) {
//   setTimeout(() => {
//     process.stdout.write(char);
//     printString += char;
//     if (printString.length === sentence.length) {
//       console.log('');
//     }
//   }, delay);
//   delay += 50;
// }