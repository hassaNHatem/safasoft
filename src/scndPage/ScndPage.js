import {  useNavigate } from 'react-router-dom';
import './scnd.css';
import PhoneInput from 'react-phone-number-input';
import { isValidPhoneNumber } from 'react-phone-number-input'
import 'react-phone-number-input/style.css';
import validator from 'validator';
function ScndPage(props) {
  let validphone = isValidPhoneNumber(String(props.comanyPhone1))
  let validphone2 = isValidPhoneNumber(String(props.comanyPhone2))
  const navigate = useNavigate()
  const allinputsValid = ()=>{
    let valid = false
    if(props.companyName!=='' && props.address!==''&& validphone &&validphone2 &&validator.isEmail(props.businessmail)&&props.companyCountry!==''&&props.city!==''){
      valid = true
    }else{
      valid = false
    }
    return valid
  }
  return (
    <div className="scnd">
   <h2>Verify your company</h2>
   <div className='scnd-form'>
    <input placeholder='Enter your company Name' className={props.companyName===''?'errorinput':''} value={props.companyName} onChange={(e)=>props.setCompanyName(e.target.value)}/>
    {props.companyName===''&&<span className='spanerror'>Please enter your Company's name</span>}
    <input placeholder='Enter your Adress' className={props.address===''?'errorinput':''} value={props.address} onChange={(e)=>props.setAdress(e.target.value)} />
    {props.address===''&&<span className='spanerror'>Please enter your full Address</span>}
    <input placeholder='Enter your Business Email' className={!validator.isEmail(props.businessmail)?'errorinput':''} type={'email'} value={props.businessmail} onChange={(e)=>props.setBusinessMail(e.target.value)} />
    {!validator.isEmail(props.businessmail)&&<span className='spanerror'>Please enter a valid email</span>}    
    <div className='country-city'>
      <div style={{width:'49%'}}>
    <select placeholder='country' value={props.companyCountry} onChange={(e)=>{props.setCompanyCountry(e.target.value)}} className={props.companyCountry===''?'errorinput':''}>
        <option value="" selected disabled hidden>Countries</option>
        {
        props.COUNTRIES.map((el,index)=>{
          return <option value={index}>{el.name}</option>
        })
        }
        </select>
        {props.companyCountry===''&&<span className='spanerror'>please select a country</span>}
        </div>
        <div style={{width:'49%'}}>
        <select placeholder='country' value={props.city} onChange={(e)=>{props.setCity(e.target.value)}} className={props.city===''?'errorinput':''}>
        <option value="" selected disabled hidden >Cities</option>
            <option value="1">cairo</option>
            <option value="2">giza</option>
            <option value="3">luxor</option>
            <option value="4">banha</option>
            <option value="5">qyina</option>
            <option value="6">aswan</option>
        </select>
        {props.city===''&&<span className='spanerror'>please select a city</span>}
        </div>
    </div>
    <div className='phone-numbers'>
      <div style={{width:'49%'}}>
    <PhoneInput
        className={validphone?'':'error'}
      placeholder="Enter your phone number"
      defaultCountry="EG"
      value={props.comanyPhone1}
      onChange={props.setCompanyPhone1} />
      {!validphone&&<span className='spanerror'>Enter a valid phone number</span>}
      </div>
      <div style={{width:'49%'}}>
    <PhoneInput
        className={validphone2?'':'error'}
      placeholder="Enter your phone number"
      defaultCountry="EG"
      value={props.comanyPhone2}
      onChange={props.setCompanyPhone2} />
      {!validphone2&&<span className='spanerror'>Enter a valid phone number</span>}
      </div>
    </div>
   </div>
   <div className='btns'>
      <button className="btn1 btn" onClick={()=>{
        navigate('/')
        props.setActiveStep(0)
      }}>Back</button>
        <button className="btn" onClick={()=>{
          if(allinputsValid()){
            props.setActiveStep(2)
            navigate('/confirm')
          }else{
            alert('make sure all the inputs are valid before proceeding')
          }
        }}>Next</button>
        </div>
    </div>
  );
}

export default ScndPage;