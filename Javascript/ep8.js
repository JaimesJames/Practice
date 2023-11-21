//Default Parameter
getDataCustomer=(customerName, CustomerAddress='Bangkok')=>{
        const address = `ชื่อลูกค้า : ${customerName}
        ที่อยู่ : ${CustomerAddress}`
        return address
}

console.log(getDataCustomer('James','Chonburi'))
console.log(getDataCustomer('James'))