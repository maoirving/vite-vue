var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var extensionsArr = [
    {
        firstName: 'Stephen5',
        lastName: 'Curry5',
        ext: 'dd5',
        extType: 'AO'
    },
    {
        firstName: 'Stephen6',
        lastName: '3',
        ext: 'dd6',
        extType: 'Dept'
    },
    {
        firstName: 'Stephen6',
        ext: 'dd7',
        extType: 'Dept'
    },
    {
        firstName: 'Stephen',
        lastName: 'Curry',
        ext: 'dd',
        extType: 'DigitalUser'
    },
    {
        firstName: 'Stephen3',
        lastName: 'Curry3',
        ext: 'dd3',
        extType: 'FaxUser'
    },
    {
        firstName: 'Stephen2',
        lastName: 'Curry2',
        extType: 'VirtualUser'
    },
    {
        firstName: 'Stephen4',
        lastName: 'Curry4',
        ext: 'dd4',
        extType: 'Dept'
    },
];
/* Question 1: sort extensions by "firstName" , "lastName" , "ext" ASC */
var compare = function (a, b) {
    return a === b ? 0 : a > b ? 1 : -1;
};
function sortExtensionsByName(extensions) {
    return __spreadArray([], extensions, true).sort(function (a, b) {
        var _a, _b, _c, _d;
        var comparedResult = compare(a.firstName, b.firstName);
        if (comparedResult !== 0) {
            return comparedResult;
        }
        comparedResult = compare((_a = a.lastName) !== null && _a !== void 0 ? _a : '', (_b = b.lastName) !== null && _b !== void 0 ? _b : '');
        if (comparedResult !== 0) {
            return comparedResult;
        }
        comparedResult = compare((_c = a.ext) !== null && _c !== void 0 ? _c : '', (_d = b.ext) !== null && _d !== void 0 ? _d : '');
        return comparedResult;
    });
}
console.log('--- Question 1: sortExtensionsByName ---');
console.log(sortExtensionsByName(extensionsArr));
/* Question 2: sort extensions by extType follow these orders ASC
      DigitalUser < VirtualUser < FaxUser < AO < Dept, if the "extType" not belongs to these values, the sort it in the last. */
var EXT_TYPE_INDEXS = {
    Dept: 0,
    AO: 1,
    FaxUser: 2,
    VirtualUser: 3,
    DigitalUser: 4
};
var compareIndex = function (x, y) {
    var _a, _b;
    var xIndex = (_a = EXT_TYPE_INDEXS[x]) !== null && _a !== void 0 ? _a : -1;
    var yIndex = (_b = EXT_TYPE_INDEXS[y]) !== null && _b !== void 0 ? _b : -1;
    return xIndex < yIndex ? 1 : xIndex === yIndex ? 0 : -1;
};
function sortExtensionsByExtType(extensions) {
    if (!extensions.length)
        return extensions;
    return __spreadArray([], extensions, true).sort(function (a, b) { return compareIndex(a.extType, b.extType); });
}
console.log('--- Question 2: sortExtensionsByExtType ---');
console.log(sortExtensionsByExtType(extensionsArr));
var saleList = [
    {
        month: 1,
        date: 3,
        transationId: '11',
        salePrice: 9.9
    },
    {
        month: 3,
        date: 2,
        transationId: '11',
        salePrice: 9.9
    },
    {
        month: 5,
        date: 3,
        transationId: '11',
        salePrice: 9.9
    },
    {
        month: 4,
        date: 2,
        transationId: '11',
        salePrice: 99.9
    },
    {
        month: 1,
        date: 2,
        transationId: '11',
        salePrice: 19.9
    },
    {
        month: 8,
        date: 3,
        transationId: '11',
        salePrice: 9.9
    },
    {
        month: 11,
        date: 2,
        transationId: '11',
        salePrice: 9.9
    },
];
var getQuarter = function (month) {
    var result = month / 3;
    return Math.floor(month % 3 === 0 ? result : result + 1);
};
var getsaleSums = function (saleItems, amountType) {
    if (amountType === void 0) { amountType = 'sum'; }
    var saleSums = [];
    saleItems.forEach(function (item) {
        var currenctQuarter = getQuarter(item.month);
        if (saleSums.findIndex(function (val) { return val.quarter === currenctQuarter; }) === -1) {
            saleSums.push({
                quarter: currenctQuarter,
                amount: item.salePrice,
                transactionNums: 1
            });
        }
        else {
            saleSums.some(function (sum) {
                if (sum.quarter === currenctQuarter) {
                    sum.amount =
                        amountType === 'sum'
                            ? Number((sum.amount + item.salePrice).toFixed(2))
                            : Math.max(sum.amount, item.salePrice);
                    sum.transactionNums++;
                    return true;
                }
                return false;
            });
        }
    });
    return saleSums;
};
function sumByQuarter(saleItems) {
    return getsaleSums(saleItems, 'sum');
}
console.log('--- Question 3: sumByQuarter ---');
console.log(sumByQuarter(saleList));
/* Question 4: write a function to calculate and return a list of max sales amount of item from each quarter, expected result like:
      [
        {quater: 1, amount: xxx, transactionNums: n}, // amount will be the max value of saleItem belongs to the same quarter.
      {....}
      ] */
function maxByQuarter(saleItems) {
    return getsaleSums(saleItems, 'max');
}
console.log('--- Question 4: maxByQuarter ---');
console.log(maxByQuarter(saleList));
var Sequence = (function () {
    var instance = null;
    var index = 1;
    return function () {
        if (!instance) {
            instance = {
                next: function () {
                    return index++;
                }
            };
            Object.freeze(instance);
        }
        return instance;
    };
})();
var sequence1 = new Sequence();
console.log('--- Question 5 ---');
console.log(sequence1.next());
console.log(sequence1.next());
var sequence2 = new Sequence();
console.log(sequence2.next());
console.log(sequence2.next());
/* Question 6:
        allKeys: is a large array of number value as int type with random order like [10000,3,5,7,9, ...];
        usedKeys: is an array of all used keys like [3, 5, 7], random order;
        We want to get all the unused keys in the same order with allKeys, in this example it would be: [10000, 9, ...] */
function getUnUsedKeys(allKeys, usedKeys) {
    var usedKeysArr = [];
    if (!Array.isArray(usedKeys)) {
        usedKeysArr.push(usedKeys);
    }
    else {
        usedKeysArr.push.apply(usedKeysArr, usedKeys);
    }
    if (!usedKeysArr.length)
        return allKeys;
    var usedKeysSet = new Set(usedKeysArr);
    return Array.from(new Set(allKeys)).filter(function (key) { return !usedKeysSet.has(key); });
}
console.log('--- Question 6 ---');
console.log(getUnUsedKeys([1, 2, 66, 2, 33, 4], [1, 2]));
console.log(getUnUsedKeys([1, 2, 66, 33, 4], 2));
