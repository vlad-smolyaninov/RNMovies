import React, {ReactNode} from 'react'

const withHooks = (mapHooksToProps: Function): Function => (WrappedComponent: any): ReactNode => {
  return (props: any) => {
    let hookProps = {}
    if (typeof mapHooksToProps === 'object') {
      hookProps = mapHooksToProps
    }
    if (typeof mapHooksToProps === 'function') {
      hookProps = mapHooksToProps(props)
    }

    return <WrappedComponent {...hookProps} {...props} />
  }
}

export default withHooks