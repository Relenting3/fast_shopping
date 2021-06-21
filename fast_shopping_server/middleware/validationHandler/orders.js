const { regexEml } = require("../../utils/regex")

async function validateOrder(body, productsList){
  if(!body) return 'Invalid order.'
  const {cli, products, qty} = body;
  if(typeof cli !== 'object') return 'Invalid client.'
  const {name, id, addr, phn, eml} = cli
  //client
  if(typeof name !== 'string' || name.length < 2) return 'Invalid name.'
  if(typeof id !== 'string' || id.length < 1 ) return 'Invalid id.'
  if(typeof addr !== 'string' || addr.length < 4) return 'Invalid address.'
  if(typeof phn !== 'string' || phn.length < 1 ) return 'Invalid phone.'
  if(typeof eml !== 'string' || !eml.match(regexEml)) return 'Invalid email.'
  //products and quantities
  if(products.length !== qty.length) return 'Quantities and products must have equal length.'
  //products
  if(!Array.isArray(products)) return 'Invalid products'
  let invalidProducts = 0
  products.map((values,index)=>{
    let product = productsList.find(product => product._id === values)
    if(!product) return invalidProducts+=1
  })
  if(invalidProducts > 0) return 'Invalid products'
  //quantities
  if(!Array.isArray(qty)) return 'Invalid Quantities'
  for(const values of qty) if(typeof values !== 'number' || values <= 0) return 'Invalid quantities'
}

module.exports = { validateOrder }