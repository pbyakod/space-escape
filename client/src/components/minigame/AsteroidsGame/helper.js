export function dealWithBorder (obj, width, height) {
  if (obj.x < 0 - obj.r) {
    obj.x = width + obj.r;
  } else if (obj.x > width + obj.r) {
    obj.x = 0 - obj.r;
  }

  if (obj.y < 0 - obj.r) {
    obj.y = height + obj.r;
  } else if (obj.y > height + obj.r) {
    obj.y = 0 - obj.r;
  }
}