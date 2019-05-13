export function createAction(
  name: string,
  payloadMapper: any = false
): string | Function {
  // @ts-ignore
  const scopedName = this.scope ? `${this.scope}/` : ''
  const type = `@@app/${scopedName}${name}`

  function actionCreator(...args: any[]) {

    const {meta, payload, restFields} = payloadMapper
      ? payloadMapper(...args)
      : {payload: args[0], meta: args[1], restFields: args[2]}
    const metaFields = meta && {meta}

    return {
      type,
      payload,
      ...metaFields,
      ...restFields,
    }
  }

  actionCreator.toString = () => `${type}`
  actionCreator.bind({displayName: type})

  return actionCreator
}

export const scopedCreator = (scopeName: string): Function => {
  return createAction.bind({scope: scopeName})
}

