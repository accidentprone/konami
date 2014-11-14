(function (root, factory) {
    "use strict";

    if (typeof define === "function" && define.amd) {
        // AMD
        define([], factory);
    } else if (typeof exports === "object") {
        // Node, CommonJS-like
        module.exports = factory();
    } else {
        // Browser globals (root is window)
        root.konami = factory();
    }
}(this, function () {
    "use strict";

    var callbacks = [],
        input = [],
        code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
        pattern = code.toString(),
        length = code.length,
        isInitialized = false;

    function doCallback() {
        callbacks.forEach(function (callback) {
            callback();
        });
    }

    function init() {
        document.addEventListener("keydown", function (event) {
            input.push(event.keyCode);
            if (input.length > length) {
                input.shift();
            }
            if (input.toString() === pattern) {
                doCallback();
                event.preventDefault();
                return false;
            }
        }, false);

        isInitialized = true;
    }

    return function (callback) {
        if (!isInitialized) {
            init();
        }

        switch (typeof callback) {
        case "function":
            callbacks.push(callback);
            break;

        case "string":
            callbacks.push(function () {
                window.location = callback;
            });
            break;
        }
    };
}));
