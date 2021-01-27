/* eslint-disable linebreak-style */
import styled from 'styled-components';

const Widget = styled.div`
  font-family: 'Ubuntu', sans-serif;
  margin-top: 24px;
  margin-bottom: 24px;
  background-color: #2a2e35;
  border-radius: 6px;
  overflow: hidden;

  h1, h2, h3{
    font-size: 20px;
    font-weight: 700;
    line-height: 1;
    margin-bottom: 0;
  }
  p{
    font-size: 14px;
    font-weight: 400;
    line-height: 1;
  }
`;
Widget.Header = styled.header`
  display:flex;
  justify-content: flex-start;
  align-items: center;
  padding: 18px 32px;
  background-color: ${({ theme }) => theme.colors.primary};

  *{
    margin:0;
  }
`;
Widget.Content = styled.div`
  box-sizing:border-box;
  align-items:center;
  padding: 24px 32px 32px 32px;
  & > *:first-child{
    margin-top:0;
  }
  & > *:last-child{
    margin-bottom:0;
  }
  ul{
    list-style: none;
    padding: 0;
  }
  input{
    font-family: 'Ubuntu', sans-serif;
    margin-top: 15px;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.box};
    border:1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 5px;
    text-align:center;
    padding:12px;
    width:100%;
  }
  button{
    font-family: 'Ubuntu', sans-serif;
    padding:9px;
    width:100%;
    color: #fff;
    background-color: ${({ theme }) => theme.colors.secondary};
    margin-top: 15px;
    border-radius: 5px;
  }
`;

export default Widget;
