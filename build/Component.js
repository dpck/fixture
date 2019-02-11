import { h } from 'preact'
import { Component2 } from './Test'
const Component = ({ test }) => (
          h(Component2,{},
    h('div',{},test),
  ))

export default Component