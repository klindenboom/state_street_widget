import { DataGrid } from '@mui/x-data-grid';
import jsonData from '../../data/data.json';

const TransactionList = ({nameFilters, typeFilters}) => {

	const columns = [{
		field: 'account',
		headerName: 'ACCOUNT NO',
		width: 150,
	},
	{
		field: 'accountName',
		headerName: 'ACCOUNT NAME',
		width: 150,
	},
	{
		field: 'currencyCode',
		headerName: 'CURRENCY',
		width: 150,
	},
	{
		field: 'amount',
		headerName: 'AMOUNT',
		width: 150,
	},
	{
		field: 'transactionType',
		headerName: 'TRANSACTION TYPE',
		width: 200,
	}];
	
	let filteredData = jsonData.transactions;
	filteredData = nameFilters.length ? filteredData.filter(d => nameFilters.includes(d.accountName)) : filteredData;
	filteredData = typeFilters.length ? filteredData.filter(d => typeFilters.includes(d.transactionType)) : filteredData;

	return (
		<section className="data-grid">
	     	<DataGrid
		        columns={columns}
		        getRowId={(row) => row.iban}
		        rows={filteredData}
		        pageSize={12}
		    />
		</section>

	);
};

export default TransactionList;


