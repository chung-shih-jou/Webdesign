import React from 'react';
import PropTypes from 'prop-types';


// function showNotImplemented() {
//   let num = this.props.children;
//   // this.props.onClick(num);
//   console.log(num);
// }

// const CalcButton = (props) => {
//   const { className, children, onClick } = props;
//   const extraClass = className || '';
//   return (
//     <button
//       className={`calc-btn ${extraClass}`}
//       onClick={showNotImplemented()}
//     >
//       {children}
//     </button>
//   );
// };

class CalcButton extends React.Component {
  handleShow = () => {
    let num = this.props.children;
    this.props.onClick(num);
    //console.log(num);
  }
  render() {
    const extraClass = this.props.className || '';
    return (
      <button
        className={`calc-btn ${extraClass}`}
        onClick={this.handleShow}
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

export default CalcButton;