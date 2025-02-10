// 6.2
const cronometru = () => {
    timer = 1
    intervalId = setInterval(() => {
        console.log(timer)
        timer++
        if(timer > 5) {
            clearInterval(intervalId)
        }
    }, 1000)
}

cronometru()
