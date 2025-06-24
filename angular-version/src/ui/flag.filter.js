app.filter('flag', function() {
    return function(input) {
        //return input.toString().toUpperCase();
        return input ? "1" : "0";
    };
});
