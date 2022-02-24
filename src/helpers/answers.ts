/* extensions is an array and each item has such format:
  {firstName: 'xxx', lastName: 'xxx', ext: 'xxx', extType: 'xxx'}
  lastName, ext can be empty, extType can only has "DigitalUser", "VirtualUser","FaxUser","Dept","AO". */
type ExtType = 'DigitalUser' | 'VirtualUser' | 'FaxUser' | 'Dept' | 'AO'
interface Extension {
  firstName: string
  lastName?: string
  ext?: string
  extType: ExtType
}

const extensionsArr: Extension[] = [
  {
    firstName: 'Stephen5',
    lastName: 'Curry5',
    ext: 'dd5',
    extType: 'AO',
  },
  {
    firstName: 'Stephen6',
    lastName: '3',
    ext: 'dd6',
    extType: 'Dept',
  },
  {
    firstName: 'Stephen6',
    ext: 'dd7',
    extType: 'Dept',
  },
  {
    firstName: 'Stephen',
    lastName: 'Curry',
    ext: 'dd',
    extType: 'DigitalUser',
  },
  {
    firstName: 'Stephen3',
    lastName: 'Curry3',
    ext: 'dd3',
    extType: 'FaxUser',
  },
  {
    firstName: 'Stephen2',
    lastName: 'Curry2',
    extType: 'VirtualUser',
  },
  {
    firstName: 'Stephen4',
    lastName: 'Curry4',
    ext: 'dd4',
    extType: 'Dept',
  },
]

/* Question 1: sort extensions by "firstName" , "lastName" , "ext" ASC */

const compare = (a: string | number, b: string | number) => {
  return a === b ? 0 : a > b ? 1 : -1
}

function sortExtensionsByName(extensions: Extension[]) {
  return [...extensions].sort((a, b) => {
    let comparedResult = compare(a.firstName, b.firstName)
    if (comparedResult !== 0) {
      return comparedResult
    }
    comparedResult = compare(a.lastName ?? '', b.lastName ?? '')
    if (comparedResult !== 0) {
      return comparedResult
    }
    comparedResult = compare(a.ext ?? '', b.ext ?? '')
    return comparedResult
  })
}
console.log('--- Question 1: sortExtensionsByName ---')
console.log(sortExtensionsByName(extensionsArr))

/* Question 2: sort extensions by extType follow these orders ASC
      DigitalUser < VirtualUser < FaxUser < AO < Dept, if the "extType" not belongs to these values, the sort it in the last. */
const EXT_TYPE_INDEXS = {
  Dept: 0,
  AO: 1,
  FaxUser: 2,
  VirtualUser: 3,
  DigitalUser: 4,
}
const compareIndex = (x: ExtType, y: ExtType) => {
  const xIndex = EXT_TYPE_INDEXS[x] ?? -1
  const yIndex = EXT_TYPE_INDEXS[y] ?? -1
  return xIndex < yIndex ? 1 : xIndex === yIndex ? 0 : -1
}
function sortExtensionsByExtType(extensions: Extension[]) {
  if (!extensions.length) return extensions
  return [...extensions].sort((a, b) => compareIndex(a.extType, b.extType))
}

console.log('--- Question 2: sortExtensionsByExtType ---')

console.log(sortExtensionsByExtType(extensionsArr))

/* saleItems is an array has each item has such format:
      {
        month: n, //[1-12],
        date: n, //[1-31],
        transationId: "xxx",
        salePrice: number
      } */

interface Sale {
  month: number
  date: number
  transationId: string
  salePrice: number
}

const saleList: Sale[] = [
  {
    month: 1,
    date: 3,
    transationId: '11',
    salePrice: 9.9,
  },
  {
    month: 3,
    date: 2,
    transationId: '11',
    salePrice: 9.9,
  },
  {
    month: 5,
    date: 3,
    transationId: '11',
    salePrice: 9.9,
  },
  {
    month: 4,
    date: 2,
    transationId: '11',
    salePrice: 99.9,
  },
  {
    month: 1,
    date: 2,
    transationId: '11',
    salePrice: 19.9,
  },
  {
    month: 8,
    date: 3,
    transationId: '11',
    salePrice: 9.9,
  },
  {
    month: 11,
    date: 2,
    transationId: '11',
    salePrice: 9.9,
  },
]

