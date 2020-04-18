import React from 'react';
import CalcButton from '../components/CalcButton';
import OperateButton from '../components/OperateButton';
// 計算機 App
class CalcApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {state: 0,ans: 0,temp1: 0,temp2: 0,count: 0,operate: false};
    }
    handleShow = (num) => {
        let n = 0
        this.setState({count: 0})
        if (this.state.temp1 === this.state.ans) {
            n = parseInt(num)
        } else {
            n = this.state.ans * 10 + parseInt(num)
        }
        this.setState({ans: n})
        this.setState({temp2: n})
    }

    add = () => {
        let count = this.state.count + 1;
        this.setState({count: count})
        let ans = this.state.ans
        if (this.state.operate === true && count === 1) {
            ans = this.doOperate()
        }
        this.setState({state: 1,temp1: ans,operate: true})
    }
    minus = () => {
        let count = this.state.count + 1;
        this.setState({count: count})
        let ans = this.state.ans
        if (this.state.operate === true && count === 1) {
            ans = this.doOperate()
        }
        this.setState({state: 2,temp1: ans,operate: true})
    }
    muilt = () => {
        let count = this.state.count + 1;
        this.setState({count: count})
        let ans = this.state.ans
        if (this.state.operate === true && count === 1) {
            ans = this.doOperate()
        }
        this.setState({state: 3,temp1: ans,operate: true})
    }
    dev = () => {
        let count = this.state.count + 1;
        this.setState({count: count})
        let ans = this.state.ans
        if (this.state.operate === true && count === 1) {
            ans = this.doOperate()
        }
        this.setState({state: 4,temp1: ans,operate: true})
    }
    showNotImplemented() {
        console.warn('This function is not implemented yet.');
    }
    clearAll = () => {
        this.setState({state: 0,ans: 0,temp1: 'NaN', temp2: 0,operate: false});
    }

    doOperate = () => {
        let temp1 = this.state.temp1
        let temp2 = this.state.ans
        let state = this.state.state
        let ans
        switch (state) {
            case 0:
                ans = temp2;
                break;
            case 1:
                ans = temp1 + temp2;
                break;
            case 2:
                ans = temp1 - temp2;
                break;
            case 3:
                ans = temp1 * temp2;
                break;
            case 4:
                ans = temp1 / temp2;
                break;
        }
        this.setState({ans: ans, temp1: ans});
        return ans
    }

    finalAns = () => {
        this.doOperate();
        this.setState({operate: false});

    }

    handleBackward = () => {
        this.setState({ans: Math.floor(this.state.ans / 10)})
    }

    render() {

        let showAns = () => {
            return this.state.ans
        }
        return ( 
            <div className="calc-app">
                <div className="calc-container">
                  <div className="calc-output" onClick ={this.handleBackward}>
                    <div className="calc-display" >{showAns()}</div>
                  </div>
                  <div className="calc-row">
                    <CalcButton onClick={this.clearAll}>AC</CalcButton>
                    <CalcButton onClick={this.showNotImplemented}>+/-</CalcButton>
                    <CalcButton onClick={this.showNotImplemented}>%</CalcButton>
                    <OperateButton className="calc-operator" children="÷" onClick={this.dev}></OperateButton>
                  </div>
                  <div className="calc-row">
                    <CalcButton className="calc-number" children="7" onClick={this.handleShow}></CalcButton>
                    <CalcButton className="calc-number" children="8" onClick={this.handleShow}></CalcButton>
                    <CalcButton className="calc-number" children="9" onClick={this.handleShow}></CalcButton>
                    <OperateButton className="calc-operator" children="x" onClick={this.muilt}></OperateButton>
                  </div>
                  <div className="calc-row">
                    <CalcButton className="calc-number" children="4" onClick={this.handleShow}></CalcButton>
                    <CalcButton className="calc-number" children="5" onClick={this.handleShow}></CalcButton>
                    <CalcButton className="calc-number" children="6" onClick={this.handleShow}></CalcButton>
                    <OperateButton className="calc-operator" children="-" onClick={this.minus}></OperateButton>
                  </div>
                  <div className="calc-row">
                    <CalcButton className="calc-number" children="1" onClick={this.handleShow}></CalcButton>
                    <CalcButton className="calc-number" children="2" onClick={this.handleShow}></CalcButton>
                    <CalcButton className="calc-number" children="3" onClick={this.handleShow}></CalcButton>
                    <OperateButton className="calc-operator" children="+" onClick={this.add}></OperateButton>
                  </div>
                  <div className="calc-row">
                    <CalcButton className="bigger-btn" children="0" onClick={this.handleShow}></CalcButton>
                    <CalcButton className="calc-number" children="."></CalcButton>
                    <OperateButton className="calc-operator" children="=" onClick={this.finalAns}></OperateButton>
                  </div>
                </div>
              </div>
        );
    }
}


export default CalcApp;