import React from 'react';
import TableRow from './TableRow';


class Table extends React.Component{
    render(){
       const{ items } = this.props;
        return(
            <table>
                <thead>
                <tr>
                    <th>Номер</th>
                    <th>Назва</th>
                    <th>Перегляди</th>
                </tr>
                </thead>
                <tbody>{this.items.map((item,index)=>(
                    <TableRow  index = {index}
                               item = {item}
                               key = {item.name}
                    />
                 ))
                }</tbody>
            </table>
        );
    }
}

export default Table