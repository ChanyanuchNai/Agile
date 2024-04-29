import axios from 'axios';
import React, { useState, useEffect } from 'react';
import './style/AdminTable.css';

function AdminTable() {
    const [id, setId] = useState('') //don't use
    const [firstname, setFirstName] = useState('') //don't use
    const [lastname, setLastName] = useState('') //don't use

    const [permission_level, setPermission_Level] = useState([])
    const [newPermission_level, setNewPermission_level] = useState('');


    const [adminList, setAdminList] = useState([]);

    useEffect(() => {
      getAdmin();
    }, []);

    const getAdmin = () => {
      axios.get('http://localhost:3001/alladmin').then((response) => {
        setAdminList(response.data)
        console.log(response.data);
      })
    }
    
    const updatePermission = (id) => {
      axios.push('http://localhost:3001/update', {permission_level, newPermission_level, id}).then((response) => {
        adminList.map((val) => {
          return val.id == id ? {
            id: val.id,
            permission_level: val.permission_level
          } : val
        })
      })
    }




    //CREATE DELETE METHOD 
    //CREATE AUTHORIZATION
    //CREATE DEMO FORM TO TEST
    return (
    <div class="header-table">
      <table>
        <thead>
          <tr>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>


          </tr>
        </thead>
        <tbody>
          {adminList.map(admin => (
            <tr key={admin.ID}>
            
              <td class="id-field">{admin.ID}</td>
              <td class="name-field">{admin.FirstName+" "+admin.LastName}</td>
              <td class="permission-field">{admin.Permission_Level}</td>
              
              <td class="owner-field"><input class="largerCheckbox" type="checkbox" 
                checked={true} 
                value={admin.Permission_Level}
                onChange={(event) => {
                  //setNewPermission_level(event.target.value)
                  //updatePermission(admin.ID)
                }}/></td>
              <td class="form-field"><input class="largerCheckbox" type="checkbox" 
                checked={admin.Permission_Level === ""? true: null} 
                value={admin.Permission_Level}/></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div> 

    )

}
export default AdminTable;