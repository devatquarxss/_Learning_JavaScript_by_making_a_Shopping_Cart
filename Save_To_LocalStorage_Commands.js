//Objects and Arrays:
    var obj = {key: "value"};
    localStorage.object = JSON.stringify(obj);  //Will ignore private members
    obj = JSON.parse(localStorage.object);
//Boolean:
    var bool = false;
    localStorage.bool = bool;
    bool = (localStorage.bool === "true");
//Numbers:
    var num = 42;
    localStorage.num = num;
    num = +localStorage.num;    //short for "num = parseFloat(localStorage.num);"
//Dates:
    var date = Date.now();
    localStorage.date = date;
    date = new Date(parseInt(localStorage.date));
//Regular expressions:
    var regex = /^No\.[\d]*$/i;     //usage example: "No.42".match(regex);
    localStorage.regex = regex;
    var components = localStorage.regex.match("^/(.*)/([a-z]*)$");
    regex = new RegExp(components[1], components[2]);
//Functions (not recommended):
//not recommend to store functions because eval() is evil
//can lead to issues regarding security, optimisation and debugging.
//In general, eval() should never be used in JavaScript code.
    function func(){}
    localStorage.func = func;
    eval( localStorage.func );      //recreates the function with the name "func"
