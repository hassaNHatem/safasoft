import './confirm.css';
import { Link, useNavigate } from 'react-router-dom';

function Confirm(props) {
  const navigate = useNavigate()
  return (
    <div className="confirm">
      <h2>You're all set. Ready?</h2>
   <div className='confirm-content'>
        <h4>We will send a message for this e-mail</h4>
        <h6>{props.personalMail}</h6>
   </div>
   <div className='btns'>
        <Link to={'/scnd'} onClick={()=>{
            props.setActiveStep(1)
        }} className="btn"><button>Back</button></Link>
       <button className="confrim-btn" onClick={()=>{
        props.postData().then(()=>{
          //the navigate should only happen when the data correctly gets sent to the backend but for some reason the backend isnt responding 
          navigate('/congrats')
          props.clearAlldata()
          props.setActiveStep(0)

        })
        //these 3 functions should only be called inside the then 
        props.clearAlldata()
        props.setActiveStep(0)
        props.setStepper(false)
        navigate('/congrats')


       }}>Confirm</button>
        </div>
    </div>
   
  );
}

export default Confirm;