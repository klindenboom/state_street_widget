import {useState} from 'react';

import AccountNames from '../../components/AccountNames';
import TransactionTypes from '../../components/TransactionTypes';
import TransactionList from '../../components/TransactionList';

const List = ({jsonData}) => {

	const [nameFilters, setNameFilters] = useState([]);
	const [typeFilters, setTypeFilters] = useState([]);

	const handleNameFiltersChange = (name) => {
		const index = nameFilters.findIndex(f => f === name);
		if (index !== -1) {
			nameFilters.splice(index, 1);
			return setNameFilters([...nameFilters]);
		} else {
			return setNameFilters([...nameFilters, name]);
		}
	}

	const handleTypeFiltersChange = (type) => {
		const index = typeFilters.findIndex(f => f === type);
		if (index !== -1) {
			typeFilters.splice(index, 1);
			return setTypeFilters([...typeFilters]);
		} else {
			return setTypeFilters([...typeFilters, type]);
		}
	}

	return (
		<div className="app-list">
			<section className="filters-panel">
				<AccountNames nameFilters={nameFilters} handleNameFiltersChange={handleNameFiltersChange} />
				<TransactionTypes typeFilters={typeFilters} handleTypeFiltersChange={handleTypeFiltersChange}/>
			</section>
				<section className="transaction-list">
				<TransactionList nameFilters={nameFilters} typeFilters={typeFilters} jsonData={jsonData} />
			</section>
		</div>
	);
}

export default List;