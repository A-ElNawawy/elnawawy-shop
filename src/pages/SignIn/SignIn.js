import InputField from "./../../components/InputField/InputField";
//import Container from "./../../components/Container/Container";

import styles from "./SignIn.module.css";

const SignIn = ({ setAuthorized }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    setAuthorized(true);
  };

  return (
    <div className='SignIn'>
      {/*<Container>*/}
      <div className={styles.card}>
        <form onSubmit={handleSubmit} className={styles.form}>
          <InputField type='email' placeholder='Email' label='Email' value='' />
          <InputField
            type='password'
            placeholder='Password'
            label='Password'
            value=''
          />
          <InputField type='submit' value='Sign In' />
        </form>
      </div>
      {/*</Container>*/}
    </div>
  );
};

export default SignIn;
