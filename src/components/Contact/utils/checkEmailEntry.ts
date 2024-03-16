import { ChangeEvent } from 'react';

export const checkEmailEntry = (
  e: ChangeEvent<HTMLInputElement>,
  errorMessageRef: { current: { style: { opacity: string } } },
  emailInputRef: { current: { style: { outlineColor: string } } }
): void => {
  const email = e.target.value;
  const regExp =
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
  const verificar = regExp.test(email);

  //FIRST CHECK IF THE INPUT VALUE IS A VALID ADRRESS EMAIL
  if (verificar) {
    errorMessageRef.current.style.opacity = '0';
    emailInputRef.current.style.outlineColor = '#93c5fd';

    //THEN CHECK IF THE EMAIL VALUE LENGTH IS NOT NULL
  } else if (!e.target.value) {
    errorMessageRef.current.style.opacity = '0';
    emailInputRef.current.style.outlineColor = '#93c5fd';
  } else {
    errorMessageRef.current.style.opacity = '1';
    emailInputRef.current.style.outlineColor = 'red';
  }
};
