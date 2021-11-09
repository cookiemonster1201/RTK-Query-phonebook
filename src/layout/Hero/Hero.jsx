import styled from 'styled-components';
import { ContactsForm } from 'components/ContactsForm/ContactsForm';
import heroPicture from './getty_510591490_356091.jpeg';
import { useGetAllContactsQuery } from 'redux/services/contacts-slice';

const HeroSection = styled.section`
  padding-top: 150px;
  padding-bottom: 150px;

  margin: 0 auto;
  max-width: 1600px;
  background-color: #c4c4c4;
  background-image: radial-gradient(
      rgba(236, 227, 227, 0.4),
      rgba(34, 34, 33, 0.4)
    ),
    url(${heroPicture});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

const HeroWrapper = styled.div`
  margin: 0 auto;
  text-align: center;
  max-width: 800px;

  @media screen and (min-width: $desktopWidth) {
    max-width: 696px;
  }
`;

const MyContactsLink = styled.a`
  font-size: 24px;
  color: #fff;
  cursor: pointer;
  transition: color 200ms linear;

  &:hover,
  &:focus {
    color: #e99f17;
    transition: color 200ms linear;
  }
`;

export default function Hero() {
  const { data: contacts } = useGetAllContactsQuery();

  return (
    <HeroSection>
      <HeroWrapper>
        <ContactsForm />
        {contacts?.length > 0 && (
          <MyContactsLink href="#my-contacts">My Contacts</MyContactsLink>
        )}
      </HeroWrapper>
    </HeroSection>
  );
}
