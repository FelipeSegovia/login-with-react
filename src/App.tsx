import "./App.css";
import GoogleLogin from "react-google-login";
import { gapi } from "gapi-script";

function App() {

  const start = () => {
    gapi.client.init({
      clientId:
        "77647987925-c99vslf2bu2ikdb3d9r79fhev7ba6p3b.apps.googleusercontent.com",
      scope: "",
    });
  };

  gapi.load("client:auth2", start);

  const responseGoogle = (response: any) => {
    console.log(response);
  };

  return (
    <>
      <div>
        <GoogleLogin
          clientId="77647987925-oha6sdchmld7oo4uo4goi9ng9oafmcnl.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </>
  );
}

export default App;
