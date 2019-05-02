import React from 'react';

export class ListCatogory extends React.Component {
    render() {
        console.log(this.props);
          
        
        return ( 
            
                <tr>
                    <td>{this.props.keys[0]}</td>
                    <td>{this.props.keys[1]} </td>
                </tr> 
            
        )
    }
}
export class Items extends React.Component {
    render() {
        console.log(this.props.values);
        //const {values:{item, dueDate}} = this.props;
        
        return ( 
            <tr>
                <td>{this.props.values[0]}</td>
                <td>{this.props.values[1]} </td>
            </tr>
        );
    }
}
