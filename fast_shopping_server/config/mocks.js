const categoriesMock = [
  {name: 'Music'},
  {name: 'Instruments'},
  {name: 'Videogames accessories'},
  {name: 'Videogames'},
  {name: 'Electronic'},
  {name: 'PC and accessories'},
  {name: 'Headphones'},
  {name: 'Sports'},
  {name: 'Books'},
  {name: 'Others'},
]

const productsMock = [
  {categories: ['Electronic', 'PC and accessories' ] ,name: 'Laptop i3', price: 100, desc: 'Specs: -GPU: RTX 2080, -CPU: Intel Core i3 4th generation, -Storage: SSD 480gb.'},
  {categories: ['Electronic', 'PC and accessories' ] ,name: 'SSD 240gb', price: 50, desc: 'Portable red SSD of 240gb.'},
  {categories: ['Electronic', 'Others' ] ,name: 'Battery Motorola E5', price: 20, desc: 'Replacement battery for Motorola E5.'},
  {categories: ['Electronic' ] ,name: 'Xiaomi Mi Band 4', price: 56.99, desc: 'New Xiaomi smartwatch.'},
  {categories: ['Electronic', 'Headphones', 'Videogames accessories' ] ,name: 'Razer Kraken X', price: 39.99, desc: 'The best headphones for gaming.'},
  {categories: ['Electronic', 'Headphones' ] ,name: 'Turtle Beach Recon 200', price: 49.95, desc: 'Limited offer. Available in white.'},
  {categories: ['Electronic', 'Headphones' ] ,name: 'Corsair HS60 PRO', price: 47.99, desc: 'Good headphones for gaming and meetings.'},
  {categories: ['Videogames', 'Electronic'] ,name: 'GTA V PS4', price: 40, desc: 'Videogame for PS4.'},
  {categories: ['Videogames', 'Electronic'] ,name: 'Battlefield 4', price: 60, desc: ''},
  {categories: ['Videogames', 'Electronic', 'Videogames accessories'] ,name: 'Controller PS5', price: 65, desc: 'New controller para PS5. Available in black and white.'},
  {categories: ['Videogames', 'Electronic', 'Videogames accessories'] ,name: 'Controller Xbox One', price: 70, desc: 'New controller para Xbox One. Available in red and blue.'},
  {categories: ['Music', 'Instruments'] ,name: 'Acoustic Guitar', price: 50, desc: 'Acoustic Guitar with amplifier included.'},
  {categories: ['Music', 'Instruments'] ,name: 'Piano', price: 62, desc: ''},
  {categories: ['Music', 'Instruments'] ,name: 'Flut', price: 36, desc: 'Wind musical instrument.'},
  {categories: ['Books'] ,name: 'The Lord of the Rings', price: 36, desc: 'First trilogy.'},
  {categories: ['Books'] ,name: 'Game of Thrones', price: 36, desc: 'Remastered version.'},
  {categories: ['Books'] ,name: "Harry Potter and the Philosopher's Stone", price: 5.6, desc: "Harry's Potter first book."},
  {categories: ['Books'] ,name: "Harry Potter and the Chamber of Secrets", price: 7.50, desc: "Harry's Potter second book."},
  {categories: ['Books'] ,name: "Harry Potter and the Prisoner of Azkaban", price: 8.99, desc: "Harry's Potter third book."},
  {categories: ['Books'] ,name: "Harry Potter and the Goblet of Fire", price: 11.20, desc: "Harry's Potter fourth book."},
  {categories: ['Books'] ,name: "Harry Potter and the Order of the Phoenix", price: 12, desc: "Harry's Potter fifth book."},
  {categories: ['Books'] ,name: "Harry Potter and the Half-Blood Prince", price: 20, desc: "Harry's Potter sixth book."},
  {categories: ['Books'] ,name: "Harry Potter and the Deathly Hallows", price: 22, desc: "Harry's Potter seventh book."},
  {categories: ['Others', 'Sports'] ,name: 'Shoes Nike Air Force 1', price: 23.40, desc: 'New. Available in black.'},
  {categories: ['Others'] ,name: 'Glasses', price: 25, desc: 'Made with plastic and metal.'},
  {categories: ['Others', 'Sports'] ,name: 'Soccer Gloves', price: 7.3, desc: 'Soccer goalkeeper gloves.'},
  {categories: ['Others', ] ,name: 'N95 Mask', price: 5, desc: 'Available in red, white and black'}
]

module.exports = {
  categoriesMock,
  productsMock
}