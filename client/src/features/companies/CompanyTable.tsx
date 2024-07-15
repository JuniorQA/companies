import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { DataGrid } from '@mui/x-data-grid';
import type { GridColDef } from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { useAppDispatch, type RootState } from '../../store';
import { loadCompanies, removeCompany } from './CompaniesSlice';
import type { Company } from './companies';
import AddCompanyForm from './AddCompanyForm';

export default function CompanyTable(): JSX.Element {
  const companies = useSelector((state: RootState) => state.companies.CompaniesList);
  const dispatch = useAppDispatch();

  const [companyIds, setCompanyIds] = useState<Company['id'][]>([]);
  const [isAddCompanyFormVisible, setIsAddCompanyFormVisible] = useState<boolean>(false);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'title', headerName: 'Название', width: 300 },
    { field: 'address', headerName: 'Адрес', width: 300 },
  ];

  const handleDelete = (ids: Company['id'][]): void => {
    ids.forEach((id) => void dispatch(removeCompany(id)));
  };

  useEffect(() => {
    void dispatch(loadCompanies());
  }, [dispatch]);

  console.log(companyIds);

  return (
    <>
      <DataGrid
        rows={companies}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
        onRowSelectionModelChange={(ids) => {
          setCompanyIds(ids);
        }}
        // rowSelectionModel={0}
      />
      <div className="m-8 flex justify-between">
        {' '}
        <Button
          variant="contained"
          color="success"
          onClick={() => setIsAddCompanyFormVisible(!isAddCompanyFormVisible)}
        >
          Добавить
        </Button>
        <Button variant="outlined" color="error" onClick={() => handleDelete(companyIds)}>
          Удалить
        </Button>
      </div>
      {isAddCompanyFormVisible && <AddCompanyForm />}
    </>
  );
}
