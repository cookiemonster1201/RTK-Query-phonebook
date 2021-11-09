import Container from 'layout/Container';
import Header from 'layout/Header/Header';
import Hero from 'layout/Hero/Hero';
import Filter from 'components/Filter/Filter';
import Footer from 'layout/Footer/Footer';

import { useGetAllContactsQuery } from 'redux/services/contacts-slice';

export default function App() {
  const { data } = useGetAllContactsQuery();
  console.log(data);

  return (
    <Container>
      <Header />
      <Hero />
      <Filter />
      <Footer />
    </Container>
  );
}
