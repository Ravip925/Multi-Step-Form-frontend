import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.1rem;
  padding: 2rem;
`;
const Box = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const Title = styled.h1`
    font-weight: 700;
    color: hsl(213, 96%, 18%);

`;
const Desc = styled.p`
    text-align: center;
    line-height: 30px;
    font-weight: 500;
    color: #7c7b7b;
`;


const Icon = styled.div`
    width: 100px;
    height: 100px;
    background-image: url(${props=>props.path});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`;

const ThankYou = () => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <Icon path={"/images/icon-thank-you.svg"}></Icon>
        </Box>
        <Box>
          <Title>Thank You!</Title>
        </Box>
        <Box>
          <Desc>Thanks for confirming your subscription! We hope you have fun using our platform. if you ever need support, please feel free to email us at support@loremgaming.com</Desc>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default ThankYou;
