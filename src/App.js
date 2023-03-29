import React, { useState } from 'react';
import styled from 'styled-components';
import PersonalInfo from './components/PersonalInfo';
import PlanSelection from './components/PlanSelection';
import AddOnSelection from './components/AddOnSelection';
import Finish from './components/Finish';
import SideBar from './components/SideBar';
import './App.css'
import Swal from 'sweetalert2';
import ThankYou from './components/ThankYou';

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #E3FDFD;
  display: grid;
  place-items: center;
`;
const AppWrapper = styled.div`
  width: 65%;
  height: 80vh;
  border-radius: 15px;
  background-color: white;
  box-shadow: 10px 10px 20px 8px rgba(0,0,0,0.2);
  display: flex;
  padding: 1rem;
  overflow: hidden;
`;
const MainContent = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;

`;
const ButtonsContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  display: ${props=>props.step === 4 && "none"};
 
`;

const Button = styled.button`
  appearance: button;
  backface-visibility: hidden;
  background-color: #0F4C75;
  border-radius: 6px;
  border-width: 0;
  box-shadow: rgba(50, 50, 93, .1) 0 0 0 1px inset,rgba(50, 50, 93, .1) 0 2px 5px 0,rgba(0, 0, 0, .07) 0 1px 1px 0;
  color: #fff;
  cursor: pointer;
  font-size: 100%;
  height: 44px;
  line-height: 1.15;
  margin: 12px 0 0;
  outline: none;
  overflow: hidden;
  padding: 0 20px;
  position: relative;
  text-align: center;
  text-transform: none;
  transform: translateZ(0);
  transition: all .2s,box-shadow .08s ease-in;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  width: 120px;

&:disabled {
  cursor: default;
}
`
const GoBack = styled.button`
  width: 120px;
  height: 46px;
  background: transparent;
  color: #323232;
  border: none;
  font-weight: 700;
  padding: 0 20px;
  font-size: 1.1rem;
  border-radius: 50px;
  cursor: pointer;
  &:hover{
    background-color: #e6e6e6;
  }

`

const App = () => {
  const [formData, setFormData] = useState({
    userName: '',
    phoneNum: '',
    email: '',
    plan: '',
    addons: {
      onlineService: false,
      customize: false,
      largerStorage: false
    },
  });
  
  const [errors, setErrors] = useState({});
  const [billingCycle, setBillingCycle] = useState("monthly");
  const [step, setStep] = useState(0);

  const handleChange = ({ currentTarget: input }) => {
    setFormData({ ...formData, [input.name]: input.value });
  };

  const navigation = {
    previous: () => setStep(step => step - 1),
    next: () => setStep(step => step + 1),
    go: step => setStep(step),
  };

  const validate = () => {
    const { userName, phoneNum, email } = formData;
    const errors = {};

    if (!userName) {
      errors.userName = "Username is required";
    }

    if (!phoneNum) {
      errors.phoneNum = "Phone number is required";
    } else if (!/^\d{10}$/.test(phoneNum)) {
      errors.phoneNum = "Invalid phone number";
    }

    if (!email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid email address";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleNext = () => {
    const isValid = validate();
    if (isValid) {
      navigation.next();
    }
  };

  const handleBillingChange = () => {
    setBillingCycle((prevBillingCycle) =>
      prevBillingCycle === "monthly" ? "yearly" : "monthly"
    );
  };

  const steps = [
    { component: <PersonalInfo errors={errors} formData={formData} handleChange={handleChange} navigation={navigation} /> },
    { component: <PlanSelection formData={formData} handleBillingChange={handleBillingChange} handleChange={handleChange} billingCycle={billingCycle} /> },
    { component: <AddOnSelection formData={formData} billingCycle={billingCycle} setFormData={setFormData} navigation={navigation} /> },
    { component: <Finish formData={formData} billingCycle={billingCycle} navigation={navigation} /> },
    { component: <ThankYou/> },
  ];

  const { component } = steps[step];

  const handleNextPlan = () => {
    const { plan } = formData;
    !plan ? Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Please select a plan!',
    }) : navigation.next();
  };


  return (
    <AppContainer>
      <AppWrapper>
        <SideBar step={step} steps={steps} />
        <MainContent>
          {component}
          <ButtonsContainer step={step}>
            {step > 0 && <GoBack style={{ justifySelf: "flex-end" }} onClick={navigation.previous}>Go Back</GoBack>}
            {step === 0 || step === 2 ? (
              <Button onClick={handleNext}>Next Step</Button>
            ) : (
              step === 1 && <Button onClick={handleNextPlan}>Next Step</Button>
            )}
            {step === 3 && <Button onClick={() => navigation.go(4)}>Submit</Button>}
          </ButtonsContainer>
        </MainContent>
      </AppWrapper>
    </AppContainer>
  );
};

export default App;