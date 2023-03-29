# Frontend Mentor - Multi-step form solution

This project is my solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ) on Frontend Mentor. This challenge provides a realistic project that can help improve coding skills.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My Approach](#my-process)
  - [react and styled-components](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

The main objective of this project is to create a multi-step form that allows users to complete each step in the sequence, go back to the previous step to update their selections, see a summary of their selections on the final step and confirm their order. The challenge also includes implementing responsive design and hover/focus states for all interactive elements. The form should also provide form validation messages if a field is missed, the email address is not formatted correctly, or if a step is submitted without making any selection.

### Screenshot

![](https://i.ibb.co/5kZYQQd/Multi-step-form-desk.png)

### Links

- GitHub Repo URL: [Click Here](https://github.com/Ravip925/Multi-Step-Form-frontend)
- Live Site URL: [Click Here](https://multi-step-form-frontend-ravip925.vercel.app/)

## My Approach

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Styled Components](https://styled-components.com/) - For styles

### What I learned

<p>This project helped me reinforce my knowledge and improve my skills in React and Styled Components. I also learned how to create a multi-step form that provides form validation messages and allows users to go back to previous steps to update their selections. Below are some examples of code snippets I'm proud of:</p>
<code>
const navigation = {
    previous: () => setStep(step => step - 1),
    next: () => setStep(step => step + 1),
    go: step => setStep(step),
};
</br>
const handleNext = () => {
const isValid = validate();
  if (isValid) {
    navigation.next();
  }
};
</br>
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
</code>
</br>

In terms of design, I gained experience using a mobile-first workflow and implementing responsive layouts using Flexbox and CSS Grid. I also learned how to use Styled Components to style my React components and sweetalert2 implementation, which helped to keep my CSS organized and easy to maintain.

### Continued development

In future projects, I would like to continue focusing on improving my skills in React and exploring new front-end technologies and frameworks. I also want to keep practicing my design skills and learn more about UI/UX design principles.

### Useful resources

During this project, I found the following resources to be particularly helpful:

- [React documentation](https://legacy.reactjs.org/docs/getting-started.html) - This is always a great resource when working with React.
- [Styled Components documentation](https://styled-components.com/docs) - The Styled Components documentation is very thorough and provides clear examples.
- [CSS-Tricks ](https://css-tricks.com/) - This website has a lot of helpful articles and tutorials on front-end development topics.

## Author

- Website - [Ravichandra Patil](https://react-portfolio-ravi.netlify.app/)
- Frontend Mentor - [Ravip925](https://www.frontendmentor.io/profile/Ravip925)
- Twitter - [@Ravipatiiil](https://twitter.com/Ravipatiiil)

## Acknowledgments

I would like to thank the Frontend Mentor team for creating this challenge and providing a platform for developers to practice their skills. I also want to thank my friends and colleagues for their support and feedback during this project.
