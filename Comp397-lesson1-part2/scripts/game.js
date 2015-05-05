var Person = (function () {
    //constructor
    function Person() {
    }
    //public methods
    Person.prototype.saysHello = function () {
        console.log("Hello!");
    };
    return Person;
})();

function init() {
    var myPerson = new Person();
    myPerson.saysHello();
}
//# sourceMappingURL=game.js.map
