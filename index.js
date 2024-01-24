let homeScoreBtnOne = document.getElementById('home-score-btn-one')
let homeScoreBtnTwo = document.getElementById('home-score-btn-two')
let homeScoreBtnThree = document.getElementById('home-score-btn-three')

let guestScoreBtnOne = document.getElementById('guest-score-btn-one')
let guestScoreBtnTwo = document.getElementById('guest-score-btn-two')
let guestScoreBtnThree = document.getElementById('guest-score-btn-three')

let homeScoreEl = document.getElementById('home-score')
let guestScoreEl = document.getElementById('guest-score')
let homeScore = 0
let guestScore = 0


function increaseHomeScoreOne() {
    homeScore += 1
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreTwo() {
    homeScore += 2
    homeScoreEl.textContent = homeScore
}

function increaseHomeScoreThree() {
    homeScore += 3
    homeScoreEl.textContent = homeScore
}

function increaseGuestScoreOne() {
    guestScore += 1
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreTwo() {
    guestScore += 2
    guestScoreEl.textContent = guestScore
}

function increaseGuestScoreThree() {
    guestScore += 3
    guestScoreEl.textContent = guestScore
}

function resetScore() {
    homeScore = 0
    guestScore = 0
    guestScoreEl.textContent = guestScore
    homeScoreEl.textContent = homeScore
}