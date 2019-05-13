import React from 'react'

export default mapHooksToProps => WrappedComponent => {
  return props => {
    let hookProps = {};
    if(typeof mapHooksToProps === 'object'){
      hookProps = mapHooksToProps
    }
    if(typeof mapHooksToProps === 'function'){
      hookProps = mapHooksToProps(props);
    }
    return <WrappedComponent {...hookProps} {...props} />;
  };
};