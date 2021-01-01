let points = [
  [1, 1],
  [3, 2],
  [5, 3],
  [4, 1],
  [2, 3],
  [1, 4],
];
// let points = [
//   [1, 1],
//   [2, 2],
//   [3, 3],
// ];
let mxpa1 = [];
let mxpa2 = [];
let a = 0;
let b = a + 1;
let e = 0;
let m1;
let m2;

var maxPoints = function (points) {
  for (a; a < points.length; a++) {
    a == points.length - 1 ? (b = a - 1) : (b = a + 1);
    if (mxpa1.length > mxpa2.length) {
      mxpa2 = [];
      mxpa2.push([points[a][0], points[a][1]]);
      mxpa2.push([points[b][0], points[b][1]]);
      m1 = (points[a][1] - points[b][1]) / (points[a][0] - points[b][0]);
      for (e; e < points.length; e++) {
        m2 = (points[a][1] - points[e][1]) / (points[a][0] - points[e][0]);
        if (m1 === m2 && e != b && e != a) {
          mxpa2.push([points[e][0], points[e][1]]);
        }
      }
    } else {
      mxpa1 = [];
      mxpa1.push([points[a][0], points[a][1]]);
      mxpa1.push([points[b][0], points[b][1]]);
      m1 = (points[a][1] - points[b][1]) / (points[a][0] - points[b][0]);
      for (e; e < points.length; e++) {
        m2 = (points[a][1] - points[e][1]) / (points[a][0] - points[e][0]);
        if (m1 === m2 && e != b && e != a) {
          mxpa1.push([points[e][0], points[e][1]]);
        }
      }
    }
  }
  if (mxpa1.length > mxpa2.length) {
    console.log(mxpa1);
  } else {
    console.log(mxpa2);
  }
};

maxPoints(points);

// let a =[1,2,3,4,5,6];
// for (let b = 0; b<a.length;b++){
//   console.log(b);
// }
