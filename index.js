'use strict'

const colors = {
  /* eslint-disable key-spacing */
  black:  [30, 40, 90, 100],
  red:    [31, 41, 91, 101],
  green:  [32, 42, 92, 102],
  yellow: [33, 43, 93, 103],
  blue:   [34, 44, 94, 104],
  magenta:[35, 45, 95, 105],
  cyan:   [36, 46, 96, 106],
  white:  [37, 47, 97, 107]
  /* eslint-enable key-spacing */
}

/* eslint-disable no-multi-spaces */
const _start = (color) =>                 `\x1b[${colors[color][0]}m`
const _startBackground = (color) =>       `\x1b[${colors[color][1]}m`
const _startBright = (color) =>           `\x1b[${colors[color][2]}m`
const _startBrightBackground = (color) => `\x1b[${colors[color][3]}m`
const _stop = () =>                       '\x1b[0m'
/* eslint-enable no-multi-spaces */

const start = {
  black: _start('black'),
  red: _start('red'),
  green: _start('green'),
  yellow: _start('yellow'),
  blue: _start('blue'),
  magenta: _start('magenta'),
  cyan: _start('cyan'),
  white: _start('white'),
  background: {
    black: _startBackground('black'),
    red: _startBackground('red'),
    green: _startBackground('green'),
    yellow: _startBackground('yellow'),
    blue: _startBackground('blue'),
    magenta: _startBackground('magenta'),
    cyan: _startBackground('cyan'),
    white: _startBackground('white')
  },
  bright: {
    black: _startBright('black'),
    red: _startBright('red'),
    green: _startBright('green'),
    yellow: _startBright('yellow'),
    blue: _startBright('blue'),
    magenta: _startBright('magenta'),
    cyan: _startBright('cyan'),
    white: _startBright('white'),
    background: {
      black: _startBrightBackground('black'),
      red: _startBrightBackground('red'),
      green: _startBrightBackground('green'),
      yellow: _startBrightBackground('yellow'),
      blue: _startBrightBackground('blue'),
      magenta: _startBrightBackground('magenta'),
      cyan: _startBrightBackground('cyan'),
      white: _startBrightBackground('white')
    }
  }
}
const stop = _stop()

module.exports = {
  start,
  stop
}
