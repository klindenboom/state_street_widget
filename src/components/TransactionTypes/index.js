import React from 'react';
import PropTypes from 'prop-types';
import { FormControlLabel, Checkbox } from '@mui/material';
import styles from './transactionTypes.module.scss';

const TransactionTypes = ({typeFilters, handleTypeFiltersChange}) => {

	return (
		<section className="filter-box">
			<p>Transaction Type</p>
			<FormControlLabel control={<Checkbox checked={typeFilters.includes('deposit')} onChange={() => handleTypeFiltersChange("deposit")} name="Deposit" />} label="Deposit" />
			<FormControlLabel control={<Checkbox checked={typeFilters.includes('withdrawel')} onChange={() => handleTypeFiltersChange("withdrawel")} name="Withdrawel" />} label="Withdrawel" />
			<FormControlLabel control={<Checkbox checked={typeFilters.includes('invoice')} onChange={() => handleTypeFiltersChange("invoice")} name="Invoice" />} label="Invoice" />
			<FormControlLabel control={<Checkbox checked={typeFilters.includes('payment')} onChange={() => handleTypeFiltersChange("payment")} name="Payment" />} label="Payment" />
		</section>

	);
};

export default TransactionTypes;
