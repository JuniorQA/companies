import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import CompanySlice from './features/companies/CompaniesSlice';

const store = configureStore({
  reducer: {
    companies: CompanySlice,
  },
});
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export type RootState = ReturnType<typeof store.getState>;
export default store;
