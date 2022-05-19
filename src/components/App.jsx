import ContactForm from './ContactForm';
import Filter from './Filter';
import ContactList from './ContactList';


function App() {
  return (
      <>
        <h1>Phonebook</h1>
          <ContactForm />
        <h2>Contacts</h2>
          <Filter />
            <ContactList />
      </>
    );
}

export default App;





