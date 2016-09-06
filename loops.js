function forLoop(array) {
  for (i = 0; i < 25; i++) {
    array = [...array, `I am ${i} strange loop${ i === 1 ? `` : `s`}.`];
  }

  return array;
}

function whileLoop(n) {
  while (n > 0) {
    console.log(n--);
  }
  return 'done';
}

function doWhileLoop(array) {
  do {
    array.length = array.length -1
  } while (maybeTrue() && array.length > 0);

  return array;
}

function maybeTrue() {
  return Math.random() >= 0.5
}
