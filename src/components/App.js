import React from 'react';
import Videos from './Videos'
import Route from './Route'
import ResumeContent from './Resume/ResumeContent'
import Login from './Login'
import AdminProfile from './AdminProfile'
import './app.css';


const App = () => {
   // setSelectedVideo(response.data.items[0])

 return (
 <div id="App" className="">

	 <Route path="/videos">
<Videos/>
</Route>
	 <Route path="/">
<ResumeContent/>
</Route>
<Route path="/profile">
	<AdminProfile/>
</Route>
<Route path="/login">
<Login/>
</Route>

 </div>
 );
};


export default App;