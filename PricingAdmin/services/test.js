class TestClass {
    constructor(){
        this.value = 'hi';
    }
    returnTwo(){
        return this.value;
    }
    myAcceptor(someStringVal){
        this.value = someStringVal;
    }
}

module.exports = TestClass;

