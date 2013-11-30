require(["mathButton"], function(mathButton) {
    var input1 = this.document.getElementById('var1');
    var input2 = this.document.getElementById('var2');
    var doMath = this.document.getElementById('doMath');

    new mathButton(input1, input2, doMath);
});