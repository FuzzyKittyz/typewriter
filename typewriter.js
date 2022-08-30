const sentence = "hello there from lighthouse labs";
let time = 50
for (const char of sentence) {
  time = time + 50
  setTimeout(() => {
    process.stdout.write(char)
  }, time)
}