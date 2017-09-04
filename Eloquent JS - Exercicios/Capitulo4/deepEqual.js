function deepEqual(obj1, obj2)
{
    if(obj1 === obj2) {
        return true
    }

    if (obj1 === null || obj2 === null) {
        return false
    }

    if(typeof obj1 === 'object' && typeof obj2 === 'object') {
        const keysObj1 = Object.keys(obj1)
        const keysObj2 = Object.keys(obj2)

        if (keysObj1.length !== keysObj2.length){
            return false
        }

        for (let i in obj1) {
            if( deepEqual( obj1[i], obj2[i] ) === false ) {
                return false;
            }
        }
        return true;
    }

    return false;

}

const obj = {here: {is: "an"}, object: 2};
console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true