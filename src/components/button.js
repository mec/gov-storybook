import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Input = styled.input`
  border: 1px solid black;
  background: none;
`;

const Button = ({ text }) => <Input type="submit" value={text}/>;

Button.propTypes = {
  text: PropTypes.string
};

Button.defaultProps = {
  text: 'Submit'
};

export default Button;
