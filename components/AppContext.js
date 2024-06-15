/* eslint-disable prettier/prettier */
// AppContext.js
import React, {createContext, useState, useContext} from 'react';

const AppContext = createContext();

export const AppProvider = ({children}) => {
  const [docName, setDocName] = useState('');
  const [docNmc, setDocNmc] = useState('');
  const [clinicId, setClinicId] = useState(0);

  return (
    <AppContext.Provider
      value={{
        docNmc,
        setDocNmc,
        docName,
        setDocName,
        clinicId,
        setClinicId,
      }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
