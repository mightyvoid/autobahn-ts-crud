import * as React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box'
import { Delete, Edit } from '@mui/icons-material';

interface UserDetails {
    data: { id: number; name: string };
    key: any;
    onEdit:Function;
    onDel:Function;
}


const CardComp = (props: UserDetails) => {
    const {onEdit,onDel} =props;
    const { id, name } = props.data;
    console.log(props);
    return (
        <>
        <Box 
        sx={{margin:'1%',width:'5vw'}}
        >
            <Card>
                <div>
                    <h6>
                        {id} - {name}
                    </h6>
                    <Edit onClick={()=>onEdit()}></Edit>
                    <Delete onClick={()=>onDel()}></Delete>
                </div>
            </Card>
        </Box>
        </>
    )

}

export default CardComp