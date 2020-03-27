import React from 'react';
import './styles.css';
import ItemList_Main from"./ItemList_Main";
import Footer_Main from "./../components/Footer_Main"

let list=[];

class TodoList extends React.Component {
    constructor(props) {
            super(props);
            this.state = { state: 0, leftcount: 0, label:false, theList:list}
        }
        
    handleCount = (count) =>{
        this.setState({leftcount: count});
    }
    
    
    handleLabel = (label) =>{
        this.setState({label: label});
    }
    
    handleState = (state) =>{
        let list=[];
        let thisList = this.state.theList;
        if (state===0){
            list = thisList.map(e => {if(e.state<3){e.style[0]="";}else{e.style[0]="none";}  return e;});//All
        }
        else if (state===1){
            list = thisList.map(e => {if(e.state<2){e.style[0]="";}else{e.style[0]="none";}  return e;});//Active
        }
        else if (state===2){
            list = thisList.map(e => {if(e.state===2){e.style[0]="";}else{e.style[0]="none";}  return e;});//Complete
        }
        this.setState({theList: list});
        this.setState({state: state});
    }
    
    handleList = (list) =>{
        this.setState({theList: list});
    }
    
    clickClear = () =>{
        let count=0;
        let lc = this.state.leftcount;
        list = this.state.theList.map(e => {if(e.state===2){lc--;}else{return e;}});
        list = list.filter(e =>e);
        list = list.map(e => {e.count=count;count++;return e;});
        this.setState({leftcount:lc});
        this.setState({theList: list});
        this.handleList(list);
    }
    
    render(){
        return(
        <div>
            <div className="todo-app__root"></div>
                <header className="todo-app__header todo-app__title"> todos </header>
                 <ItemList_Main count={this.handleCount} label={this.handleLabel} state={this.state.state} changestate={this.handleState} clear={this.state.theList} List={this.handleList}  theList={this.state.theList} leftcount={this.state.leftcount}/>
                 <Footer_Main count={this.state.leftcount} state={this.handleState} clear={this.clickClear} />
        </div>
  );
}}

export default TodoList;
