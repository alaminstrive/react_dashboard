import { FormEvent, useState } from 'react';
import { AccountForm } from './AccountForm';
import { AddressForm } from './AddressForm';
import { useMultistepForm } from './useMultistepForm';
import { UserForm } from './UserForm';
import Button from '@mui/material/Button';

import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function MyForm() {
  type FormData = {
    firstName: string;
    lastName: string;
    age: string;
    street: string;
    city: string;
    state: string;
    zip: string;
    email: string;
    password: string;
  };

  const INITIAL_DATA: FormData = {
    firstName: '',
    lastName: '',
    age: '',
    street: '',
    city: '',
    state: '',
    zip: '',
    email: '',
    password: ''
  };

  const stepsName = [
    'User Details',
    'Address Details',
    'Account Creation'
  ];

  const [data, setData] = useState(INITIAL_DATA);

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }

  const {
    steps,
    currentStepIndex,
    activeStep,
    isFirstStep,
    isLastStep,
    back,
    next,
    handleNext,
    handleBack,
    handleReset,
    handleSkip
  } = useMultistepForm([
    <UserForm {...data} updateFields={updateFields} key="1" />,
    <AddressForm {...data} updateFields={updateFields} key="2" />,
    <AccountForm {...data} updateFields={updateFields} key="3" />
  ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert('Successful Account Creation');
    console.log(data, 'datasedrfsd');
  }

  return (
    <>
      <Stepper activeStep={currentStepIndex} style={{background:"transparent"}}>
        {stepsName.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>


      <div
        style={{
          position: 'relative',
          background: 'white',
          border: '1px solid black',
          padding: '2rem',
          margin: '1rem',
          borderRadius: '.5rem',
          fontFamily: 'Arial',
          maxWidth: 'max-content'
        }}
      >
        <form onSubmit={onSubmit}>
          <div style={{ position: 'absolute', top: '.5rem', right: '.5rem' }}>
            {currentStepIndex + 1} / {steps.length}
          </div>
          {activeStep}
          <div
            style={{
              marginTop: '1rem',
              display: 'flex',
              gap: '.5rem',
              justifyContent: 'flex-end'
            }}
          >
            
            {!isFirstStep && (
              <Button variant="contained" onClick={back}>
                Back
              </Button>
            )}
            <Button variant="contained" type="submit">
              {' '}
              {isLastStep ? 'Submit' : 'Next'}{' '}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default MyForm;
