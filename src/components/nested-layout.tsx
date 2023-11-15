import React, { ReactNode } from 'react'

type NestedLayoutProp = {
  children: ReactNode;
}

function NestedLayout({children}: NestedLayoutProp) {
  return (
    <div>{children}</div>
  )
}

export default NestedLayout