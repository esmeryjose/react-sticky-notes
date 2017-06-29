import React, { Component } from 'react';
import './app.css';

import Note from './Note';

class Board extends Component {

  constructor(){
    super()
    this.state = {
      add: true,
      notes:[]
    }
  }

  update = (newText, id) => {

    this.setState(pState=>{
      let notes = pState.notes.map( note =>(
        note.id !== id ? note :  {...note, note: newText  }
      ))
      return {
        notes: notes
      }
    })

  }

  add = () =>{

    this.setState(pState=>(
      {
        notes: [  ...pState.notes,{ id: this.nextId(), note: 'New Note'}]
      }
    ))

  }

  nextId(){
    this.uniqueId = this.uniqueId || 0
    return this.uniqueId++
  }

  remove = (id) =>{

    this.setState(pState=>{
      let notes = pState.notes.filter(note => note.id !== id)
      return { notes: notes }
    })

  }

  eachNote = (note)=>{
    return(
      <Note
        // style={{right: note.right, top: note.top}}
        key={note.id}
        id={note.id}
        onSave={this.update}
        onRemove={this.remove}
        >
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
