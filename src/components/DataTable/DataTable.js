import React, {useState, useEffect} from 'react'

export default function DataTable({ data }) {

    return <table cellPadding={5} cellSpacing={5}>
        <thead>
            <tr>
                <th scope="col">Photo</th>
                <th scope="col">Name</th>
                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">DOB</th>
                <th scope="col">City</th>
                <th scope="col">State/Province</th>
                <th scope="col">Country</th>
            </tr>
        </thead>
        <tbody>
        {[...data].map((result, i) => (
            <tr key={i}>
              <td><img alt="User" className="img-fluid round shadow ml-2" src={result.picture.medium} /></td>
              <td>{`${result.name.first} ${result.name.last}`}</td>
              <td>{result.cell}</td>
              <td>{result.email}</td>
              <td>{result.dob.date.substring(0, 10).split("-").reverse().join("-")}</td>
              <td>{result.location.city}</td>
              <td>{result.location.state}</td>
              <td>{result.location.country}</td>
            </tr>
          ))}
        </tbody>
    </table>
}
