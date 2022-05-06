import { Routes, Route } from 'react-router-dom'

import { Login } from './components/views/Login/Login';
import { Register } from './components/views/Register/Register';
import { Tasks } from './components/views/Tasks/Tasks';
import { Error404 } from './components/views/Error404/Error404';
import './App.css';

export const App = () =>
  <Routes>
    <Route path="/register" element={<Register />} />
    <Route path="/login" element={<Login />} />
    <Route path="/" element={<Tasks />} />
    <Route path="*" element={<Error404 />} />
  </Routes>