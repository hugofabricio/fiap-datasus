const { readdirSync, writeFileSync } = require('fs')
const path = require('path')

const { isSVG, removeExtension, toPascalCase } = require('./utils')

const packs = [
  {
    filename: 'index',
    dir: path.resolve('src', 'svg', 'vectors')
  },
  {
    filename: 'index',
    dir: path.resolve('src', 'svg', 'illustrations')
  }
]

const mapFiles = (filename, files, dir) => {
  const mapContent = [
    '/* eslint-disable prettier/prettier */',
    files
      .map((file) => `import ${toPascalCase(file)} from './${file}.svg'`)
      .join('\n'),
    '',
    'export default {',
    `${files.map((file) => `  '${file}': ${toPascalCase(file)},`).join('\n')}`,
    '}'
  ].join('\n')

  writeFileSync(`${dir}/${filename}.js`, mapContent)

  console.log(`${filename} created! ✅`)
}

packs.map((pack) => {
  const files = readdirSync(pack.dir).filter(isSVG).map(removeExtension)

  try {
    mapFiles(pack.filename, files, pack.dir)
  } catch (e) {
    console.error(e)
  }
})
