import { Link } from 'react-router-dom';
import './scnd.css';

function ScndPage() {
  return (
    <div className="scnd">
   <h2>Verify your company</h2>
   <div className='scnd-form'>
    <input placeholder='Enter your company Name'/>
    <input placeholder='Enter your Adress'/>
    <input placeholder='Enter your Business Email' type={'email'}/>
    <div className='country-city'>
        <select placeholder='country'>
            <option>Country</option>
        </select>
        <select placeholder='country'>
            <option>City</option>
        </select>
    </div>
    <div className='phone-numbers'>
    <input type={'number'} placeholder={'Enter your company phone number'}/>
    <input type={'number'} placeholder={'Enter your company phone number'}/>
    </div>
   </div>
   <div className='btns'>
        <Link to={'/'} className="btn"><button>Back</button></Link>
        <Link to={'/scnd'} className="btn"><button>Next</button></Link></div>
    </div>
  );
}

export default ScndPage;