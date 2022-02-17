import {Routes, Route, useLocation} from 'react-router-dom'

import List from './containers/List';
import Detail from './containers/Detail';

import jsonData from './data/data.json';

import './App.scss';

const App = () => {

	let location = useLocation();

	const getHeaderText = () => {
		return location.pathname === "/" ? "My Transactions" : "Transaction Detail";
	}

  	return (
	  	<div className="app-main">
			<header className="app-header">
				<h2>{getHeaderText()}</h2>
			</header>
			<Routes>
			   	<Route path="/" element={<List jsonData={jsonData.transactions} />} />
	            <Route path="/detail/:id" element={<Detail jsonData={jsonData.transactions} />} />
	        </Routes>
	  </div>
  );
}

export default App;
