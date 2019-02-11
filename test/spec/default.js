import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import fixture from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof fixture, 'function')
  },
  async 'calls package without error'() {
    await fixture()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await fixture({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T