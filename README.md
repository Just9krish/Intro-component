# Frontend Mentor - Intro component with sign up form solution

This is a solution to the [Intro component with sign up form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-component-with-signup-form-5cf91bd49edda32581d28fd1). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say _"[Field Name] cannot be empty"_
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say _"Looks like this is not an email"_

### Screenshot

![](https://github.com/Just9krish/Intro-component/blob/6b62a6d5fca5b42e400370778d0902c1120267a5/design/desktop-design.jpg)

### Links

- Solution URL: [Click here](https://your-solution-url.com)
- Live Site URL: [Click here](https://intero-component-by-just9krish.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript
- ES6

### What I learned

```html
<input type="email" id="email" placeholder="Enter Address" />
<p id="emailText" style="visibility: hidden;">Email cannot be empty!</p>
>
```

```css
form p {
  color: var(--Red);
  font-size: 0.75rem;
  font-weight: 700;
  text-align: right;
  margin-top: 0;
  font-style: italic;
}
```

```js
const regexEmail =
  /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

if (email == "") {
  allFilled = false;
  emailText.style.visibility = "visible";
  emailIcon.classList.add("icon-error");
  emailIcon.style.border = "solid hsl(0, 100%, 74%) 2px";
  emailIcon.placeholder = "";
} else if (!regexEmail.test(email)) {
  allFilled = false;
  emailText.innerHTML = "Looks like this is not an email!";
  emailText.style.visibility = "visible";
} else {
  emailText.style.visibility = "hidden";
  emailText.style.visibility = "hidden";
  emailIcon.classList.remove("icon-error");
  emailIcon.style.border = "";
}
```

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
