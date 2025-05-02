import { useState } from "react";

export const Form = () => {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSubmitted(true);
      }}
    >
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" type="text" placeholder="Enter your name" />
      <button type="submit">Submit</button>

      {submitted && <p data-testid="success-msg">Form submitted!</p>}
    </form>
  );
};
