import { Box, Button, TextField } from '@mui/material';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import type { RootState } from '../../store';
import { useAppDispatch } from '../../store';
import type { Company } from './companies';
import { addCompany } from './CompaniesSlice';

export default function AddCompanyForm(): JSX.Element {
  const companies = useSelector((state: RootState) => state.companies.CompaniesList);
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState<Company['title']>('');
  const [address, setAddress] = useState<Company['address']>('');

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    void dispatch(addCompany({ title, address }));
  };

  console.log(companies);

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-center items-center">
        <TextField
          required
          id="outlined-required"
          label="Название"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
        />
        <TextField
          required
          id="outlined-disabled"
          label="Адрес"
          onChange={(e) => setAddress(e.target.value)}
          value={address}
        />
        <Button sx={{ height: 1 / 2 }} variant="contained" color="success" type="submit">
          ОК
        </Button>
      </div>
    </Box>
  );
}
