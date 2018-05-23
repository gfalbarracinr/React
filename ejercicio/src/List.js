import React, { Component } from 'react';
import './App.css';

class List extends Component {
  constructor(props){
    super(props);
    this.state ={
      items: [],
      isLoader: false,
      error: null
    }
  }
  
  request(){
    fetch(url)
        .then(res => res.json())
        .then(
            (result) =>{
                this.setState({
                    items: result,
                    isLoader: true
                })
                },
                (error) => {
                    isLoader: false,
                    error
                }
            )
  }
  
  componentWillMount(){
      
      if ( question_id){
          this.request()
      } else{
          this.request()
      }
  }
  render() {
     const {items, isLoader, error} = this.state
     const question_id = this.props.question_id
     
     if(isLoader){
         var list
         if (question_id){
             list = items.map((item) => <Answer key={item_id} item ={item}/>)
             lsit = items.map((item) => <Question key = {item_id} item = {item}/>)
         }
     }
    return (
      
    );
  }
}

export default List;