/* Question 3: write a function to calculate and return a list of total sales amount (sum) from each quarter, expected result like:
      [
        {quater: 1, amount: xxx, transactionNums: n}, // amount is the sum of saleItem belongs to the same quarter.
        {....}
      ] */

interface SaleSum {
  quarter: number
  amount: number
  transactionNums: number
}

const getQuarter = (month: number) => {
  const result = month / 3
  return Math.floor(month % 3 === 0 ? result : result + 1)
}

const getsaleSums = (saleItems: Sale[], amountType: 'sum' | 'max' = 'sum') => {
  const saleSums: SaleSum[] = []
  saleItems.forEach(item => {
    const currenctQuarter = getQuarter(item.month)
    if (saleSums.findIndex(val => val.quarter === currenctQuarter) === -1) {
      saleSums.push({
        quarter: currenctQuarter,
        amount: item.salePrice,
        transactionNums: 1,
      })
    } else {
      saleSums.some(sum => {
        if (sum.quarter === currenctQuarter) {
          sum.amount =
            amountType === 'sum'
              ? Number((sum.amount + item.salePrice).toFixed(2))
              : Math.max(sum.amount, item.salePrice)
          sum.transactionNums++
          return true
        }
        return false
      })
    }
  })

  return saleSums
}

function sumByQuarter(saleItems: Sale[]) {
  return getsaleSums(saleItems, 'sum')
}
console.log('--- Question 3: sumByQuarter ---')
console.log(sumByQuarter(saleList))

/* Question 4: write a function to calculate and return a list of max sales amount of item from each quarter, expected result like:
      [
        {quater: 1, amount: xxx, transactionNums: n}, // amount will be the max value of saleItem belongs to the same quarter.
      {....}
      ] */

function maxByQuarter(saleItems: Sale[]) {
  return getsaleSums(saleItems, 'max')
}
console.log('--- Question 4: maxByQuarter ---')

console.log(maxByQuarter(saleList))

/* Question 5: please create a tool to generate Sequence
      Expected to be used like:
      var sequence1 = new Sequence();
      sequence1.next() --> return 1;
      sequence1.next() --> return 2;

      in another module:
      var sequence2 = new Sequence();
      sequence2.next() --> 3;
      sequence2.next() --> 4; */
// let commonIndex = 0

// class Sequence {
//   index: number = commonIndex

//   getCurrentIndex() {
//     return this.index
//   }

//   next() {
//     commonIndex++
//     this.index = this.getCurrentIndex() + 1
//     return this.index
//   }
// }

interface Instance {
  next: () => void
}

const Sequence = (function () {
  let instance: Instance | null = null
  let index = 1
  return function () {
    if (!instance) {
      instance = {
        next: function () {
          return index++
        },
      }
      Object.freeze(instance)
    }
    return instance
  }
})() as any as { new (): Instance }

const sequence1 = new Sequence()
console.log('--- Question 5 ---')

console.log(sequence1.next())
console.log(sequence1.next())

const sequence2 = new Sequence()
console.log(sequence2.next())
console.log(sequence2.next())

/* Question 6:
        allKeys: is a large array of number value as int type with random order like [10000,3,5,7,9, ...];
        usedKeys: is an array of all used keys like [3, 5, 7], random order;
        We want to get all the unused keys in the same order with allKeys, in this example it would be: [10000, 9, ...] */

function getUnUsedKeys(allKeys: number[], usedKeys: number[] | number) {
  const usedKeysArr: number[] = []
  if (!Array.isArray(usedKeys)) {
    usedKeysArr.push(usedKeys)
  } else {
    usedKeysArr.push(...usedKeys)
  }

  if (!usedKeysArr.length) return allKeys

  const usedKeysSet = new Set(usedKeysArr)
  return Array.from(new Set(allKeys)).filter(key => !usedKeysSet.has(key))
}
console.log('--- Question 6 ---')
console.log(getUnUsedKeys([1, 2, 66, 2, 33, 4], [1, 2]))
console.log(getUnUsedKeys([1, 2, 66, 33, 4], 2))
