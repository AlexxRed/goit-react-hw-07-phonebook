import { ButtonDelete, ItemList } from './ContactList.styled';
import { useDispatch,useSelector } from 'react-redux';
import {removeContact, getFilteredContacts, getContactsList} from '../../redux/contactsSlice';


const ContactList = () => {
  const dispatch = useDispatch();
  const conactsList = useSelector(getContactsList);
  const filtredList = useSelector(getFilteredContacts)

  const getVisibleContacts = () => {
    const normalizedFilter = filtredList.toLowerCase();
    return conactsList.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
  };
  
  const visibleContacts = getVisibleContacts();

  const deleteContact = id => {
    return dispatch(removeContact(id))
  };

  return(
    <ul>
    {visibleContacts.length === 0 && <h3>...oops has no contacts :(</h3>}
    {visibleContacts.map(({ id, name, number }) => (
      <ItemList key={id}>
        <p>
          {name}: {number}
        </p>
        <ButtonDelete type="button" onClick={() => deleteContact(id)}>
          Delete
        </ButtonDelete>
      </ItemList>
    ))}
  </ul>
);
}

export default ContactList;