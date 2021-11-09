import styled from 'styled-components';
const StyledFooter = styled.footer`
  padding: 18px 90px;
  background-color: #e99f17;
  text-align: center;
  color: #495057;
`;
export default function Footer() {
  return (
    <StyledFooter>
      <p>&#9400;&nbsp;2021</p>
    </StyledFooter>
  );
}
