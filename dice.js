const d4 = 4
const d6 = 6
const d8 = 8
const d10 = 10
const d12 = 12
const d20 = 20
const d50 = 50
const d100 = 100

roll = function roll(dice) {
    return Math.floor(Math.random() * dice +1)
}

console.log (roll(d6))