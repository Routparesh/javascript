const games = {
    'game1':'NFS',
    'game2': 'Spiderman',
    'js':'JavaScript',
}

//for in loops in object

for (const key in games) {
    console.log(key, games[key])
}


const arr = [1,2,3,4,5,6,7,8,9]
for (const key in arr) {
    console.log(key, arr[key])
}
