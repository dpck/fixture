/* yarn example/ */
import fixture from '../src'

(async () => {
  const res = await fixture({
    text: 'example',
  })
  console.log(res)
})()