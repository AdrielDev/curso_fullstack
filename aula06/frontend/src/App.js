import React,{Component} from 'react';
import {BrowserRouter} from 'react-router-dom';
import Routes from './routes';
import './App.css';

export default class App extends Component{
  render(){
    return (
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    )
  }
}