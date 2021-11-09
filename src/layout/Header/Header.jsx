import styled from 'styled-components';
import Title from 'components/Title/Title';
import SocialLinks from 'components/SocialLinks/SocialLinks';

const PageHeader = styled.header`
  display: flex;
  flex-direction: column;
  min-height: 50px;
`;

export default function Header() {
  return (
    <PageHeader>
      <Title text={'The Phone Book'} />
      <SocialLinks />
    </PageHeader>
  );
}
