/**
 * 
 * @param {array} products Products of the order
 * @param {array} productsList List of all the products. Contains _id and price only.
 * @param {array} qty Quantities of each product
 * @returns Price of the order
 */
function getOrderPrice(products, productsList, qty){
  let price = 0
  products.map((values,index)=>{
    let product = productsList.find(product => product._id === values)
    price += (product.price*qty[index])
  })
  return price
}

module.exports = {
  getOrderPrice
}