import React from 'react';

class TableRow extends React.Component{
    render(){
        const {item,index} = this.props;
        return(
            <tr>
                <th>{index + 1} </th>
                <td><a href = {item.url} target="_blank">{item.name}</a></td>
                <th>{item.views}</th>
            </tr>
        );
    }
}


export default TableRow