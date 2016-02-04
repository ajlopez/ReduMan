
var reduman = (function () {
    function createManager() {
        return function (state, data) {
            return state;
        };
    }
    return createManager;
})();

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined')
    module.exports = reduman;
    
