import React, { Component } from 'react';
import './App.css';
import List from './List';
import axios from 'axios';
class MiniForm extends Component {
  
  constructor(props){
      super(props);
      this.state = {
        author: "",
        body: ""
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleSubmit = this.handleSubmit.bind(this)
  }
  
  handleChange(){
      
    const target = event.target;
    const value = event.value;
    const name = event.name;
      
      
  }
  handleSubmit(event){
      event.preventDefault()
      const question_id = this.props.question_id
      url =''
      if(question_id){
          url=""
          axios.post(url,{
              author: {this.state.author},
              question: {this.state.body}
          }).then((res) => {
              res.json()
          })
      }else{
         url=""
          axios.post(url,{
              author: {this.state.author},
              answer: {this.state.body}
          }).then((res) => {
              res.json()
          })
      }
  }
  render() {
      
    return (
        <form onSubmit={(e) => this.handleSubmit}>
            <label htmlForm ="author"> Author 
                <input id="author" type="text" />
            </label>
            <label htmlForm ="body"> Body 
                <input id="author" type="text" />
            </label>
        </form>
    );
  }
}

export default MiniForm;
