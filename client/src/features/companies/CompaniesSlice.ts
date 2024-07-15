/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as api from './api';
import type CompanyState from './State';
import type { Company, CompanyWithoutId } from './companies';

const initialState: CompanyState = {
  CompaniesList: [],
};

// export const updateBarista = createAsyncThunk('barista/update', (updatebarista: NewBarista) => {
//   return api.fetchUpdateBarista(updatebarista);
// });

export const loadCompanies = createAsyncThunk('companies/load', () => api.fetchLoadCompanies());

// newFeatures

// export const updatePhotoBarista = createAsyncThunk('barista/update/update', (selectedFile) =>
//   api.fetchUpdatePhotoBarista(selectedFile),
// );

export const addCompany = createAsyncThunk('companies/add', (newCompany: CompanyWithoutId) =>
  api.addCompany(newCompany),
);
// export const loadFreeDatesBarista = createAsyncThunk('barista/freeDate/load', () =>
//   api.loadFreeDates(),
// );
export const removeCompany = createAsyncThunk('companies/remove', (id: Company['id']) =>
  api.removeCompany(id),
);

const CompanySlice = createSlice({
  name: 'companies',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(loadCompanies.fulfilled, (state, action) => {
      state.CompaniesList = action.payload;
    });
    builder.addCase(removeCompany.fulfilled, (state, action) => {
      state.CompaniesList = state.CompaniesList.filter((el) => el.id !== action.payload);
    });
    builder.addCase(addCompany.fulfilled, (state, action) => {
      state.CompaniesList.push(action.payload);
    });
    builder.addCase(addCompany.rejected, (state, action) => {
      state.error = action.error.message || 'Failed to add company';
    });
  },
});
export default CompanySlice.reducer;
