const sum = ([...args]) => {
  return args.reduce((a, c) => { return a + c }, 0);
};

export default sum;