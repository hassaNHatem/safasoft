import { Link } from 'react-router-dom';
import './first.css';

function FirstPage(props) {
  return (
    <div className="first">
   <h2>Tell us more about you</h2>
   <div className='first-form'>
    <input placeholder='Enter your full Name' value={props.name} onChange={(e)=>props.setName(e.target.value)}/>
    <input placeholder='Enter your Personal email' type={'email'}/>
    <div className='country-phone'>
        <select placeholder='country'>
            <option>Country</option>
        </select>
        <input type={'number'}/>
    </div>
    <input type={'password'} placeholder={'Choose a password'}/>
    <input placeholder='Repeat your password'/>
   </div>
   <Link to={'/scnd'} className="btn"><button>Next</button></Link>
    </div>
  );
}

export default FirstPage;