import React, { useState } from 'react';
import SignUpForm from '../components/SignUpForm';

const SignUp = () => {
  const [showForm, setShowForm] = useState(false); 

  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  return (
    <div>
      {!showForm ? (
        <button onClick={openForm}>Sign Up</button> 
      ) : (
        <div>
          <button onClick={closeForm}>Close</button> 
          <SignUpForm />
        </div>
      )}
    </div>
  );
};

export default SignUp;
