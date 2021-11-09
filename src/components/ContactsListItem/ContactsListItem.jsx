import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from 'react-loader-spinner';

import { StyledButton } from 'components/Button/Button';
import { useDeleteContactMutation } from 'redux/services/contacts-slice';

const DeleteButton = styled(StyledButton)`
  padding: 5px 3px;
  width: 120px;
  text-transform: lowercase;
  font-size: 16px;
  margin: 0;
`;

export default function ContactsListItem({ contact: { name, number, id } }) {
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();
  return (
    <>
      {isDeleting ? (
        <Loader
          type="Oval"
          color="#da5f01"
          height={25}
          width={25}
          style={{ margin: '0 auto' }}
        />
      ) : (
        <>
          <p>
            {name}: {number}
          </p>

          <DeleteButton type="button" onClick={() => deleteContact(id)}>
            delete
          </DeleteButton>
        </>
      )}
    </>
  );
}

ContactsListItem.propTypes = {
  contact: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }).isRequired,
};
