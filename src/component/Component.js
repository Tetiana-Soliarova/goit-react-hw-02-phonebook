//import { Component } from 'react'
//import PropTypes from 'prop-types';
//import styles from './component.module.css'
//import { v4 as uuidv4 } from 'uuid'
//import ContactForm from './ContactForm/Form'
//import ContactList from './ContactsList/ContactList'
//import Filter from './Filter/Filter'
/*
class ComponentPhone extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],

   // name: '',
   // number: '',
    filter: '',
  }

 

  // метод который записывает данные в state = contacts:
  addContact = (data) => {
   const contact = {
      id: uuidv4(),
      name: data.name,
      number: data.number,
    }

    this.setState((prevState) => {
      return {
        contacts: [contact, ...prevState.contacts],
      }
    })
  }

    
    
    //filter
    changeFilter = e => {
        this.setState({ filter: e.currentTarget.value });
    };

  visibleTodos = () => {
    return this.state.contacts.filter(contact =>
        contact.name.toLowerCase().includes(this.state.filter.toLowerCase()),)}

  
  
   
  
  
  deleteContact = removeId=> {
    this.setState((prevState) => {
      return{
        contacts: prevState.contacts.filter(({id})=> id!== removeId)}
    } 
    )
  }

    render() {
        const { filter } = this.state;
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm
          onSubmit={this.addContact}
          contacts={this.state.contacts}
        />

            <Filter 
                value={filter} onChange={this.changeFilter} />

        <h2>Contacts</h2>

        <ContactList contacts={this.visibleTodos()} deleteContact={this.deleteContact}/>
      </div>
    )
  }
}



export default ComponentPhone
*/