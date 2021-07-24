import React from 'react';
import Navbar from '../Components/Navbar/Index';
import data from '../Components/mock-data.json';
import { useState } from 'react';

const AnnualReport = () => {
	const[contacts,setContacts]=useState(data);
return (
	<div>
	<table class="table">
	  
		  <thead>
			<tr>
			  <th scope="col">Id</th>
			  <th scope="col">Task</th>
			  <th scope="col">Completed</th>
			  <th scope="col">Action</th>
			</tr>
		  </thead>
		  <tbody>
			{contacts.map((contact)=>(
			  <tr>
			  <td>{contact.id}</td>
			  <td>{contact.title}</td>
			  <td>{(contact.completed).toString()}</td>
			  <td><button>delete</button></td>
			</tr>
			)

			)}
			
			
		  </tbody>
		</table>
	   
</div>
);
};

export default AnnualReport;
