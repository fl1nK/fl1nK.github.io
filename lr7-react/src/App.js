import React from 'react';
import Header from './components/Header';
import { Content } from "./components/Content";
import Image from "./components/Image";
import Cards from './Cards';

function App() {
  return (
      <div>
        <Header/>
        <Content/>
        <Image/>
        <Cards/>
      </div>
  );
}

export default App;
