import React from 'react';
import './styles.css';



class Footer_Main extends React.Component{
    constructor(props){
        super(props);
        this.state={state: 0};
    }
    
    handleState =(state) =>{
        let a=0;
        if (state ==="All"){
            this.setState({state: 0});
            a=0;
        }
        else if (state==="Active"){
            this.setState({state: 1});
            a=1;
        }
        else if (state==="Complete"){
            this.setState({state: 2});
            a=2;
        }
        this.props.state(a);
    }
    
    clickClear = () =>{
        this.props.clear();
    }
    
    render(){
        let buttonName=['All','Active','Complete'];
        let clear=['Clear Complete'];
        return(
            <Input buttonName={buttonName} state={this.handleState} count={this.props.count} buttonclear={clear} clear={this.clickClear} />
            
        )
    }
}

class Input extends React.Component{
    handleState =(state) =>{
        this.props.state(state);
    }
    
    clickClear = () =>{
        this.props.clear();
    }
    
    render(){
        let Name = this.props.buttonName.map((e,id) => <Button key={id} content={e} state={this.handleState}/>);
        let buttonclear = this.props.buttonclear.map((e,id) => <Clear key={id} content={e} clear={this.clickClear}/>);
        return(
            <div>
                <footer className="todo-app__footer">
                        <Count count={this.props.count}/>
                    <ul className="todo-app__view-buttons" >
                        {Name}
                    </ul>
                        {buttonclear}
                </footer>
            </div>
      )
    }
}

class Button extends React.Component{

    handleState =(state) =>{
        this.props.state(state);
    }
    
    render(){
        return(
            <div>
                <button onClick={()=>this.handleState(this.props.content)}>{this.props.content}</button>
            </div>
        )
    }
}

class Clear extends React.Component{
    handleState =(state) =>{
        this.props.state(state);
    }
    
    render(){
        return(
            <button className="todo-app__clean" onClick={()=>this.props.clear()}>Clear Complete </button>
        )
    }
}

class Count extends React.Component{

    render(){
        return(
            <div>
                <div className="todo-app__total"> {this.props.count} left </div>
            </div>
        )
    }
}


export default Footer_Main;
