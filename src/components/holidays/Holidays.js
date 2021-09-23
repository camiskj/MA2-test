import { useState, useEffect } from "react";
import HolidayItem from "./HolidayItem";
import { API } from "../../constants/api";

function Holidays() {
	const [holidays, setHolidays] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(function () {
		async function fetchData() {
			try {
				const response = await fetch(API);

				if (response.ok) {
					const json = await response.json();
					console.log(json);
					setHolidays(json.data);
				} else {
					setError("An error occured");
				}
			} catch (error) {
				setError(error.toString());
			} finally {
				setLoading(false);
			}
		}
		fetchData();
	}, []);

	if (loading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>An error occured: {error}</div>;
	}


	return (
		<div className="holidays">
			{holidays.map(function (holiday) {
				const { localName, name, date } = holiday;
				return <HolidayItem key={name} name={name} localName={localName} date={date} />;
			})}
		</div>
	);
}

export default Holidays;
