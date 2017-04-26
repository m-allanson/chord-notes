import React from 'react'

import history from '../../utils/history'

const Link = props => (
  <a
    href={props.pathname}
    onClick={e => {
      e.preventDefault()
      history.push(props.pathname)
    }}
    className={props.className}
  >
    {props.children}
  </a>
)

export default Link
