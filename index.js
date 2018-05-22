const fs = require('fs')
const tachyonsGenerator = require('tachyons-generator')
const config = require('./config.json')

const generate = async () => {
  const tachy = tachyonsGenerator(config)
  const out = await tachy.generate()

  for (const [key, value] of Object.entries(out.src)) {
    fs.writeFileSync(`src/${key}.css`, value)
  }

  fs.writeFileSync('index.html', out.docs)
  fs.writeFileSync('tachyons.css', out.css)
  fs.writeFileSync('tachyons.min.css', out.min)
}

generate()
