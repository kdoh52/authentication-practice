import React, { useState, useEffect } from 'react'
import CustomerForm from './CustomerForm'
import CustomerList from './CustomerList'
import axios from "axios"

export default function Customers() {
    const [customers, setCustomers] = useState([]);

    async function getCustomers() {
        const customersRes = await axios.get("http://localhost:3001/customer/");
        setCustomers(customersRes.data);
    }

    useEffect(() => {
        getCustomers()
    }, [])

    return (
        <div>
            <CustomerForm getCustomers={getCustomers}/>
            <CustomerList customers={customers}/>
        </div>
    )
}
