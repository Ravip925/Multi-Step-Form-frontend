import { Checkbox } from "@mui/material";
import styled from "styled-components";

const Container = styled.div`
  flex: 2;
  width: 100%;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Wrapper = styled.div`
  width: 79%;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
`;
const Title = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  p {
    color: #6b6b6b;
  }
`;

const BoxContainer = styled.div`
  flex: 1;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  margin-bottom: 20px;
`;
const Boxes = styled.div`
  width: 100%;
  height: 70px;
  border-radius: 10px;
  border: 1px solid #aeaeae;
  display: flex;
  overflow: hidden;
  &:hover {
    border-color: blue;
  }
`;
const CheckBox = styled.div`
  flex: 0.3;
  height: 100%;
  display: grid;
  place-items: center;
`;
const TextFields = styled.div`
  flex: 1.5;
  padding-left: 0.5rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5px;
`;
const Price = styled.div`
  flex: 0.45;
  height: 100%;
  color: #1e568f;
  display: grid;
  place-items: center;
`;
const Text = styled.p`
  font-weight: 550;
  font-size: 0.95rem;
  color: hsl(213, 96%, 18%);
`;
const Desc = styled.p`
  font-size: 0.85rem;
  color: #6e6e6e;
`;

const AddOnSelection = ({ formData, setFormData, billingCycle }) => {
  const { addons } = formData;

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      addons: {
        ...prevState.addons,
        [name]: checked,
      },
    }));
  };

  const onlineServicePrice = billingCycle === "monthly" ? "1" : "10";
  const largerStoragePrice = billingCycle === "monthly" ? "2" : "20";
  const customizePrice = billingCycle === "monthly" ? "2" : "20";

  return (
    <Container>
      <Wrapper>
        <Title>
          <h1>Pick add-ons</h1>
          <p>Add-ons help enhance your gaming experience.</p>
        </Title>
        <BoxContainer>
          <Boxes>
            <CheckBox>
              <Checkbox
                name="onlineService"
                id="onlineService"
                defaultChecked={addons?.onlineService}
                onChange={handleCheckboxChange}
              />
            </CheckBox>
            <TextFields>
              <Text>Online Service</Text>
              <Desc>Access to multiplayer games</Desc>
            </TextFields>
            <Price>{`+$${onlineServicePrice}/${billingCycle === "monthly" ? "mo" : "yr"}`}</Price>
          </Boxes>
          <Boxes>
            <CheckBox>
              <Checkbox
                name="largerStorage"
                id="largerStorage"
                defaultChecked={addons?.largerStorage}
                onChange={handleCheckboxChange}
              />
            </CheckBox>
            <TextFields>
              <Text>Larger Storage</Text>
              <Desc>Extra 1TB of cloud save</Desc>
            </TextFields>
            <Price>{`+$${largerStoragePrice}/${billingCycle === "monthly" ? "mo" : "yr"}`}</Price>
          </Boxes>
          <Boxes>
            <CheckBox>
              <Checkbox
                name="customize"
                id="customize"
                defaultChecked={addons?.customize}
                onChange={handleCheckboxChange}
              />
            </CheckBox>
            <TextFields>
              <Text>Customizable profile</Text>
              <Desc>Custome theme on your profile</Desc>
            </TextFields>
            <Price>{`+$${customizePrice}/${billingCycle === "monthly" ? "mo" : "yr"}`}</Price>
          </Boxes>
        </BoxContainer>
      </Wrapper>
    </Container>
  );
};

export default AddOnSelection;
