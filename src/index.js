require('normalize.css/normalize.css');
require('./application.scss');

class Foo {
    constructor(){
        this.value = "foobar"
    }
    static instance() {
        return new Foo()
    }
    getValue() {
        return this.value
    }
}

console.log(Foo.instance().getValue())
