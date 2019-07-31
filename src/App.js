import React, { Component } from 'react';
import Customer from './components/Customer';
import './App.css';

const customers = [
  {
    'id': 1,
    'image': 'https://placeimg.com/64/64/1',
    'name': '홍리나',
    'birthday': '20021010',
    'gender': 'femail',
    'job': 'student'
  },
  {
    'id': 2,
    'image': 'https://placeimg.com/64/64/2',
    'name': '홍나리',
    'birthday': '20021010',
    'gender': 'femail',
    'job': 'student'
  },
  {
    'id': 3,
    'image': 'https://placeimg.com/64/64/3',
    'name': '홍국일',
    'birthday': '20021010',
    'gender': 'femail',
    'job': 'doctor'
  }
]

class App extends Component {
  render() {
    return (
      <div>
        {
          customers.map(c => {
            return (
              <Customer
                key={c.id}
                id={c.id}
                image={c.image}
                name={c.name}
                birthday={c.birthday}
                gender={c.gender}
                job={c.job}
              />
            );

          })}
      </div>
    );
  }
}

export default App;
