let animal = "";
function myAnimal() {
  animal = "dog";
  return animal;
}

function yourAnimal() {
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  animal = "cat";
  return animal;
}

function add2(n) {
  const two = 2;
  return n + two;

  // Feel free to move things around!

}
//git@github.com/learn-co-curriculum/javascript-fix-the-scope-lab.git"
  }
  "keywords": [
    "javascript",
    "flatiron",
    "learn"
  ],
  "author": "pletcher",
  "license": "SEE LICENSE IN LICENSE.md",
  "bugs": {
    "url": "https://github.com/learn-co-curriculum/javascript-fix-the-scope-lab/issues"
  },
  "homepage": "https://github.com/learn-co-curriculum/javascript-fix-the-scope-lab#readme",
  "devDependencies": {
    "babel-core": "^6.11.4",
    "babel-preset-es2015": "^6.9.0",
    "chai": "^3.5.0",
    "expect": "^1.20.2",
    "jsdom": "^8.5.0",
    "mocha": "^2.4.5",
    "mocha-jsdom": "~1.1.0",
    "mocha-multi": "^0.9.0"
  },
  "dependencies": {}
}
