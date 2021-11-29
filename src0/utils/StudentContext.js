import React, { createContext, useContext } from 'react';

// Initialize new context for students
const StudentContext = createContext();

// We create a custom hook to provide immediate usage of the student context in other components
export const useStudentContext = () => useContext(StudentContext);

// StudentProvider is a function that will return a provider component that makes global state available
export const StudentProvider = ({ children }) => {
  const initialState = {
    students: [
      {
        id:1,
        name:"Joe",
        major:"Marine Biology"
      }, {
        id:2,
        name:"Arra",
        major:"Nutrition"
      }
    ],
  };
  return (
    <StudentContext.Provider value={initialState}>
      {children}
    </StudentContext.Provider>
  );
};
