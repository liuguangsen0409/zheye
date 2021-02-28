let arr = [{a: 1}, {a: 2}, {b: 3}]

let tempArr = arr.reduce((prev, cur) => {
  const [key, value] = Object.entries(cur)[0]
  prev.push([key, value])
  return prev
}, [])

console.log(Object.fromEntries(tempArr))