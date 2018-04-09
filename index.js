export default {

    PI: 3.1415927,
    TWO_PI: 6.2831855,
    HALF_PI: 1.5707964,
    QUARTER_PI: 0.7853982,
  
    map (value, start1, stop1, start2, stop2) {
      return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1))
    },
  
    constrain (value, min, max) {
      return value < min ? min : (value > max ? max : value)
    },
  
    lerp (start, end, amt){
      return (1 - amt) * start + amt * end
    },
  
    dist(x1, y1, x2, y2){
      let dx = x2 - x1
      let dy = y2 - y1
      return Math.sqrt(dx * dx + dy * dy)
    },
  
    // trigonometry
    radians (degrees) {
      return degrees * Math.PI / 180
    },
  
    degrees (radians) {
      return radians / Math.PI * 180
    },
  
    polarToCartesian(angle, radius){
      return {
        x: radius * Math.cos(angle),
        y: radius * Math.sin(angle)
      }
    },
  
    cartesianToPolar (x, y) {
      return {
        angle: Math.atan2(y, x),
        radius: Math.sqrt(x*x + y*y)
      }
    },
  }
  