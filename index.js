const fs = require('fs')

const LEXER = {
  '8_BIT_REGISTER': ['ah', 'al', 'bh', 'bl', 'ch', 'cl', 'dh', 'dl'],
  '32_BIT_REGISTER': [
    'eax',
    'ebx',
    'ecx',
    'edx',
    'esi',
    'edi',
    'ebp',
    'esp',
    'eip',
  ],
  COMMAND: ['fpatan', 'fmul', 'fst', 'fld'],
  SINGLE_SYMBOL: ['+', '[', ']', '*', ','],
  DIRECTIVE: ['segment', 'ends', 'end'],
  DATA_TYPE: ['dd', 'dq'],
}

fs.readFile('test.asm', 'utf8', (err, data) => {
  const txt = data
  const rows = txt.split('\n').filter(elem => elem !== '')
  const keyWords = rows.map(row => row.trim().split(' '))
  const flattenKeyWords = keyWords.reduce((acc, val) => acc.concat(val), [])
  flattenKeyWords.map(word => {
    for (const key in LEXER) {
      if (LEXER.hasOwnProperty(key)) {
        if (LEXER[key].find(elem => elem === word))
          console.log(` i have found elem ${word} in ${key}`)
      }
    }
  })
})
