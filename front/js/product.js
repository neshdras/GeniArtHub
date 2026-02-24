const url = new URL(document.location)
const searchid = url.searchParams
const idProduct = searchid.get('id')
console.log(idProduct)
async function chargeProduct() {
    const req = await fetch('http://localhost:3000/api/products/')
    const data = await req.json()
    console.log(data)
}
const product = document.querySelector('.detailoeuvre')
async function detail() {
    const gallery = await chargeProduct()
}
detail()