import './App.css';
import React, { ReactNode, useState } from 'react';
import AuthProvider from './provider/authProvider';
import Routes from './routes';
import { SnackbarProvider } from "notistack";
import { MyGlobalContext } from "./utils/global";

function App() {

  const [ isEditingTask, setIsEditingTask ] = useState<boolean>(false);
  const [ selectedTaskInput, setSelectedTaskInput ] = useState<string | null>(null);
  const [ refetchTaskStatus, setRefetchTaskStatus ] = useState<number>(0);
  const [ isLoading, setIsLoading ] = useState<boolean>(false);

  return (
    <div className="App">
      <AuthProvider>
        <SnackbarProvider maxSnack={3}>
          <MyGlobalContext.Provider value={{
            isEditingTask, setIsEditingTask, 
            selectedTaskInput, setSelectedTaskInput, 
            refetchTaskStatus, setRefetchTaskStatus, 
            isLoading, setIsLoading
            }}>
            <Routes />
          </MyGlobalContext.Provider>
        </SnackbarProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
