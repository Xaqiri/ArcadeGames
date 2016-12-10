'use strict'

const games = ['Tic-Tac-Toe']

const popGames = () => {
  for (let i = 0; i < games.length; i++) {
    let g = $('<div id="game">' + games[i] + '</div>')
    $('#games').append(g)
    $(g).wrap(() => {
      let link = $('<a/>')
      link.attr('href', '../games/tic-tac-toe/ttt.html')
      return link
    })
  }
}

$(document).ready(() => {
  popGames()
})
