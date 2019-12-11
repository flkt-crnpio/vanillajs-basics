/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  return objects.filter(o => o.x == o.y).length
}
const objects = [
  {x: 1, y: 2},
  {x: 1, y: 1},
  {x: 5, y: 2},
  {x: 8, y: 2},
];
result = getCount(objects);
console.log(result);
