import './congrats.css';

function Congrats() {
  return (
    <div className="App">
   <div className='congrats'>
    <h5>Congratz , you successfully created your account</h5>
    <h5>We just sent you a confrimation email</h5>
    <h5>Please check your E-mail</h5>
    <h5 className='footer'>didnt recive it? </h5>
    <h5>Check your Spam folder or <span>Resend Email</span></h5>
   </div>
    </div>
  );
}

export default Congrats;