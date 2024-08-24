import React from 'react';
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Person } from './components/Person';
import { PersonList } from './components/PersonList';
import { Status } from './components/Status';
import { Heading } from './components/Heading';
import { Button } from './components/Button';
import { Input } from './components/Input';
import { Container } from './components/Container';
import { LoggedIn } from './components/state/LoggedIn';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { Box } from './components/context/Box';
import { DomRef } from './components/ref/DomRef';
import { MutableRef } from './components/ref/MutableRef';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { List } from './components/generics/List';
import { CustomButton } from './components/html/CustomButton';

function App() {

  const personName = {
    first: 'Bruce',
    last: 'wayne'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'wayne'
    },
    {
      first: 'sargam',
      last: 'dinesh'
    },
    {
      first: 'ajay',
      last: 'kumar'
    }
  ]
  return (
    <div className="App">
      <CustomButton variant='primary' onClick={() => console.log('button Clicked')} />
      {/* <List
        items={['hello','yuvi','khushi']}
        onClick={(item) => console.log(item)}
      />
      <List
        items={[1,2,3,4]}
        onClick={(item) => console.log(item)}
      /> */}
      {/* <Private isLoggedIn={false} component={Profile} /> */}
      {/* <MutableRef /> */}
      {/* <DomRef /> */}
      {/* <ThemeContextProvider>
        <Box />
      </ThemeContextProvider> */}
      {/* <LoggedIn /> */}
      {/* <Container styles={{border: '10px solid red', padding: '5rem' }} /> */}
      {/* <Input value='' handleChange={(event) => console.log(event)} /> */}
      {/* <Button handleClick={(event) => {
        console.log('Button Clicked', event)
      }}/> */}
      {/* <Heading>PlaceHolder Text</Heading> */}
      {/* <Status status='loading' /> */}
      {/* <PersonList names = {nameList} /> */}
      {/* <Person name = {personName} /> */}
      {/* <Greet name='yuvii' messageCount={20} isLoggedIn = {true} /> */}
    </div>
  );
}

export default App;
