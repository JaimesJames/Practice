import Image from "next/image";
import styles from "@/app/product/product.module.css";
import Link from "next/link";

export async function getData(){
    const res = await fetch("https://dummyjson.com/products?limit=12")
    return res.json()
    
    
}


export const metadata = {
    title: "Products",
  };

const Product = async ()=>{ 
    // const data = 
    //     [{id:1,title:'kuy'}]
    const data = await getData()
    console.log(data.products)
    return(
       
        <>
            <div className={styles.product}>
                {data.products.map(e=>(
                    <div key={e.id} className={styles.item}>
                        <Link href={'/product/'+e.id}>
                            <div className={styles.deteil}>
                                <h2>{e.title}</h2>
                                <h2>${e.price}</h2>
                            </div>
                            <Image src={e.thumbnail} width={250} height={250} alt={e.title}/>
                        </Link>
                    </div>
                ))}
            </div>
        </>
    )
}

export default Product