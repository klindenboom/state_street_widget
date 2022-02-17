import React from 'react';
import {Link} from 'react-router-dom';
import {DataGrid} from '@mui/x-data-grid';

const TransactionList = ({nameFilters, typeFilters, jsonData}) => {

	const [pageSize, setPageSize] = React.useState(12);

	const columns = [{
		field: 'account',
		renderCell: cellValues => {
			return <Link to={{pathname: `/detail/${cellValues.row.account}`}}>{cellValues.row.account}</Link>;
		},
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

	let filteredData = jsonData;
	filteredData = nameFilters.length ? filteredData.filter(d => nameFilters.includes(d.accountName)) : filteredData;
	filteredData = typeFilters.length ? filteredData.filter(d => typeFilters.includes(d.transactionType)) : filteredData;

	return (
		<section className="data-grid">
	     	<DataGrid
		        columns={columns}
		        getRowId={(row) => row.iban}
		        rows={filteredData}
		        pageSize={pageSize}
		        disableSelectionOnClick
		        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
		        rowsPerPageOptions={[12, 24, 36]}
		    />
		</section>

	);
};

export default TransactionList;


