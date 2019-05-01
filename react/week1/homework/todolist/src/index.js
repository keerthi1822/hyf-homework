import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
/* import App from './App';//no need for now
import * as serviceWorker from './serviceWorker'; */

class List extends React.Component {
    render() {
        const {name} = this.props;
        return ( 
            <li> {name} </li>
        )
    }
}

class App extends React.Component {
    constructor(props){
        super(props);
        const toAddList = ["newitem1","newitem2","newitem3"];
        let i=0;
        this.state = {
          items : ["item1","item2","item3"]
        }
        const addItemInterval = setInterval(() => {
            console.log("done");
            const newItems = this.state.items.concat(toAddList[i]);
            this.setState({items:newItems});
            i++;
            if(i===toAddList.length)
            clearInterval(addItemInterval);
        }, 4000);
    }
    render() {
        //const items = ["item1","item2","item3","item4"];
        const {items} = this.state;
        return ( 
            <div >
            <h1 className="heading"> To do List </h1>  
            <ul>{items.length > 0 ?
                items.map((item)=>(<List name={item} />)):
                <p>no items</p>
            }</ul>
            </div>
        )
    }
}




ReactDOM.render( < App /> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();