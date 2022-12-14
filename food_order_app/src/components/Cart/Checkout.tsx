import { useRef, useState, MouseEventHandler, FormEventHandler } from "react";

import styles from "./Checkout.module.css";

interface Props {
  onCancel: MouseEventHandler<HTMLButtonElement>;
}

// helper functions for form validation
const isEmpty = (value: string) => value.trim().length === 0;
const isFiveChars = (value: string) => value.trim().length === 5;
//---------------------------------------

const Checkout: React.FC<Props> = ({ onCancel }) => {
  const [formInputsValidity, setFormInputsValidity] = useState({
    name: true,
    street: true,
    city: true,
    postalCode: true,
  });

  // ref because we only validate when the form is submitted
  const nameRef = useRef<HTMLInputElement>(null);
  const streetRef = useRef<HTMLInputElement>(null);
  const cityRef = useRef<HTMLInputElement>(null);
  const postalCodeRef = useRef<HTMLInputElement>(null);
  //----------------------------------------------------------

  const submitHandler: FormEventHandler = (e) => {
    e.preventDefault();

    const entredName = nameRef.current!.value;
    const entredStreet = streetRef.current!.value;
    const entredCity = cityRef.current!.value;
    const entredPostalCode = postalCodeRef.current!.value;

    const enteredNameIsValid = !isEmpty(entredName);
    const enteredStreetIsValid = !isEmpty(entredStreet);
    const enteredCityIsValid = !isEmpty(entredCity);
    const enteredPostalCodeIsValid = isFiveChars(entredPostalCode);

    setFormInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      city: enteredCityIsValid,
      postalCode: enteredPostalCodeIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    // submit the cart data
  };

  const nameControlStyles = `${styles.control} ${
    formInputsValidity.name ? "" : styles.invalid
  }`;
  const streetControlStyles = `${styles.control} ${
    formInputsValidity.street ? "" : styles.invalid
  }`;

  const cityControlStyles = `${styles.control} ${
    formInputsValidity.city ? "" : styles.invalid
  }`;
  const postalCodeControlStyles = `${styles.control} ${
    formInputsValidity.postalCode ? "" : styles.invalid
  }`;
  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={nameControlStyles}>
        <label htmlFor="name">Your Name</label>
        <input type="text" id="name" ref={nameRef} />
        {!formInputsValidity.name && <p>Please enter a valid name</p>}
      </div>
      <div className={streetControlStyles}>
        <label htmlFor="street">Street</label>
        <input type="text" id="street" ref={streetRef} />
        {!formInputsValidity.street && <p>Please enter a valid street</p>}
      </div>
      <div className={cityControlStyles}>
        <label htmlFor="city">City</label>
        <input type="text" id="city" ref={cityRef} />
        {!formInputsValidity.city && <p>Please enter a valid city</p>}
      </div>
      <div className={postalCodeControlStyles}>
        <label htmlFor="postal">Postal Code</label>
        <input type="text" id="postal" ref={postalCodeRef} />
        {!formInputsValidity.postalCode && (
          <p>Please enter a valid postal code(5 characters long)</p>
        )}
      </div>
      <div className={styles.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button className={styles.submit}>Confirm</button>
      </div>
    </form>
  );
};

export default Checkout;
