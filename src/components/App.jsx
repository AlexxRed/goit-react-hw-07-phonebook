import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter';
import ContactList from './ContactList/ConactList';
import { useGetContactsQuery } from '../redux/contactsSlice';


function App() {
  const { data } = useGetContactsQuery();
  return (
      <>
        <h1>Phonebook</h1>
          <ContactForm />
        <h2>Contacts</h2>
          <Filter />
      <ContactList contacts={ data }/>
      </>
    );
}

export default App;





