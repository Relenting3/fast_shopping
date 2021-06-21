/**
 * 
 * @param {string} hex color in hex
 * @param {string} opacity could be from 0 to 1
 * @returns color in rgba
 */
function hexToRgba(hex, opacity='1'){
	let c;
	if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
			c= hex.substring(1).split('');
			if(c.length === 3){
					c= [c[0], c[0], c[1], c[1], c[2], c[2]];
			}
			c= '0x'+c.join('');
			return `rgba(${[(c>>16)&255, (c>>8)&255, c&255].join(',')},${opacity})`;
	}
	return 'rgba(0,0,0,1)'
}

/**
 * 
 * @param {array} categories list of categories
 * @returns an object with _id as key and the name of the category as a value
 */
function getCategories(categories){
	if(!categories) return null
	let obj = {}
	for(const values of categories ){
		obj[values._id] = values.name
	}
	return obj
}

/**
 * 
 * @param {number} p$ price
 * @returns price.toLocaleString()
 */

function getPrice(p$){
	if(!p$) return `No definido`
	return `$${p$.toLocaleString(undefined, { maximumFractionDigits: 2})}`
}

/**
 * 
 * @param {array} array
 * @param {string} separator Separator of each element
 * @returns String with each element.
 */

function convertArrayToString(array, separator){
	let string = array.join(separator)
	return string
}

/**
 * 
 * @param {array} productCategories product categories
 * @param {array} categories all categories
 * @returns array with the name of each category of the product
 */
function getProductCategories(productCategories, categories){
	let ctg_names = []
	for(const values of productCategories) ctg_names.push(categories[values])
	return ctg_names
}

/**
 * 
 * @param {object} obj Object that will be saved in localStorage.
 */
function persistData(obj){
	return window.localStorage.setItem('data',JSON.stringify(obj))
}

/**
 * 
 * @param {array} productCategories product categories
 * @param {array} categories all categories
 * @returns String with each category of the product.
 */
function getCategory(productCategories, categories){
	let categories_name = getProductCategories(productCategories, categories)
  return convertArrayToString(categories_name, ' - ') 
}

export {
  hexToRgba,
	getCategories,
	getPrice,
	convertArrayToString,
	getProductCategories,
	persistData,
	getCategory
}