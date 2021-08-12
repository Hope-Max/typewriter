const sentence = 'hello there from lighthouse labs\n';

for (let j = 0; j < sentence.length; j++) {
  setTimeout(() => process.stdout.write(sentence[j]), 100 * j);
}