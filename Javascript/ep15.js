//Array Filter
const exdata = [10,20,30,40]

const result = exdata.filter(e=>{
    return e>20
})

console.log(result)

console.log('-------------')

const data = [
    {name:'James', salary:5000000,Department:'ArtDirector'},
    {name:'Bew', salary:10000,Department:'Worker'},
    {name:'Bel', salary:50000,Department:'Marketing'}
]

const datares = data.filter(c=>c.salary>10000).filter(e=>e.Department==='ArtDirector')

console.log(datares)