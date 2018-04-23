import React from "react";

const BookList = ({ working }) => (

	<div>
		<h2>{ working ? "The value is true" : "The value is false.  IT DID NOT WORK. DAMMIT" }</h2>
	</div>

)


export default BookList;