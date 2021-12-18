import { useState } from "react";

import Layout from "./layouts/Layout/Layout";

import SignIn from "./pages/SignIn/SignIn";
import Dashboard from "./pages/Dashboard/Dashboard";

const App = () => {
  const [Authorized, setAuthorized] = useState(false);

  return (
    <div className='App'>
      <Layout>
        {Authorized ? (
          <Dashboard setAuthorized={setAuthorized} />
        ) : (
          <SignIn setAuthorized={setAuthorized} />
        )}
      </Layout>
    </div>
  );
};

export default App;
