import React from 'react'

import history from '../../utils/history'

const Link = ({ pathname, children }) => (
  <a
    href={pathname}
    onClick={e => {
      e.preventDefault()
      history.push(pathname)
    }}
  >
    {children}
  </a>
)

export default Link
