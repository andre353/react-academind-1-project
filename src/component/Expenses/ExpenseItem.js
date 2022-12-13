import { useState } from 'react';
import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title)
  const clickHandler = () => {
    setTitle('Updated!')
    console.log(title); // на этой строке title по-прежнему имеет первоначальное значение, т.к. setTitle() ставит изменение в очередь, а не мнгновенно меняет
  }
  return (    
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>    
  );
}

export default ExpenseItem;