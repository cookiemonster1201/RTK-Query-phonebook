import styled from 'styled-components';
import { ReactComponent as LinkedIn } from './icons/linkedin.svg';
import { ReactComponent as Facebook } from './icons/facebook.svg';
import { ReactComponent as Instagram } from './icons/instagram.svg';

const Ul = styled.ul`
  padding: 20px 90px;
  display: flex;
  background-color: #fff;
  list-style: none;
`;
const Li = styled.li`
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
const Link = styled.a`
  transition: fill 200ms linear;
`;

const IconWrapper = styled.svg`
  fill: #495057;
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: fill 200ms linear;
  &:hover,
  ${Link}:focus > & {
    fill: #e99f17;
    transition: fill 200ms linear;
  }
`;

export default function SocialLinks() {
  return (
    <Ul>
      <Li>
        <Link href="#" target="_blank" aria-label="facebook">
          <IconWrapper>
            <Facebook />
          </IconWrapper>
        </Link>
      </Li>
      <Li>
        <Link href="#" target="_blank" aria-label="instagram">
          <IconWrapper>
            <Instagram />
          </IconWrapper>
        </Link>
      </Li>

      <Li>
        <Link href="#" target="_blank" aria-label="linkedIn">
          <IconWrapper>
            <LinkedIn />
          </IconWrapper>
        </Link>
      </Li>
    </Ul>
  );
}
