import React, { useState } from 'react'

export default function CustomerList({ customers }) {
    function renderCustomers() {
        return customers.map((customer, i) => {
            return <li key={i}>{customer.name}</li>
        })
    }

    return (
        <div>
            <ul>
                {renderCustomers()}
            </ul>
        </div>
    )
}
