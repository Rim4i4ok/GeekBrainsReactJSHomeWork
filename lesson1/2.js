let triangle = {
  figure: 'Traingle',
  sides: [2, 3],
  calculate: function (args) { return (args[0] * args[1]) / 2; }
};

let square = {
  figure: 'Square',
  sides: [5],
  calculate: function (args) { return args[0] * args[0]; }
};


let calculateArea = (parameters) => {
  let {
    figure: figure,
    sides: input, 
    calculate: func
  } = parameters;
  
  return {
    area: func(input),
    figure: figure, 
    input: input
  }
}

console.log(calculateArea(triangle))
console.log(calculateArea(square))
