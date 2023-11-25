export async function getData({params}){
    const id = params.id
    const res = await fetch("https://dummyjson.com/products/"+id)
    return res.json()
    
    
}


const ProductDeteil= async ({params})=>{
    const data = await getData({params})
    
    return(
        <>
            <h1>Product : #{params.id}</h1>
            {data.title}
        </>
    )
}
export default ProductDeteil