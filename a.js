let height = [22, 0, 0, 12, 0, 6];
let water = 0;
let a = 0;

for (a; a < height.length; a++) {
  let left = a - 2;
  let sameonleft;
  for (left; left >= 0; left--) {
    if (height[left] >= height[a]) {
      sameonleft = left;
    }
  }
  for (let x = a - 1; x > sameonleft; x--) {
    if (height[x] < height[sameonleft] && height[x] < height[a]) {
      do {
        water++;
        height[x]++;
      } while (height[x] < height[sameonleft] && height[x] < height[a]);
    }
  }
  let right = a + 2;
  let sameonright;
  for (right; right < height.length; right++) {
    if (height[right] >= height[a]) {
      sameonright = right;
    }
  }
  for (let z = a + 1; z < sameonright; z++) {
    if (height[z] < height[sameonright] && height[z] < height[a]) {
      do {
        water++;
        height[z]++;
      } while (height[z] < height[sameonright] && height[z] < height[a]);
    }
  }
}
console.log(water);