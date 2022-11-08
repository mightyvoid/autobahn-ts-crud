import React from 'react'
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { Box, Button, Card, TextField } from '@mui/material';

interface UserSubmitForm {
    username: string;
    email: string;
};

const Form: React.FC = () => {


    const {
        register,
        handleSubmit,
        control,
        reset,
        formState: { errors }
    } = useForm<UserSubmitForm>();

    const onSubmit = async (data: UserSubmitForm) => {
        console.log(JSON.stringify(data, null, 2));
        await fetch("https://jsonplaceholder.typicode.com/users", {
            method: "POST",
            body: JSON.stringify({
                name: data.username,
                email: data.email
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
            .then((response) => {
                console.log(response)
            })
            .catch((error) => console.log(error));
    };



    return (
        <>
            <Box sx={{ width: '50vw', height: '50wh', display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '2%' }}>
                <Card>
                    <h1>Form</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>

                        <Controller
                            name="username"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    label="User Name"
                                    variant="filled"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                            rules={{ required: 'User name required' }}

                        />

                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            render={({ field: { onChange, value }, fieldState: { error } }) => (
                                <TextField
                                    label="email"
                                    variant="filled"
                                    value={value}
                                    onChange={onChange}
                                    error={!!error}
                                    helperText={error ? error.message : null}
                                />
                            )}
                            rules={{ required: 'Email required' }}
                        />
                        {/* <TextField id="outlined-basic" label="User Name" variant="outlined" name='username' inputRef={register} sx={{margin:'1%'}} />
                        <TextField id="outlined-basic" label="Email" variant="outlined" name='email' inputRef={register} sx={{margin:'1%'}}/> */}

                        <Button type='submit' sx={{ margin: '1%' }} variant="outlined">Submit</Button>

                    </form>
                </Card>
            </Box>
        </>

    )
}

export default Form