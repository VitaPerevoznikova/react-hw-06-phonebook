import { Section } from './Section/Section';

import ContactForm from './ContactForm/ContactForm';

import ContactList from './ContactList/ContactList';

import { Filter } from './Filter/Filter';


export const App = () => {
  return (
    <>
      <Section title="Phonebook">
        <ContactForm />
        <h2>Contacts</h2>
        <Filter />
        <ContactList />
      </Section>
      
    </>
  );
};
