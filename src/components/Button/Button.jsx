import styled from 'styled-components';

export const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  width: 180px;
  margin: 0 auto;
  padding: 14px 25px;
  text-transform: uppercase;
  color: #fff;
  background: #e99f17;
  border: 1px solid #e99f17;
  border-radius: 7px;

  transition: color 250ms linear, background-color 250ms linear;

  &:hover,
  &:focus {
    color: #e99f17;
    background: #fff;
  }
`;

export function Button({ text }) {
  return <StyledButton type="submit">{text}</StyledButton>;
}
