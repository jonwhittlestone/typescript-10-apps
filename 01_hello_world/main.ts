#!/usr/bin/env node

console.log('--------------------------------------------------')
console.log('                          01 HELLO WORLD')
console.log('--------------------------------------------------')
console.log('')


// const add = (a: number, b: number) => {

// }

const stdin = process.openStdin()

process.stdout.write('What is your name? ')

stdin.addListener('data', text => {
  const name = text.toString().trim()
  const greeting = `Nice to meet you ${name}`
  console.log(greeting)

  stdin.pause() // stop reading
})
