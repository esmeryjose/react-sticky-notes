import React, { Component } from 'react';
import './app.css';

import Note from './Note';

class Board extends Component {

  constructor(){
    super()
    this.state = {
      notes:[]
    }
  }

  componentWillMount(){

  }

  update = (newText, id) => {
    var notes = this.state.notes.map(
      note => (note.id !== id) ?
        note  :
        {
          ...note,
          note: newText
        }
    )
    this.setState({notes})
  }

  add = () =>{
    var notes = [
      ...this.state.notes,
      {
        id: this.nextId(),
        note: 'New Note'
      }
    ]
    this.setState({notes})
  }

  nextId(){
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }

  remove = (id) =>{
    var notes = this.state.notes.filter(note => note.id !== id)
    this.setState({notes})
  }

  eachNote = (note)=>{
    return(
      <Note key={note.id} id={note.id} onSave={this.update} onRemove={this.remove}>
        {note.note}
      </Note>
    )
  }

  render(){
    return(
      <div className ='board'>
        {this.state.notes.map(this.eachNote)}
        <button onClick={this.add}>+</button>
      </div>
    )
  }
}

export default Board;
