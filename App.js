import React from 'react';
import { StatusBar } from 'expo-status-bar';
import Routes from './routes/index';

export default function App() {
  return (
    <>
      <StatusBar />
      <Routes />
    </>
  );
}