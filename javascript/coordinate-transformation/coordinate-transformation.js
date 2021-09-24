export function translate2d(dx, dy) {
  return function moveCoordinatesRight2px(x, y) {
    return [x + dx, y + dy]
  }
}

/* export function translate2d(dx, dy) {
return (x, y) => [dx + x, dy + y]
} */

export function scale2d(sx, sy) {
  return function doubleScale(x, y) {
    return [x * sx, y * sy]
  }
}
/* export function translate2d(dx, dy) {
return (x, y) => [dx * x, dy * y]
} */

export function composeTransform(f, g) {
  return function (x, y) {
    return g(f(x, y)[0], f(x, y)[1])
  }
}
/* export function composeTransform(f, g) {
  return function (x, y) {
    let [x1, y1] = f(x, y)
    return g(x1, y1);
  }
} */
/* export function composeTransform(f, g) {
  return function (x, y) {
    return g(...f(x, y))
  }
} */
//cache do resultado
export function memoizeTransform(f) {
  let lastX, lastY, lastResult;

  return function (x, y) {
    if (lastX == x && lastY == y) {
      return lastResult
    }
    lastX = x; lastY = y;
    lastResult = f(x, y)

    return lastResult
  }
}