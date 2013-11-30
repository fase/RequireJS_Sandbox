define(['calculate'], function(calculate) {
    return function(input1, input2, button) {
        button.onclick = function() {
            var val1 = parseInt(input1.value);
            var val2 = parseInt(input2.value);

            if(isNaN(val1) && isNaN(val2)) {
                alert('Invalid numbers!')
            } else {
                console.log(calculate.add(val1, val2));
                console.log(calculate.subtract(val1, val2));
                console.log(calculate.multiply(val1, val2));
                console.log(calculate.divide(val1, val2));
            }
        }
    };
});