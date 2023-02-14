// 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// 3: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

const game1 = {
  dolphins: [96, 108, 89],
  koalas: [88, 91, 110],
};
const game2 = {
  dolphins: [97, 112, 101],
  koalas: [109, 95, 123],
};
const game3 = {
  dolphins: [97, 112, 101],
  koalas: [109, 95, 106],
};

const data = {
  game1: {
    dolphins: [96, 108, 89],
    koalas: [88, 91, 110],
  },
  game2: {
    dolphins: [97, 112, 101],
    koalas: [109, 95, 123],
  },
  game3: {
    dolphins: [97, 112, 101],
    koalas: [109, 95, 106],
  },
};

function add(accumulator, a) {
  return accumulator + a;
}

function avgScore(scores) {
  return Math.floor(scores.reduce(add, 0) / scores.length);
}

const g1d = avgScore(game1.dolphins);
const g1k = avgScore(game1.koalas);

const x = Math.floor(game3.koalas.reduce(add, 0));
console.log(x);
// console.log(Math.floor(game1.dolphins.reduce(add, 0));

if (g1d === g1k) {
  console.log(`It's a tie`);
} else {
  if (g1d > g1k) {
    console.log(`Dolphins win, their average score is ${g1d}`);
  } else {
    console.log(`Koalas win, their average score is ${g1k}`);
  }
}
console.log("end");
