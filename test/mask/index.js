import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import fixture from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await fixture({
      text: input,
    })
    return res
  },
  context: Context,
})

// export default ts
