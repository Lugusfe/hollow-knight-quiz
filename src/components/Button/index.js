/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable keyword-spacing */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonBase = styled.button`
    font-family: 'Ubuntu', sans-serif;
    padding:9px;
    width:100%;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.secondary};
    margin-top: 15px;
    border:none;
    border-radius: 5px;
    transition: 0.3s;

    &:disabled{
    background-color: #808080;
    opacity: 1;
    cursor: not-allowed;
    }

    &:hover{
    opacity: 0.7;
    }

    &:hover{
    //background-color: ${({ theme }) => theme.colors.primary};
    }
  
`;

// eslint-disable-next-line import/prefer-default-export
export default function Button({ type, disabled, ...props }) {
  return(
    <div>
      <ButtonBase
        type={type}
        disabled={disabled}
        {...props}
      />
    </div>
  );
}
Button.defaultProps = {
  value: '',
};

Button.protoTypes = {
  disabled: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
};
