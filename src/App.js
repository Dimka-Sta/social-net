import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import News from './components/News/News';
import Musik from './components/Musik/Musik';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import React from 'react';




function App(props) {

  return (
    <BrowserRouter>
      <div className='app-wrapper' >

        <Header />
        <Navbar />

        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/*'
              element={<Profile />} />

            <Route path='/dialogs/*'
              element={<DialogsContainer />} />

            <Route path='/news/*' element={<News />} />
            <Route path='/musik/*' element={<Musik />} />

            <Route path='/users/*' element={<UsersContainer />} />

            <Route path='/settings/*' element={<Settings />} />
          </Routes>
        </div>


      </div>
    </BrowserRouter>
  );
}

export default App;
