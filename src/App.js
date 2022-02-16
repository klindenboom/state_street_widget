import { BrowserRouter, Routes, Route } from 'react-router-dom'

import List from './containers/List';
import Detail from './containers/Detail';

import './App.scss';

const App = () => {

	const getHeaderText = ()=> {
		return ("My Transactions");
	}

  	return (
	  	<div className="app-main">
	  		<header className="app-header">
       			<h2>{getHeaderText()}</h2>
    		</header>
	  		<BrowserRouter>
				<Routes>
				   	<Route path="/" element={<List />} />
		            <Route path="/detail/:id" element={<Detail />} />
		        </Routes>
			</BrowserRouter>
	  </div>
  );
}

export default App;
