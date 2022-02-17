import { useParams } from 'react-router-dom';

const TransactionDetail = ({jsonData}) => {

	const {id} = useParams();
	const record = jsonData.find(d => d.account === id);

	return (
		<section className="transaction-details">
			<p><b>Account No.:  </b>{record.account}</p>
			<p><b>Account Name:  </b>{record.accountName}</p>
			<p><b>Currency Code:  </b>{record.currencyCode}</p>
			<p><b>Amount:  </b>{record.amount}</p>
			<p><b>Transaction Type:  </b>{record.transactionType}</p>
		</section>

	);
};

export default TransactionDetail;