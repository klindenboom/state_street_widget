import TransactionDetail from '../../components/TransactionDetail';

const Detail = ({jsonData}) => {

	return (
		<div>
			<section className="app-detail">
				<TransactionDetail jsonData={jsonData} />
			</section>
		</div>
	);
}

export default Detail;