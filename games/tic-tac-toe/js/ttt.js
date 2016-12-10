'use strict'

const createBoard = (cells) => {
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      let cell = $('<div class="cell" id="' + j + i + '"></div>')
      //$(cell).text(String(j) + String(i))
      cells[i][j] = String(j) + String(i)
      $('#ttt').append(cell)
    }
  }
  return cells
}

const aiTakeTurn = (color, cells) => {
  let x = Math.floor((Math.random() * 3))
  let y = Math.floor((Math.random() * 3))
  let pos = String(x) + String(y)
  $('#' + pos).css('background-color', color)
}

$(document).ready(() => {
  const cells = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  const player1Color = '#00F'
  const player2Color = '#F00'
  createBoard(cells)
  $('.cell').click((event) => {
    const id = event.target.id
    $('#' + id).css('background-color', player1Color)
    aiTakeTurn(player2Color, cells)
  })
})
