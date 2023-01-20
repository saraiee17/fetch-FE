import './SignUp.scss'
import { useState,useEffect } from "react";
import axios from "axios";

function SignUp(){
    const [formData, setFormData] = useState('');

      //Attempt to get request for formData to add to formInfo state.
      useEffect(() => {
      axios
        .get("https://frontend-take-home.fetchrewards.com/form")
        .then((response) => {
          setFormData(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [])

        const occupations= Object.values(formData)[0]
        const states=Object.values(formData)[1].map(function(item){return item.name;})


    return(
    <div className='signup'>
             <form className="signup__form">
                <h1 className="signup__title">Sign up</h1>

                <div className='signup__tabletflex'>
                <div className='signup__flex signup__left'>
                <label className="signup__label" htmlFor='first_name' >First Name</label>
                <input type="text" name="first_name" label="First name" />
                <label className="signup__label" htmlFor='last_name' >Last Name</label>
                <input type="text" name="last_name" label="Last name" />
                </div>


                <div className='signup__flex'>
                <label className="signup__label" htmlFor='email' >Email</label>
                <input type="text" name="email" label="Email" />
                <label className="signup__label" htmlFor='password' >Password</label>
                <input type="password" name="password" label="Password" />
                </div>
                </div>

                <label className='signup__label' htmlFor="occupation-list">Occupation</label>
                <select className='signup__category' id='occupation-list' name='category' placeholder='{occupationdata}'>
                        {occupations.map((occupation,index)=>{
                     return <option key={index}className={occupation}>{occupation}</option>
                    })}
                </select>

                <label className='signup__label' htmlFor="state-list">State</label>
                <select className='signup__category' id='state-list' name='category' placeholder='{statedata}'>
                        {states.map((states,index)=>{
                     return <option key= {index}className={states}>{states}</option>
                    })}
                </select>

                <button className="signup__button">Sign up</button>

                {/* {success && <div className="signup__message">Signed up!</div>}
                {error && <div className="signup__message">{error}</div>} */}
            </form>

    </div>
);
}

export default SignUp;