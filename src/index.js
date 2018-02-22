/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(startArray = []) {
    var wasTriangles = [];

    var first;
    var second;
    var third;

    for(var i = 0; i < startArray.length; i++) {
        first = startArray[i];
        second = i + 1;

        if(first != second) {
            for(var j = 0; j < startArray.length; j++) {
                if(startArray[j] == second) {
                    third = j + 1;

                    if(first != third && second != third) {
                        for(var k = 0; k < startArray.length; k++) {
                            if(startArray[k] == third && k + 1 == first) {
                                var isWas = false;

                                for(var wasIndex = 0; wasIndex < wasTriangles.length; wasIndex++) {
                                    if(wasTriangles[wasIndex].includes(first) &&
                                        wasTriangles[wasIndex].includes(second) &&
                                        wasTriangles[wasIndex].includes(third)) {
                                        isWas = true;
                                        break;
                                    }
                                }

                                if(!isWas) {
                                    wasTriangles.push([first, second, third]);
                                }
                            }
                        }
                    }
                }
            }
        }
    }

    return wasTriangles.length;
};
