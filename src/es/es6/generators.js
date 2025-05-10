// генератор последовательности фибоначчи
function* fibGenerator(length) {
  let prev = 0;
  let current = 1;
  yield prev;
  yield current;
  for(let i = 0; i < length - 2; i++) {
    const res = prev + current;
    prev = current;
    current = res;
    yield res;
  }
}


export const runTasksGenerators = () => {
  const generator = fibGenerator(10);
  for(let item of generator){
    console.log(item);
  }
};
