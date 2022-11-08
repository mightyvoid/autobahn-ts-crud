import { Button } from '@mui/material';
import { log } from 'console';
import React, { useState, useEffect } from 'react';
import AppBar from './AppBar';
import UserCard from './CardComp';
import Form from './Form';





interface UserDetails {
    id: number;
    name: string;
}

const cardsStyle = {
    display:'flex',

    alignItems:'center',
    justifyContent:'center',
    
}


const DashBoard: React.FC = () => {
    let [userList, setUserList] = useState<UserDetails[]>([]);

    let url = "https://jsonplaceholder.typicode.com/users";
    useEffect(() => {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setUserList(data);
            })
            .catch((error) => {
                console.log("ERROR: ", error);
            });
    }, [url]);


    const onEdit = (dataID:String) =>{

    }

    const onDel =  async (dataID:String) =>{
        await fetch(`https://jsonplaceholder.typicode.com/users/${dataID}`, {
            method: "DELETE"
          })
            .then((response) => {
              if (response.status !== 200) {
          console.log("deleted");
          
              }
            })
            .catch((error) => console.log(error));
    }


    return ( 

        <div>
            <AppBar />
            <h4>List of users</h4>
            <div style={cardsStyle}>
                {userList.map((data) => (<>
                    <UserCard key={data.id} data={data} onEdit={onEdit} onDel={onDel}/>
                    </>                    
                ))
                }
            </div>

            <Form/>
        </div>
    )
}

export default DashBoard