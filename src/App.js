import './App.css';
// import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
// import LeftPart from './components/leftPart/LeftPart';
// import RightPart from './components/rightPart/RightPart';
import { Route, Routes } from 'react-router-dom';
import Market from './components/market/Market';
import Dashboard from './components/dashboard/dashboard';
import Profile from './components/profile/profile';
import Inbox from './components/inbox/inbox';

function App() {
  return (
    <div className="App overflow-y-hidden bg-stone-50">
     {/* <Header/> */}
     <div className='w-full min-h-[90vh] grid grid-cols-12'>
     <NavBar/>
     <div className='grid grid-cols-1 xl:grid-cols-5 col-span-10 w-full'> 
       <Routes>
          <Route exact path='/' element={<Dashboard />} />
          <Route exact path='/market' element={<Market />} />
          <Route exact path='/profile' element={<Profile />} />
          <Route exact path='/inbox' element={<Inbox />} />
        </Routes>

     </div>


     </div>
    </div>
  );
}

export default App;
