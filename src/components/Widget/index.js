import styled from 'styled-components';

const Widget = styled.div`
  font-family: 'Fraunces', serif;
  margin-top: 24px;
  margin-bottom: 24px;
  background-color: #2a2e35;
  border-radius: 6px;
  overflow: hidden;

  h1, h2, h3{
    font-size: 16px;
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
  display:flex;
  align-items:center;
  justify-content:center;
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
    padding:12px;
    width:250px;
  }
`;

export default Widget;
