import { Link, useNavigate } from 'react-router-dom';
import './first.css';
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css';
import {AiOutlineEyeInvisible , AiOutlineEye} from 'react-icons/ai'
import validator from 'validator';
function FirstPage(props) {

  const pass1icon = props.password1Visable?<AiOutlineEyeInvisible/>:<AiOutlineEye/>
  const pass2icon = props.password2Visable?<AiOutlineEyeInvisible/>:<AiOutlineEye/>
  let navigate = useNavigate()
  let validphone = isValidPhoneNumber(String(props.personalPhone))
  const passwordvalidation=(pass1 ,pass2)=>{
    let valid = false
    if(pass1===''||pass2===''){
      valid = false
    }else{
      if(pass1===pass2){
        valid = true
      }else{
        valid = false
      }
    }
    return valid
  }
  const allinputsvalid = ()=>{
    let isvalid = false
    if(passwordvalidation(props.password , props.confrimPassword)&&validphone&&validator.isEmail(props.personalMail)&&(props.name!=='')&&(props.personalCountry!=='')){
      isvalid = true;
    }else{
      isvalid = false
    }
    console.log(passwordvalidation(props.password , props.confrimPassword) ,validphone , validator.isEmail(props.personalMail)  , (props.name!==''))
    return isvalid
  }
  return (
    <div className="first">
   <h2>Tell us more about you</h2>
   <div className='first-form'>
    <input className={props.name===''?'errorinput':''} placeholder='Enter your full Name' value={props.name} onChange={(e)=>props.setName(e.target.value)}/>
    {props.name===''&&<span className='spanerror'>Please enter your full name</span>}
    <input placeholder='Enter your Personal email' className={!validator.isEmail(props.personalMail)?'errorinput':''} type={'email'} value={props.personalMail} onChange={(e)=>props.setPersonalMail(e.target.value)}/>
    {!validator.isEmail(props.personalMail)&&<span className='spanerror'>Please enter a valid email</span>}
    <div className='country-phone' >
      <div style={{width:'49%'}}>
        <select placeholder='country' value={props.personalCountry} onChange={(e)=>{props.setPersonalCountry(e.target.value)}} className={props.personalCountry===''?'errorinput':''}>
        <option value="" selected disabled hidden>Countries</option>
        {
        props.COUNTRIES.map((el,index)=>{
          return <option value={index}>{el.name}</option>
        })
        }
        </select>
        {props.personalCountry===''&&<span className='spanerror'>please select a country</span>}
        </div>
        <div style={{width:'49%'}}>
        <PhoneInput
        className={validphone?'':'error'}
      placeholder="Enter your phone number"
      defaultCountry="EG"
      value={props.personalPhone}
      onChange={props.setPersonalPhone} />
      {!validphone&&<span className='spanerror'>Enter a valid phone number</span>}
      </div>
    </div>
    <div className='input-container'><input value={props.password} className={passwordvalidation(props.password , props.confrimPassword)?'':'errorinput'} onChange={(e)=>props.setPassword(e.target.value)} type={props.password1Visable?'text':'password'} placeholder={'Choose a password'}/><span onClick={()=>{props.setpassword1visable(!props.password1Visable)}}>{pass1icon}</span></div>
    {!passwordvalidation(props.password , props.confrimPassword)&&<span className='spanerror'>Passwords are not a match or empty fields</span>}
   <div className='input-container'> <input placeholder='Repeat your password' className={passwordvalidation(props.password , props.confrimPassword)?'':'errorinput'} value={props.confrimPassword} onChange={(e)=>props.setConfirmPassword(e.target.value)} type={props.password2Visable?'text':'password'}/><span onClick={()=>{props.setpassword2visable(!props.password2Visable)}}>{pass2icon}</span></div>
   {!passwordvalidation(props.password , props.confrimPassword)&&<span className='spanerror'>Passwords are not a match or empty fields</span>}
   </div>
   <button className='btn' onClick={()=>{
    if(allinputsvalid()){
      navigate('/scnd')
    }else{
      alert('make sure all the inputs are valid before proceeding')
    }
   }}>Next</button>
    </div>
  );
}
export default FirstPage;