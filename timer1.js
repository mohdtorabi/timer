const arg = process.argv.slice(2);

if (arg === []) {
  return "";
}
for (let i = 0; i < arg.length; i++) {
  if (!isNaN(Number(arg[i])) && Number(arg[i]) >= 0) {
    let seconds = (Number(arg[i]) * 1000);
    setTimeout(() => {
      return process.stdout.write('\x07');
    }, seconds);
  }
}
