export default {

    PI: 3.1415927,
    TWO_PI: 6.2831855,
    HALF_PI: 1.5707964,
    QUARTER_PI: 0.7853982,

    map: function (value, start1, stop1, start2, stop2) {
        return start2 + (stop2 - start2) * ((value - start1) / (stop1 - start1))
    },

    constrain: function (value, min, max) {
        return value < min ? min : (value > max ? max : value)
    },

    radians: function (degrees) {
        return degrees * Math.PI / 180
    },

    degrees: function (radians) {
        return radians / Math.PI * 180
    }
}