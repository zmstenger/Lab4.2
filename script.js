const name = prompt('Please enter your name:')

switch (name.toLowerCase()) {
  case 'sam':
    console.log(`Hello ${name}, it's great to see you!`)
    break
  case 'joe':
    console.log(`Hello ${name}, it's great to see you!`)
    break
  case 'lucas':
    console.log(`Hello ${name}, it's great to see you!`)
    break
  default:
    console.log(`Sorry, I don't know you, ${name}.`)
}
