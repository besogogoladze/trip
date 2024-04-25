import React from "react";
import Error404 from "../../Images/Error404.jpeg";

function ErrorPage() {
  return (
    <div>
      <img style={{ width: "100%" }} src={Error404} alt="Error" />
    </div>
  );
}

export default ErrorPage;
