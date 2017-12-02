const dayName = function() {

    var names = [
        "Sundays","Monday","Tuesday","Wednesday",
        "Thursday","Friday","Saturday" ];

    return function( number ) {
        return names[number];
    }
    
}()

console.log( dayName(3) );

(function() {
    function square(x) { return x * x; }
    var hundred = 100;
  
    console.log(square(hundred));
})();


