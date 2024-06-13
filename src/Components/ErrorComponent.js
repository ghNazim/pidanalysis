import React from "react";

function ErrorComponent({ text }) {
  return (
    <div class="alert alert-danger" role="alert">
      Oh oh, Looks like something is wrong Message: <br />
      <strong>{text}</strong>
    </div>
  );
}

export default ErrorComponent;
