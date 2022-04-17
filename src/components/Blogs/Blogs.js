import React from "react";

const Blogs = () => {
  return (
    <div className="container py-5">
        <h1 className="text-center pb-5">Welcome To Our Blog</h1>
      <div className="card p-4 mb-5">
        <h3>Difference between authorization and authentication?</h3>
        <p
          style={{ fontWeight: "500", fontSize: "18px" }}
          className="text-muted"
        >
          <strong>Authentication: </strong>The process of verifying the user's
          email/id and password in an organization is called authentication.
          <br />
          <br />
          <strong>Authorization: </strong> Determining which employee has has
          access is called authorization. Someone who you gave a permission for
          doing any work or using any resources is authorization.
          <br />
          <br />
          Authentication is the process of verifying who someone is and on the
          other hand Authorization is the process of verifying what specific
          application. <br />
        </p>
      </div>
      <div className="card p-4 mb-5">
        <h3>
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h3>
        <p
          style={{ fontWeight: "500", fontSize: "18px" }}
          className="text-muted"
        >
          Firebase authentication gives us backend services which are easy to
          use and it is an ready-made UI libraries to authenticate any user to
          our app. <br />
          <br />
          There are some of other options to implement authentication,
          <li>Kuzzle</li>
          <li>Flutter</li>
          <li>NativeScript</li>
          <li>RxDB</li>
          <li>Back4App</li>
          <li>Parse</li>
          These are other options to implement authentication.
        </p>
      </div>
      <div className="card p-4 mb-5">
        <h3>
          What other services does firebase provide other than authentication?
        </h3>
        <p
          style={{ fontWeight: "500", fontSize: "18px" }}
          className="text-muted"
        >
          Firebase is a platform developed by google for creating mobile and web
          application. Firebase provides others services other than
          authentication. Some of service list are blew,
          <li>Cloud Firestore</li>
          <li>Cloud Functions</li>
          <li>Hosting</li>
          <li>Cloud Storage</li>
          <li>Google Analytics</li>
          <li>Predictions</li>
          <li>Cloud Messaging</li>
          <li>Dynamic Links</li>
          <li>Remote Config</li>
          Firebase provides these services beside authentication.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
