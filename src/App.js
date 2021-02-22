import React from 'react';

import Header from './components/Header';
import Body from './components/Body';
import Button from './components/Button';
import Top from './components/Top';

import './App.css';

function App() {
    return (
    <div className="App">
        <Top />
        <Header />
        <Body />
        <Button />
    </div>
    );
}

export default App;