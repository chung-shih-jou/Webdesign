import React from 'react';
import './styles.css';
import x from './img/x.png';

let globalid=0;
let count=0;
let List=[];
class ItemList_Main extends React.Component{
    constructor(props){
        super(props);
            this.state={theList: List, label: false };
    }
    
    componentDidUpdate(preProps){
        if(this.props.theList !== preProps.theList){
            this.setState({theList:this.props.theList});
            List = this.props.theList;
            count = this.props.leftcount;
        }
    }
    
    handleCount = () =>{
        count++;
        this.props.count(count);
    }
    
    inputstring = (e) =>{
        if (e.nativeEvent.keyCode=== 13 && e.target.value !==""){
            
            let itemID={content: e.target.value, id: globalid, label: this.state.label, state: 0, style:["","",""], count:count};
            List.push(itemID);
            e.target.value="";
            globalid++;
            this.setState({theList:List});
            this.handleCount();
            this.props.List(List);
        }
    
    }
    
    
    handleLabel = (id) =>{
        //console.log(id, "ItemList_id")
        let a=this.state.theList;
        if (this.state.theList[id].label==='checked'){
            a[id].label=false;
            a[id].style[1]="" //textDecoration:
            a[id].style[2]=1 //opacity
            a[id].state=1 // Active
        }
        else{
            a[id].label="checked"
            a[id].style[1]="line-through" //textDecoration:
            a[id].style[2]=0.5 //opacity
            a[id].state=2 // Complete
        }
        this.setState({theList:a});
        this.props.label( a[id].label);
        this.props.label( a[id].state);
    }
    
    directClear = (id) =>{
        let a=this.state.theList;
        a[id].state=2;
        let list=[];
        let lc = 0;
        list = a.map(e => {if(e.state===2){count--;}else{return e;}});
        list = list.filter(e =>e);
        list = list.map(e => {e.count=lc;lc++;return e;});
        this.setState({theList: list});
        this.props.List(list);
        this.props.count(count);
    }
    
    render(){
        return (
            <section className="todo-app__main">
                <Input inputstring={this.inputstring}/>
                <ItemList list={this.state.theList} Click={this.handleLabel} clearClick={this.directClear}/>
            </section>
        )
    
    }
}


class ItemList extends React.Component{
    
    
    handleLabel = (id) =>{
        this.props.Click(id);
    }
    
    directClear =(id) =>{
        this.props.clearClick(id);
    }
    
    render(){
        let ItemList = this.props.list.map((e,id) => <Item content={e.content} key={e.id} id={e.id} count={e.count} checked ={e.label} Click={this.handleLabel} style={e.style} clearClick={this.directClear}/>)
        
        return(
            <div  className="todo-app__list" >
                {ItemList}
            </div>
        )
    }
}

class Item extends React.Component{

    handleLabel = (id) =>{
        this.props.Click(id);
    }
    
    directClear =(id) =>{
        this.props.clearClick(id);
    }
    
    render(){
        let newid = "input"+(globalid-1);
            return(
                <div className="todo-app__item" style={{display:this.props.style[0], textDecoration: this.props.style[1], opacity: this.props.style[2]}}>
                    <div className="todo-app__checkbox"  onClick={()=> this.handleLabel(this.props.count)} >
                        <input readOnly type="checkbox" className="todo-item-input" id={newid} checked={this.props.checked}></input>
                        <label></label>
                    </div>
                    <h1 className="todo-app__item-detail">{this.props.content}</h1>
                    <img src={x} className="todo-app__item-x" alt="" onClick={()=>{this.directClear(this.props.count)}}></img>
                </div>
            )
    }
}

class Input extends React.Component {
    render(){
        return(
            <input className="todo-app__input" type="text" placeholder="What needs to be done?" onKeyPress={this.props.inputstring}/>
        )
    }
}

export default ItemList_Main;