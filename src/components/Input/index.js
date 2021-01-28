/* eslint-disable linebreak-style */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable keyword-spacing */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const InputBase = styled.input`
    font-family: 'Ubuntu', sans-serif;
    margin-top: 15px;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.box};
    border:1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
    text-align:center;
    padding:12px;
    width:100%;
    outline: 0;
`;

// eslint-disable-next-line import/prefer-default-export
export default function Input({ onChange, placeholder, ...props }) {
  return(
    <div>
      <InputBase
        onChange={onChange}
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}
Input.defaultProps = {
  value: '',
};

Input.protoTypes = {
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};
