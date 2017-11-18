const arr = ['a', 'b', 'c', 'd']

for (let i = 0; i < arr.length; i++) {
    let current = arr[i]
    setTimeout(function () { alert(current) }, i * 1000)

    console.log(arr[i] + "teste")
}
