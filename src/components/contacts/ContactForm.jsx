import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FormControl, Input, InputLabel, Button, Icon, Tooltip } from "@material-ui/core";
import { styled } from "@material-ui/styles";

import operations from '../../redux/contacts/contactsOperetions'
import selectors from '../../redux/contacts/contactsSelectors'

const INITIAL_STATE = {
  name: '',
  number: '',
};

const MyButton = styled(Button)({
  color: 'lightcoral',
  backgroundColor: 'rgb(233, 229, 229)',
  marginTop: '25px',
});

const MyInput = styled(Input)({
  margin: 'auto',
  fontSize: '26px',
  textAlign: 'center',
  // color: 'rgb(80, 23, 23)'
})

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
      <form  autoComplete="off">
       
        <FormControl>
          <InputLabel>
            <Icon>person</Icon> Name</InputLabel>
          <MyInput
            label="Error"
            type="name"
            name="name"
            value={this.state.name}
            onChange={this.handleNewValue}
          />
        </FormControl>

        <FormControl >
          <InputLabel> <Icon>phone</Icon>
            Phone</InputLabel>
          <MyInput
            type="text"
            key="number"
            name="number"
            value={this.state.number}
             onChange={this.handleNewValue}
          />
        </FormControl>

        <ToastContainer />
        <Tooltip title="Please, enter name and phone to adding!">
          <span>
            <MyButton
              disabled={!this.state.name || !this.state.number}
              variant="contained"
              endIcon={<Icon>person</Icon>}
              onClick={this.handleAddNewContact}
              >Add contact
            </MyButton>
          </span>
        </Tooltip>
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
