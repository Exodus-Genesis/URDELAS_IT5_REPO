function calculateArea(r){
    var area;
    if (r <= 0) {
        return 0;
    } else {
        area = Math.PI * r * r;
        return area;
    }
        
}
var radius = 5.2;

var thearea = calculateArea(radius);

console.log("The area is: " + thearea);