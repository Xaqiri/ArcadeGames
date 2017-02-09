'use strict'

const aiTakeTurn = (aiSign, cells) => {
  let x = Math.floor((Math.random() * 3))
  let y = Math.floor((Math.random() * 3))
  let pos = String(x) + String(y)
  $('#' + pos).text(aiSign)
	$('#' + pos).css('color', '#DDD')
}

const preGame = () => {
    $('#ttt').hide()
    $('#overlay').show()
}

const startGame = () => {
  $('#ttt').show()
  $('#overlay').hide()
}

$(document).ready(() => {
  const cells = [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
  let playerSign = 'X'
  let aiSign = 'O'
  preGame()

	$('#overlay h3').click((event) => {
		playerSign = $(event.target).text()
		aiSign = playerSign === 'X' ? 'O' : 'X'
		startGame()
  })

  $('.cell').click((event) => {
    const id = event.target.id
    $('#' + id).text(playerSign)
		$('#' + id).css('color', '#DDD')
    aiTakeTurn(aiSign, cells)
		//checkWinLoss(cells)
  })
})
