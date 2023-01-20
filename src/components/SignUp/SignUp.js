import './SignUp.scss'
import { useState,useEffect } from "react";
import axios from "axios";

function SignUp(){
    const [formData, setFormData] = useState('');
    const [states, setStates] = useState([]);
    const [occupations, setOccupations] = useState([]);

      //Attempt to get request for formData to add to formInfo state.
      useEffect(() => {
      axios
        .get("https://frontend-take-home.fetchrewards.com/form")
        .then((response) => {
          setFormData(response.data);
           //Manipulate formData to return occupations and states as individual arrays to map through
        if (formData) {
          setOccupations(Object.values(formData)[0])
          setStates(Object.values(formData)[1].map(function(item){return item.name;}))
         }
        })
        .catch((err) => {
          console.log(err);
        });
    }, [formData])

    //Initialize formInfo as state variable to track changes
    const [formInfo, setFormInfo] = useState({
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        occupation: "",
        state: "",
    });
  
    //Initialize touched as state variable to track if a user has clicked in a form field
    const [touched, setTouched] = useState({
      first_name: false,
      last_name: false,
      email: false,
      password: false,
      occupation: false,
      state: false,
    });
  
    //Create error object to store errors in each input field field
    let errors = {};
  
    //loop through formInfo. Set error at the given key to true
    //IF there is an empty string in formInfo at the given key but it has been touched
    for (const key in formInfo) {
      errors[key] = !formInfo[key] && touched[key];
    }
  
    //Updating touched value on click in an input field
    const handleTouch = (event) => {
      setTouched({ ...touched, [event.target.name]: true });
    };
  
    //Track changes in input fields
    const handleChange = (event) => {
      setFormInfo({
        ...formInfo,
        [event.target.name]: event.target.value,
      });

    };

console.log(errors)
    return(
    <div className='signup'>
             <form className="signup__form">
                <h1 className="signup__title">Sign up</h1>

                <div className='signup__tabletflex'>
                <div className='signup__flex signup__left'>
                <label className="signup__label" htmlFor='first_name' >First Name</label>
                <input onBlur={handleTouch} onChange={handleChange} className={`signup__input ${errors.first_name ? "signup__input--invalid" : ""}`} value={formInfo.first_name} type="text" id="first_name" name="first_name" label="First name" />
                <label className="signup__label" htmlFor='last_name' >Last Name</label>
                <input onBlur={handleTouch} onChange={handleChange} className={`signup__input ${errors.last_name ? "signup__input--invalid" : ""}`} value={formInfo.last_name} type="text" name="last_name" label="Last name" />
                </div>


                <div className='signup__flex'>
                <label className="signup__label" htmlFor='email' >Email</label>
                <input onBlur={handleTouch} onChange={handleChange}className={`signup__input ${errors.email ? "signup__input--invalid" : ""}`} value={formInfo.email} type="text" name="email" label="Email" />
                <label className="signup__label" htmlFor='password' >Password</label>
                <input onBlur={handleTouch} onChange={handleChange} className={`signup__input ${errors.password ? "signup__input--invalid" : ""}`} value={formInfo.password} type="password" name="password" label="Password" />
                </div>
                </div>

                <label className='signup__label' htmlFor="occupation-list">Occupation</label>
                <select onBlur={handleTouch} onChange={handleChange} className={`signup__input ${errors.occupation ? "signup__input--invalid" : ""}`} value={formInfo.occupation}  id='occupation-list' name='category' placeholder='{occupationdata}'>
                        {occupations.map((occupation,index)=>{
                     return <option key={index}className={occupation}>{occupation}</option>
                    })}
                </select>

                <label className='signup__label' htmlFor="state-list">State</label>
                <select onBlur={handleTouch} onChange={handleChange}  className={`signup__input ${errors.state ? "signup__input--invalid" : ""}`} value={formInfo.state}  id='state-list' name='category' placeholder='{statedata}'>
                        {states.map((states,index)=>{
                     return <option key= {index}className={states}>{states}</option>
                    })}
                </select>

                <button className="signup__button">Sign up</button>


                {Object.values(errors).some((value) => value === true) && <div className="signup__message">Please Fill Out All Form Fields</div>}
            </form>

    </div>
);
}

export default SignUp;