// import logo from './logo.svg';
import React, { Component } from 'react';
import './App.css';
// import Person from './components/Person';
import Book from './components/Book';

//JSX format
//Functional component
// function App() {
//   return (
//     <div className="App">
//       <h1>Hello world!</h1>
//       <Person />
//     </div>

//   );
// }

//class component
class App extends Component {

  //state....eita sudhu class component e use kora jabe
  state = {
    books: [
      { bookName: '1984', writer: 'George orwell' },
      { bookName: 'Volpone', writer: 'Ben jonson' },
      { bookName: 'a paasge to india', writer: 'e m foster' }
    ],
    otherProp: 'I am some other prop'
  }

  changeBookStore = (newBookName) => {
    // console.log('Button clicked');
    // this.state.books[0].bookName = '1974';
    this.setState({

      books: [
        { bookName: newBookName, writer: 'George orwell' },
        { bookName: 'Lady chattarleys lover', writer: 'Charlotte bronte' },
        { bookName: 'a paasge to india', writer: 'e m foster' }
      ]
    });
  }

  changeWithInputState = (event) => {

    this.setState({

      books: [
        { bookName: event.target.value, writer: 'George orwell' },
        { bookName: 'Lady chattarleys lover', writer: 'Charlotte bronte' },
        { bookName: 'a paasge to india', writer: 'e m foster' }
      ]
    });
  }


  render() {
    //internal css lekhar jonno
    const style = {

      borderRadius: '5px',
      backgroundColor: 'black',
      color: 'red'
    };
    return (
      <div className="App">
        <h1 style={style}>Book list</h1>
        {/* <h1>Book list</h1> */}




        {/* bind er maddhome */}
        <button onClick={() => this.changeBookStore('nineteen one four')}>Click me</button>
        <input type='text' onChange={this.changeWithInputState}></input>

        {/* <h1>Tor nani mane amar nani</h1> */}
        {/* <Person name='karim' age='30'>I am a dynamic person</Person>
        <Person name='rahim' age='32'></Person>
        <Person name='jabir' age='34'></Person>
        <Person name='sumon' age='33'></Person> */}



        {/* <Book bookName='1984' writer='George orwell'></Book>
        <Book bookName='Volpone' writer='Ben jonson'></Book>
        <Book bookName='Gulliver' writer='Jonathan swift'></Book>
        <Book bookName='Satanic verse' writer='Salman rushdie'></Book> */}


        <Book bookName={this.state.books[0].bookName} writer={this.state.books[0].writer}></Book>
        <Book bookName={this.state.books[1].bookName} writer={this.state.books[1].writer} change={this.changeBookStore.bind(this, 'nineteen sixty')}></Book>
        <Book bookName={this.state.books[2].bookName} writer={this.state.books[2].writer} inputName={this.changeWithInputState}></Book>


      </div>
    );
  }
}

export default App;
