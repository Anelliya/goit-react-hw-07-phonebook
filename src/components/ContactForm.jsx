import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import styles from './styles/PhoneBook.module.css';
import operations from '../redux/contactsOperetions'
import selectors from '../redux/contactsSelectors'

const INITIAL_STATE = {
  name: '',
  number: '',
};

class ContactForm extends Component {
  state = INITIAL_STATE;

  showErrorMessage(newContactData) {
    toast(`${newContactData.name} already in your contact's list!`, {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      transition: Zoom,
    })
  }

  resetState() {
    this.setState(INITIAL_STATE);
  }

  handleNewValue = ({ target }) => {
    const { value, name } = target;
    this.setState({
      [name]: value,
    });
  };

  handleAddNewContact = () => {
    const newContactData = this.state;

    this.props.checkedName(newContactData)
      ? this.showErrorMessage(newContactData)
      : this.props.sendToDataBase(newContactData);
      
    this.resetState();
  };

  render() {

    return (
      <form className={styles.form}>
        <label key="name" className={styles.label}>
          Name
          <input
            type="text"
            key="name"
            name="name"
            placeholder="name"
            value={this.state.name}
            onChange={this.handleNewValue}
            className={styles.input}
          />
        </label>
        <label key="number" className={styles.label}>
          Phone
          <input
            type="text"
            key="number"
            name="number"
            placeholder="phone"
            value={this.state.number}
            onChange={this.handleNewValue}
            className={styles.input}
          />
        </label>
        <button
          onClick={this.handleAddNewContact}
          disabled={!this.state.name || !this.state.number}
          className={styles.btn}
        >
          Add contact
        </button>
            <ToastContainer /> 
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    checkedName: selectors.getCheckedName(state)
  }
}

const mapDispathcToProps = dispatch => {
  return {
    sendToDataBase: (newContact) => dispatch(operations.addContact(newContact))
  }
}


export default connect(mapStateToProps, mapDispathcToProps)(ContactForm);
