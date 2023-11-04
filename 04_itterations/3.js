//for of

const arr = [1,2,3,4,5,6,7,8,9,10]

// for (const num of arr) {
//     console.log(num)
// }

//maps

const maps = new Map()
maps.set('name','paresh')
maps.set('size',54)
// console.log(maps)

// for (const [key, value] of maps) {
//     console.log(key,':=>',value)
// }

for (const key in maps) {
    console.log(key,maps[key])
}
