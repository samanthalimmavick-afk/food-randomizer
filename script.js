const foods = ["Japanese Wagyu A5", "Pasta", "Seafood Buffet", "Korean BBQ", "Japanese Restaurant"]

const drinks = ["Coke", "100 Plus", "Green Tea", "Iced Lemonade", "Cold Water"]


const foodImages = [
    "https://cdn-icons-png.flaticon.com/512/1690/1690215.png",
    "https://cdn-icons-png.flaticon.com/512/13328/13328471.png",
    "https://cdn-icons-png.flaticon.com/512/2734/2734140.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9kIiF-AaJLo0tCo90tAKopn008HcffgfMww&s",
    "https://cdn-icons-png.flaticon.com/512/3978/3978829.png"
]

const drinkImages = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSi0kFXuWh--0FpGEfKnkm8trcu1lWVL8xCxw&s",
    "https://thegastroinc.com/wp-content/uploads/2019/08/100plus.jpeg",
    "https://cdn-icons-png.flaticon.com/512/5303/5303997.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT91xXEkfToaPZWrgurzrkKsDjdzVmKmMmHnQ&s",
    "https://cdn-icons-png.flaticon.com/512/11415/11415047.png"
]

function randFood(){
    const randomInteger = Math.floor(Math.random() * 5)

    const randomFood = foods[randomInteger]
    const randomImg = foodImages[randomInteger]

    const foodName = document.getElementById("foodName")
    const foodImg = document.getElementById("foodImg")

    console.log(`[FOOD] Name: ${randomFood}'
        \nImage: ${randomImg}
        `)

    foodName.textContent = randomFood
    foodImg.src = randomImg
}

function randDrink(){
    const randomInteger = Math.floor(Math.random() * 5)
    
    const randomDrink = drinks[randomInteger]
    const randomImg = drinkImages[randomInteger]

    const drinkName = document.getElementById("drinkName")
    const drinkImg = document.getElementById("drinkImg")

    console.log(`[DRINK] Name: '${randomDrink}'
        \nImage: ${randomImg}
        `)

    drinkName.textContent = randomDrink
    drinkImg.src = randomImg
}