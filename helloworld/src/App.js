import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import  Greet  from './components/greet'
import Welcome from './components/welcome';
import Hello from './components/hello';
import Message from './components/message';
import Counter from './components/counter';
import FunctionClick from './components/functionClick';
import ClassClick from './components/classClick';
import EventBind from './components/eventBind';
import ParentComponent from './components/parentComponent';
import UserGreeting from './components/userGreeting';
import NameList from './components/nameList';
import StyleSheet from './components/styleSheet';
import Inline from './components/inline';
import Form from './components/form';
import LifeCycleA from './components/lifeCycleA';
import FragmentDemo from './components/fragmentDemo';
import Table from './components/table';
import PureComp from './components/pureComp';
import ParentComp from './components/parentComp';
import RefsDemo from './components/refsDemo';
import FocusInput from './components/focusInput';
import FRParentInput from './components/FRParentInput';
import PortralDemo from './components/portralDemo';
import Hero from './components/hero';
import ErrorBoundary from './components/errorBoundary';
import ClickCounter from './components/clickCounter';
import HoverCounter from './components/hoverCounter';
import ClickCounterTwo from './components/clickCounterTwo';
import HoverCounterTwo from './components/hoverCounterTwo';
import User from './components/user';
import Counters from './components/Counters';
import ComponentC from './components/componentC';
import { UserProvider } from './components/userContext';

class App extends Component {
  render() {
    return (
      <div className="App">
        
        {/* <UserProvider value="yuvraj">
          <ComponentC />
        </UserProvider> */}
        {/* <Counters
          render = {(count, incrementCount) => (
            <ClickCounterTwo count = {count} incrementCount = {incrementCount} />
          )}
        />
        <Counters
          render = {(count, incrementCount) => (
            <HoverCounterTwo count = {count} incrementCount = {incrementCount} />
          )}
        /> */}
        {/* <HoverCounterTwo />
        <ClickCounterTwo />
        <User render = {(isLoggedIn) => isLoggedIn ? "yuvii" : "guest"}/> */}
        {/* <HoverCounter />
        <ClickCounter name = "yuvii"/> */}
        {/* <ErrorBoundary>
          <Hero heroName='batman'/>
        </ErrorBoundary>
        <ErrorBoundary>
          <Hero heroName='joker'/>
        </ErrorBoundary> */}
        {/* <PortralDemo /> */}
        {/* <FRParentInput /> */}
        {/* <FocusInput /> */}
        {/* <RefsDemo /> */}
        {/* <ParentComp /> */}
        {/* <Table /> */}
        {/* <FragmentDemo /> */}
        {/* <LifeCycleA /> */}
        {/* <Form /> */}
        {/**/}
        {/* <Inline></Inline> */}
        {/* <StyleSheet primary = {true}></StyleSheet> */}
        {/* <NameList></NameList> */}
        {/* <UserGreeting></UserGreeting> */}
        {/* <ParentComponent></ParentComponent> */}
        {/* <EventBind></EventBind> */}
        {/* <ClassClick></ClassClick> */}
        {/* <FunctionClick></FunctionClick> */}
        {/* <Counter></Counter> */}
        {/* <Message></Message> */}
        {/* <Greet name = "yuvraj">
          <p>This is children</p>
        </Greet>
        <Greet name = "dk">
          <button>clickMe</button>
        </Greet>
        <Greet name = "saru"/> */}
        {/* <Welcome name = "yuvraj"/>
        <Welcome name = "dk"/>
        <Welcome name = "saru"/> */}
        {/* <Hello></Hello> */}
      </div>
    );
  }
}

export default App;
