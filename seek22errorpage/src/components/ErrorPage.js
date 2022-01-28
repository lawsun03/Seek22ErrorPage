import React from "react";
import "../styles/ErrorPage.css";
import { urlLinks } from "../utils/constants";

const { backupPage } = urlLinks;

function ErrorPage() {
  return (
    <div className="error-page-main">
      <div className="col-1">
        <h1 className="h1-message">Error code: 500</h1>
        <p>
          You’re almost there click on{" "}
          <a className="backup-page-link" href={backupPage}>
            link
          </a>{" "}
          the to view the SEEK22 live broadcast.
        </p>
      </div>
      <div className="image-container col-2 flex justify-center">
        <img className="error-image" src="fish-2.png" alt="error" />
      </div>
    </div>
  );
}

export default ErrorPage;
