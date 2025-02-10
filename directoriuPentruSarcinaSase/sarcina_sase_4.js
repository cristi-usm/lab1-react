// 7.4
const molodetCheck = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(console.log("Molodet")), 2000)
    })
}