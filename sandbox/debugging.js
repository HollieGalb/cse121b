const PI = 3.14;
let area = 0;

function circleArea(radius){
    //find area of a circle
    const area = radius * PI;
    return area;
}
area = circleArea(3);
console.log(area);

area = circleArea(4);
console.log(area);