import { cloneDeep } from 'lodash'

export enum Action {
  Add = 'Add',
  Remove = 'Remove',
  Replace = 'Replace',
  Delete = 'Delete',
}

export interface QueryAction {
  key: string
  values?: string | string[]
  action?: Action
}

export const parseToArray = (val: any) => {
  if (!val) return []

  return Array.isArray(val) ? val : [val]
}

export const combineQuery = (
  currenctQuery: Record<string, any>,
  queries: QueryAction | QueryAction[]
) => {
  const newQuery = cloneDeep(currenctQuery)
  const queriesArr = parseToArray(queries)

  queriesArr.forEach(item => {
    const key = item.key
    let newValue: string[] | null = null
    const currenctQueryArr = parseToArray(newQuery[key])
    const valuesArr = parseToArray(item.values)
    const valuesArrSet = new Set(valuesArr)

    switch (item.action) {
      case Action.Remove:
        newValue = currenctQueryArr.filter(val => !valuesArrSet.has(val))
        break
      case Action.Replace:
        newValue = valuesArr
        break
      case Action.Delete:
        delete newQuery[key]
        break
      default:
        newValue = Array.from(new Set(currenctQueryArr.concat(valuesArr)))
    }

    if (newValue !== null) {
      newQuery[key] = newValue
    }
  })

  return newQuery
}
