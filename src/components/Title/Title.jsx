import styled from 'styled-components';

const H1 = styled.h1`
  padding: 10px 90px;
  color: #fff;
  font-size: 25px;
  text-align: end;
  background-color: #e99f17;
`;

export default function Title({ text }) {
  return <H1>{text}</H1>;
}
