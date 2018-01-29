// const weekday = function() {
//     const names = ["sunday","monday","tuesday","Wednesday",
//     "thursday","friday","saturday",
//     ]

//     return {
//         name : function( number ){ return names[number] },
//         number : function( name ){ return number.indexOf(name) }
//     }
// }


// console.log(weekDay.name(weekDay.number("sunday")));

(function(exports) {
    var names = ["Sunday", "Monday", "Tuesday", "Wednesday",
                 "Thursday", "Friday", "Saturday"];
  
    exports.name = function(number) {
      return names[number];
    };
    exports.number = function(name) {
      return names.indexOf(name);
    };
  })(this.weekDay = {});

function require(name) {
    var code = new Function("exports", readFile(name));
    var exports = {};
    code(exports);
    return exports;
  }
  
  console.log(require("weekDay").name(1));
