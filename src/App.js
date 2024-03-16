import React from 'react';
import './App.css';
import Navbar from './component/NavBar/Navbar';
import Banner from './component/Banner/Banner'
import RowPost from './component/RowPost/RowPost';
import {action,originals,ComedyMovies, HorrorMovies,Documentaries} from './urls'



function App() {
  return (
    <div className="App">
       <Navbar />
       <Banner/>
       <RowPost url={originals} title='Netflix original' />
       <RowPost url={action} title='Action' isSmall />
       <RowPost url={ComedyMovies} title='Comedy Movies' isSmall/>
       <RowPost url={HorrorMovies} title='Horror Movies' isSmall/>
       <RowPost url={Documentaries} title='Documentaries' isSmall />
    </div>
  );
}

export default App;
