import React from 'react';

class OperateButton extends React.Component {
  handleOperate = () => {
    let operate = this.props.children;
    this.props.onClick(operate);
    //console.log(num);
  }
  render() {
    const extraClass = this.props.className || '';
    return (
      <button
        className={`calc-btn ${extraClass}`}
        onClick={this.handleOperate}
      >
        {this.props.children}
      </button>
    );
  } 
}

// CalcButton.propTypes = {
//   className: PropTypes.string,
//   children: PropTypes.string.isRequired,
//   onClick: PropTypes.func,
// };

// CalcButton.defaultProps = {
//   onClick: showNotImplemented,
// };


export default OperateButton;