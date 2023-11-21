import './FormComponent.css'
import  { useState, useEffect } from 'react'

import {v4 as uuidv4} from 'uuid'; 

const FormComponent=(props)=>{
    console.log('rerender form component')
    const [title, setTitle] = useState('') //Update Value [para, func]
    const [amount, setAmount] = useState('')
    const [formValid, setFormValid] = useState(false)
    const [btnActive, setBtn] = useState('btn-disable')

    const inputTitle=(event)=>{
        console.log(event.target.value)
        setTitle(event.target.value)
    }

    const inputAmount=(event)=>{
        setAmount(event.target.value)
    }

    const saveItem=(event)=>{
        event.preventDefault()
        const itemData = {
            id:uuidv4(),
            title:title,
            amount:Number(amount)
        }
        setTitle('') //clear to default
        setAmount(0)

        props.onAddItem(itemData)
    }

    useEffect(()=>{ //detect Changing when rerender
        const checkData = title.trim().length>0 && amount !== 0 && amount !== ''
        setFormValid(checkData)

        const activeBtn = !checkData ? 'btn-disable':'btn-active'
        setBtn(activeBtn)
    },[title, amount]) //focus amount changing

    return(
        <div>
            <form onSubmit={saveItem}>
                <div className='form-control'>
                    <label>List Name</label>
                    <input type='text' placeholder='add List Name' onChange={inputTitle} value={title}></input>
                    <label>Price</label>
                    <input type='number' placeholder='add Price (+ evenue, - expense)' onChange={inputAmount} value={amount}></input>
                </div>
                <div>
                    <button className={btnActive} type='submit' disabled={!formValid}>ADD</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent