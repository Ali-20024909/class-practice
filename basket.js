function totalCostBasket(basket, price) {
    let totalCost = 0;
    for (let product in basket) {
        if (price.hasOwnProperty(product)) {
            totalCost = totalCost + (basket[product] * price[product]);
        }
    }
    return totalCost;
}

const basket = {
    "Pineapple": 5,
    "loki": 3,
    "tomato": 2
};

const price = {
    "Pineapple": 1.5,
    "loki": 0.70,
    "tomato": 0.65
};

const result = totalCostBasket(basket, price);
alert(result);