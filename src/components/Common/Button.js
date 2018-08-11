import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Button extends Component {
    render(){
        const { title } = this.props;
        const { onclick } = this.props;
        const { data } = this.props;
        const { className } = this.props;

        return(
            <button onClick={ () => onclick(data) } class={ className }>{ title }</button>
        )
    }

}

Button.propTypes = {
    title: PropTypes.string,
    onclick: PropTypes.func,
    data: PropTypes.string,
    className: PropTypes.string
  };

export default Button;