export const runTasksPrototypes = () => {

  Object.prototype[Symbol.iterator] = function () {
    const entries = Object.entries(this);
    let index = 0;

    return {
      next() {
        if (index < entries.length) {
          const [key, value] = entries[index++];
          return { value, done: false };
        }
        return { value: undefined, done: true };
      },
    };
  };
};
