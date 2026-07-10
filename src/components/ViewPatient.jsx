import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const ViewPatient = () => {
     const[data,changeData]=useState([ ])
     const fetchData = () => {
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/hospital-data.json").then(

            (respose) => {
                changeData(respose.data)
            }
        ).catch()
     }
     useEffect(
        ()=>{
            fetchData()
        }
     )
  return (
    <div>
        <NavigationBar/>

<table class="table">
  <thead>
    <tr>
      <th scope="col">PatientID</th>
      <th scope="col">Name</th>
      <th scope="col">Age</th>
      <th scope="col">Gender</th>
      <th scope="col">BloodGroup</th>
      <th scope="col">Doctor</th>
      <th scope="col">Room</th>      
      <th scope="col">MobileNumber</th>      

    </tr>
  </thead>
  <tbody>
    {data.map(
    (value,index)=>{
      return(
    <tr>
      <th scope="row">{value.patientId}</th>
      <td>{value.name}</td>
      <td>{value.age}</td>
      <td>{value.gender}</td>
      <td>{value.bloodGroup}</td>
      <td>{value.doctor}</td>
      <td>{value.roomNo}</td>
      <td>{value.mobile}</td>
    </tr>
    )
    }
  )}
  </tbody>
</table>

    </div>
  )
}

export default ViewPatient