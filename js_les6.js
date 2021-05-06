//Задание1

var storeState = {
    availableProducs: [
        {name: 'Вино', price: 500},
        {name: 'Молоко', price: 100},
        {name: 'Шоколад', price: 150},
        {name: 'Сахар', price: 90},
        {name: 'Хлеб', price: 40}
    ],
    basketStore: []

}
function drawStore() {
    var divAllProduct = document.getElementById('available')

    storeState.availableProducs.forEach(product => {
        var divProduct = document.createElement('div')
        var nameP = document.createElement('p')
        nameP.innerHTML = product.name
        divProduct.appendChild(nameP)
        var priceP = document.createElement('p')
        priceP.innerHTML = product.price
        divProduct.appendChild(priceP)

        var buyButton = document.createElement('button')
        buyButton.innerHTML = 'Купить'
        buyButton.onclick = () => {
            
            storeState.basketStore.push(product)
            drawBasket()

        }

    divProduct.append(buyButton)
    divAllProduct.append(divProduct)


    
})
}
drawStore()

function drawBasket() {
    var basketProduct = document.getElementById('basket')
    storeState.basketStore.forEach(item => {
        var itemP = document.createElement('p')
        itemP.innerHTML = `${item.name} - ${item.price}`

        basketProduct.append(itemP)

    })
    


}
drawBasket()




