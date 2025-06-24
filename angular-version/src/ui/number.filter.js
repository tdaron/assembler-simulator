app.filter('number', function() {
    return function(input, isHex, ox) {
        if (isHex) {
            var hex = input.toString(16).toUpperCase();
            if (ox) {
                hex = hex.padStart(4, '0');
                return "0x" + hex;
            } else {
                return (hex.length == 1 ? "0" + hex : hex);
            }
        } else {
            return input.toString(10);
        }
    };
});
