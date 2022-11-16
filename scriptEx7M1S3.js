
const data = new Date()

const month = data.getMonth() + 1
const day = data.getDate()

const div = document.getElementById("div")
const img = document.createElement("img")
div.append(img)

const phrase = document.getElementById ("phrase")


let season = null

if (month == 1 || month ==2 || month == 3 && day<=21 || month ==12 && day<=22 )
{
    img.src = "assets/sumer.jpg"
    phrase.innerHTML = "It's summer!"
}

else if (month == 4 || month ==5 || month == 3 && day>=22 || month ==6 && day<=21 )
{
    img.src = "assets/autumn.jpg"
    frase.innerHTML = "It's autumn!"
}

else if (month == 7 || month ==8 || month == 6 && day>=22 || month ==9 && day<=21 )
{
    img.src = "assets/winter.jpg"
    phrase.innerHTML = "It's winter!"
}

else
{
    img.src = "assets/spring.jpg"
    phrase.innerHTML = "It's spring!"
}

