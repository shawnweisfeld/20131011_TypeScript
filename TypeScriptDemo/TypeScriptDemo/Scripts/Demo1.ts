function Greeter(greeting) {
    this.greeting = greeting;
}

Greeter.prototype.greet = function () {
    return "Hello, " + this.greeting;
}

var greeter = new Greeter({ message: "world" });

var button = document.getElementById('btn');
button.onclick = function () {
    alert(greeter.greet());
};

/*
--********************************
--before
--********************************
function Greeter(greeting) {
    this.greeting = greeting;
}

Greeter.prototype.greet = function () {
    return "Hello, " + this.greeting;
}

var greeter = new Greeter({ message: "world" });

var button = document.getElementById('btn');
button.onclick = function () {
    alert(greeter.greet());
};


--********************************
--After with string
--********************************
function Greeter(greeting: string) {
    this.greeting = greeting;
}

Greeter.prototype.greet = function () {
    return "Hello, " + this.greeting;
}

var greeter = new Greeter("world");

var button = document.getElementById('btn');
button.onclick = function () {
    alert(greeter.greet());
};

--********************************
--After with Interface
--********************************
interface GreetingMessage {
    message: string;
}

function Greeter(greeting: GreetingMessage) {
    this.greeting = greeting;
}

Greeter.prototype.greet = function () {
    return "Hello, " + this.greeting.message;
}

var greeter = new Greeter({ message: "interfaces" });

var button = document.getElementById('btn');
button.onclick = function () {
    alert(greeter.greet());
};

--********************************
--After with Class
--********************************
class Greeter {
    greeting: string;
    constructor(message: string) {
        this.greeting = message;
    }
    greet() {
        return "Hello, " + this.greeting;
    }
}

var greeter = new Greeter("classes");

var button = document.getElementById('btn');
button.onclick = function () {
    alert(greeter.greet());
};

--********************************
--After with Class and inline property
--********************************
class Greeter {
    constructor(public greeting: string) { }

    greet() {
        return "Hello, " + this.greeting;
    }
}

var greeter = new Greeter("classes short");

var button = document.getElementById('btn');
button.onclick = function () {
    alert(greeter.greet());
};


--********************************
--After with Class and generics
--********************************
class Greeter<T> {
    constructor(public greeting: T) { }

    greet() {
        return "Hello, " + this.greeting;
    }
}

var greeter = new Greeter("generics");

var button = document.getElementById('btn');
button.onclick = function () {
    alert(greeter.greet());
};


--********************************
--After with Module
--********************************
module Sayings {
    export class Greeter {
        constructor(public greeting: string) { }

        greet() {
            return "Hello, " + this.greeting;
        }
    }
}

var greeter = new Sayings.Greeter("module fun!");

var button = document.getElementById('btn');
button.onclick = function () {
    alert(greeter.greet());
};


*/