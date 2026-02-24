async function chargeProduct() {
    try {
        const req = await fetch('http://localhost:3000/api/products/')
        const data = await req.json()
        console.log(data)
        return data
    } catch (e) {
        console.error("Erreur lors du chargement des ")
    }
}
const list = document.querySelector('.products')
async function gallery() {
    const product =  await chargeProduct()
    product.forEach(el => {
        const template = `  <article>
                               <img src="${el.image}" alt="${el.titre}">
                               <a href="product.html?=${el._id}">Buy ${el.shorttitle}</a>
                            </article>`
        list.insertAdjacentHTML('beforeend', template)
    });
}
gallery()