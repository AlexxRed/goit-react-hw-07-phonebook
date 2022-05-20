import { ButtonDelete, ItemList } from './ContactList.styled';
import { useSelector } from 'react-redux';
import { useGetContactsQuery, useDeleteContactMutation } from '../../redux/contactsSlice';




const ContactList = () => {
  const { data:contacts=[] } = useGetContactsQuery();
  console.log(contacts);
  const filtredList = useSelector(state => state.filter.value);
  console.log(filtredList);

  

  const [deleteContacts] = useDeleteContactMutation();

  // const { data, error, isLoading } = useGetContactsQuery();
  // console.log(data);
  // console.log(error);
  // console.log(isLoading);

  const getVisibleContacts = () => {
    const normalizedFilter = filtredList.toLowerCase();
    return contacts.filter(el =>
      el.name.toLowerCase().includes(normalizedFilter)
    );
  };
  
  const visibleContacts = getVisibleContacts();

  const deleteContact = id => {
    deleteContacts(id);
    };

  return (
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