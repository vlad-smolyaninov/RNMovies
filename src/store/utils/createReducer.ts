export const DefaultCase = Symbol('DefaultCase')

export const createReducer = (
  declaration: any,
  initialValue: object
) => {
  return function reducerFn(state: object = initialValue, action: {payload: any, type: string}) {
    const reducer = declaration[action.type] || declaration[DefaultCase]

    return reducer ? reducer(state, action.payload, action) : state
  }
}
