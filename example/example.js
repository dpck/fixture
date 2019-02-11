/* yarn example/ */
import staticAnalysis from 'static-analysis'

(async () => {
  const res = await staticAnalysis('src/index.jsx')
  console.log(res)
})()