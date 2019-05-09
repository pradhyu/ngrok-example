// https://spin.atomicobject.com/2018/10/08/mock-api-json-server/

//json-server -p 5000 --watch product.json

http://5720f6ab.ngrok.io/products/?q=panasonic

products.json should be

{"products": [{ product json here}, {product json here}]}

// full test query 
http://5720f6ab.ngrok.io/products/?q=panasonic
// fetch item REST way 
http://5720f6ab.ngrok.io/products/10632 ; 10632 is an id
// item search with like operator 
http://5720f6ab.ngrok.io/products/?name_like=samsung


