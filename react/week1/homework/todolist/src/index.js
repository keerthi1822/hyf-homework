import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {ListCatogory} from './Components/ListCatogory' ;
import {Items} from './Components/ListCatogory' ;
/* import App from './App';//no need for now
import * as serviceWorker from './serviceWorker'; */


class App extends React.Component {

    render() {
        const items = [{
            item : " Get out of bed",
            dueDate : "Wed Sep 13 2017",
            status :"done"
        },
        {
            item : "Brush teeth",
            dueDate : "Thu Sep 14 2017",
            status:"done"
        },
        {
            item : "Eat breakfast",
            dueDate : " Fri Sep 15 2017",
            status:"progress"
        }
    ];
        let keys = Object.keys(items[0]);
        
        //console.log(keys);
        return ( 
            <div >
            <h1 className="heading"> To do List </h1> 
            <table>
                <tbody>
            <ListCatogory keys = {keys} />
            { items.map((item)=><Items values = {Object.values(item)} />)} 
            </tbody>
            </table>
            </div>
        )
    }
}




ReactDOM.render( < App /> , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();


      