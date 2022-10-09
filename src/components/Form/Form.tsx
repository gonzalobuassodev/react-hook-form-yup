import React, { useTransition } from 'react';
import { useForm } from 'react-hook-form';
import { object, string } from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, TextField } from '@mui/material';
import { Box } from '@mui/system';

const formSchema = object().shape({
  username: string()
    .matches(
      /^([^0-9_-]*)$/,
      'First name should be not contain numbers or special characters'
    )
    .required('Username is a required field'),
  password: string().required('Password is a required field'),
  email: string()
    .email('Invalid email address')
    .required('Email is a required field.'),
});

export interface FormInterface {}

const Form: React.FC<FormInterface> = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'onBlur',
    resolver: yupResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
      email: '',
    },
  });

  const onSubmit = () => {
    console.log('onSubmit');
  };
  return (
    <Box
      onSubmit={handleSubmit(onSubmit)}
      sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}
    >
      <TextField
        {...register('username')}
        type='text'
        name='username'
        placeholder='username'
        variant='outlined'
        id='username'
        label='Username'
        error={!!errors.username}
        helperText={errors?.username?.message}
      />
      <TextField
        {...register('password')}
        type='text'
        name='password'
        placeholder='password'
        variant='outlined'
        id='password'
        label='Password'
        error={!!errors.password}
        helperText={errors?.password?.message}
      />
      <TextField
        {...register('email')}
        type='text'
        name='email'
        placeholder='email'
        variant='outlined'
        id='email'
        label='Email'
        error={!!errors.email}
        helperText={errors?.email?.message}
      />
      <Button type='submit' fullWidth variant='contained' color='primary'>
        Save
      </Button>
    </Box>
  );
};

export default Form;
