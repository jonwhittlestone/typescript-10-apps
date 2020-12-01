#!/usr/bin/env node

console.log('--------------------------------------------------')
console.log('                          01 HELLO WORLD')
console.log('--------------------------------------------------')
console.log('')


function add(a: number, b: number) {
  return a+b;
}

const stdin = process.openStdin()

process.stdout.write('What is your name? ')

stdin.addListener('data', text => {
  const name = text.toString().trim()
  const greeting = `Nice to meet you ${name}, did you know that 2 + 2 is ${add(2,2)} ?`
  console.log(greeting)

  stdin.pause() // stop reading
})
