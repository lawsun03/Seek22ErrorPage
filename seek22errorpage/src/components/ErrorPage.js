import React from "react";
import "../styles/ErrorPage.css";
import { urlLinks } from "../utils/constants";

const { backupPage } = urlLinks;

function ErrorPage() {
  return (
    <div className="error-page-main">
      <div className="col-1">
        <h1 className="h1-message">Oh No!</h1>
        <h2 className="h2-message">Well, this is unexpected...</h2>
        <h2 className="h2-message">
          Error code: 500 <br />
        </h2>
        <p>
          An error has occurred and we're working to fix the problem!
          <br />
          We'll be up and running shortly.
        </p>
        <p>
          Please visit our{" "}
          <a className="backup-page-link" href={backupPage}>
            website
          </a>{" "}
          for additional information.
        </p>
        <p>Thank you for your patience!</p>{" "}
      </div>
      <div className="col-2">
        <img className="error-image" src="placeholder1.png" alt="error" />
      </div>
    </div>
  );
}

export default ErrorPage;
