import React, { Component } from 'react'
import { Button, Form, Container, Header } from 'semantic-ui-react'
import axios from 'axios'


    export default class FormOutput extends Component {
    constructor(props){
        super(props)
        
        // Declaring and initializing the state
        this.state= {
            name:"",
            age:"",
            salary:"",
            hobby:""
        }
    }

    // Event handler to receive and store updated input fields 
    handleChange = (e) => {
    this.setState({[e.currentTarget.name] : e.currentTarget.value})
    }

        // Event handler to enable submission of form
    handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state, "&")

        // Calling the API to autopopulate the googlesheet
    axios.post ('https://sheet.best/api/sheets/67885db3-c542-44d8-8699-1ec8f85be5d4', this.state)
    .then(response => {
    console.log(response, "**");
  //   if (response){
  //     <Message
  //   success
  //   header='Your user registration was successful'
  //   content='You may now log-in with the username you have chosen'
  // />
  //   }
    
        })
    }


    render (){
        return (
    <Container fluid className="container">

    <Header as='h2'>React Google Sheets!</Header>

    <Form onSubmit={this.handleSubmit}>
    <Form.Field>
      <label>Name</label>
      <input placeholder='Enter your Name' type="text" name = "name" value = {this.state.value} onChange={this.handleChange} />
    </Form.Field>

    <Form.Field>
      <label>Age</label>
      <input placeholder='Enter your age' type="number" name = "age" value = {this.state.value} onChange={this.handleChange} />
    </Form.Field>

    <Form.Field>
      <label>Salary</label>
      <input placeholder='Enter your salary' type="number" name = "salary" value = {this.state.value} onChange={this.handleChange} />
    </Form.Field>

    <Form.Field>
      <label>Hobby</label>
      <input placeholder='Enter your hobby' type="text" name = "hobby" value = {this.state.value} onChange={this.handleChange} />
    </Form.Field>

    <Button type='submit' className="button">Submit</Button>
    </Form>
    </Container>
        )
    }


    }