import { h } from 'preact'
import { render } from 'preact'
import { Test } from '@idio/preact-fixture'
import Component from './Component'

const Fixture = () => {
  return (       h(Component,{},
    h(Test),
  ))
}

export default Fixture

export { Component3 } from './Test2'