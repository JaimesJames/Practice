import DataContext from "../data/DataContext"
import { useContext } from "react"
import './ReportComponent.css'


const ReportComponent=()=>{
    // const name = useContext(DataContext)
    const {income, expense} = useContext(DataContext)

    const formatNumber=(num)=> {
        return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
    }

    return(
        <div>
            <div align='center'>
                <h4>Total (Baht)</h4>
                <h1>฿{formatNumber((income-expense).toFixed(2))}</h1>
                <div className="report-container">
                    <div>
                        <h4>income total (Baht)</h4>
                        <p className="report plus">฿{formatNumber(income)}</p>
                    </div>
                    <div>
                        <h4>expense total (Baht)</h4>
                        <p className="report minus">฿{formatNumber(expense)}</p>
                    </div>
                </div>
            </div>
            {/* <DataContext.Consumer>
                {context=> <p>income : {context.income} expense : {context.expense}</p>}
            </DataContext.Consumer> */}
            {/* Hello React, {name} */}
            {/* <DataContext.Consumer>
          {value=><p>{value}</p>} if dont useContext require to use this tag like this

      </DataContext.Consumer> */}
        </div>
        
    )
}

export default ReportComponent
