import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter';
import ContactList from './ContactList/ConactList';



function App() {
  return (
      <>
        <h1>Phonebook</h1>
          <ContactForm />
        <h2>Contacts</h2>
          <Filter />
      <ContactList/>
      </>
    );
}

export default App;





