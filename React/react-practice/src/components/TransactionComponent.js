import Item from "./Item";
import "./transaction.css";


const TransactionComponent = (props) => {
  const { items } = props;

  return (
    <div>
      <ul className="item-list">
        {items.map((e) => {
          return <Item {...e} key={e.id} />;
          // return <Item {...e} key = {uuidv4()}/>;
          //    return <Item title={e.title} amount={e.amount}/>
        })}

        {/* <Item title='Travel' amount='20000'/>
          <Item title='Salary' amount='200000'/>
          <Item title='Food' amount='50000'/>
          <Item title='Internet' amount='1000'/> */}
      </ul>
    </div>
  );
};
export default TransactionComponent;
