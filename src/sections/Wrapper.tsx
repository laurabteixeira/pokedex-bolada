import React from 'react'

// eslint-disable-next-line
const Wrapper = (Component: React.FC) => () => {
  return (
    <div className="content">
      <Component />
    </div>
  )
}

export default Wrapper
