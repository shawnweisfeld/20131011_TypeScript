function Greeter(greeting) {
    this.greeting = greeting;
}

Greeter.prototype.greet = function () {
    return "Hello, " + this.greeting;
};

var greeter = new Greeter({ message: "world" });

var button = document.getElementById('btn');
button.onclick = function () {
    alert(greeter.greet());
};
//# sourceMappingURL=Demo1.js.map
