import { FormControlLabel, Checkbox } from '@mui/material';

const AccountNames = ({nameFilters, handleNameFiltersChange}) => {

	return (
		<section className="filter-box">
			<p>Account Name</p>
			<FormControlLabel control={<Checkbox checked={nameFilters.includes("Savings Account")} onChange={() => handleNameFiltersChange("Savings Account")} />} label="Savings Account" />
			<FormControlLabel control={<Checkbox checked={nameFilters.includes("Checking Account")} onChange={() => handleNameFiltersChange("Checking Account")} />} label="Checking Account" />
			<FormControlLabel control={<Checkbox checked={nameFilters.includes("Auto Loans Account")} onChange={() => handleNameFiltersChange("Auto Loans Account")} />} label="Auto Loans Account" />
			<FormControlLabel control={<Checkbox checked={nameFilters.includes("Credit Card Account")} onChange={() => handleNameFiltersChange("Credit Card Account")} />} label="Credit Card Account" />
			<FormControlLabel control={<Checkbox checked={nameFilters.includes("Investment Account")} onChange={() => handleNameFiltersChange("Investment Account")} />} label="Investment Account" />
			<FormControlLabel control={<Checkbox checked={nameFilters.includes("Personal Loan Account")} onChange={() => handleNameFiltersChange("Personal Loan Account")} />} label="Personal Loan Account" />
			<FormControlLabel control={<Checkbox checked={nameFilters.includes("Money Market Account")} onChange={() => handleNameFiltersChange("Money Market Account")} />} label="Money Market Account" />
			<FormControlLabel control={<Checkbox checked={nameFilters.includes("Home Loand Account")} onChange={() => handleNameFiltersChange("Home Loand Account")} />} label="Home Loand Account" />
		</section>
	);
};

export default AccountNames;
