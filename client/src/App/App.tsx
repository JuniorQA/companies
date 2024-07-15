import React, { useEffect } from 'react';
import './App.css';
import { Route, Routes } from 'react-router';
import { useSelector } from 'react-redux';
import Layout from './Layout';

import type { RootState } from '../store';
import { useAppDispatch } from '../store';

import MainPage from './MainPage';

function App(): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<MainPage />} />
      </Route>
    </Routes>
  );
}

export default App;
