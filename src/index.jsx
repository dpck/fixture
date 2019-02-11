import { render } from 'preact'
import { Test } from '@idio/preact-fixture'
import Component from './Component'

const Fixture = () => {
  return (<Component>
    <Test />
  </Component>)
}

export default Fixture

export { Component3 } from './Test2'