import './confirm.css';
import { Link } from 'react-router-dom';

function Confirm() {
  return (
    <div className="confirm">
      <h2>You're all set. Ready?</h2>
   <div className='confirm-content'>
        <h4>We will send a message for this e-mail</h4>
        <h6>example@example.com</h6>
   </div>
   <div className='btns'>
        <Link to={'/scnd'} className="btn"><button>Back</button></Link>
        <Link to={'/congrats'} className="btn"><button>Confirm</button></Link></div>
    </div>
   
  );
}

export default Confirm;