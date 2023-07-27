// import React ,{useState} from 'react'
// import "./style/login.css";
// export default function Login() {

//     const [activeForm, setActiveForm] = useState('login');

//     const toggleForm = (formName) => {
//       setActiveForm(formName);
//     };

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         const formName = event.target.name;
//         const isFormValid = validateForm(formName);

//         if (isFormValid) {
//           // Handle form submission logic
//           // For example, redirect or submit the form data to the server
//           console.log('Form submitted successfully!');
//         }
//       };

//       const validateForm = (formName) => {
//         var returnval = true; // Assuming it is true

//         if (formName === 'loginF') {
//             var name = document.forms['loginF']['fname'].value;
//             var pass = document.forms['loginF']['fpass'].value;


//             if (name.length < 3) {
//                 seterror('name', '*Length of name is too short');
//                 returnval = false;
//             }

//             if (pass.length < 8) {
//                 seterror('pass', '*Password should be of minimum 8 characters');
//                 returnval = false;
//             }

//             if (pass[0] !== pass[0].toUpperCase()) {
//                 seterror('pass', '*First letter should be capital');
//                 returnval = false;
//             }
//         } else if (formName === 'signupF') {
//             var sname = document.forms['signupF']['sname'].value;
//             var susn = document.forms['signupF']['susn'].value;
//             var spass = document.forms['signupF']['spass'].value;
//             var semail = document.forms['signupF']['semail'].value;

//             var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

//             clearErrors();

//             if (sname.length < 3) {
//                 seterror('sname', '*Length of name is too short');
//                 returnval = false;
//             }

//             if (susn.length !== 10) {
//                 seterror('susn', '*USN should be of 10 characters');
//                 returnval = false;
//             }

//             if (!susn.startsWith('1BM')) {
//                 seterror('susn','USN must start with "1BM"');
//                 return false;
//               }

//             if (!semail.endsWith('@bmsce.ac.in')) {
//                 seterror('susn','Email must be of the format *@bmsce.ac.in');
//                 return false;
//               }


//             if (specialChars.test(sname)) {
//                 seterror('sname', '*Name should not contain special characters');
//                 returnval = false;
//             }

//             if (spass.length < 8) {
//                 seterror('pass', '*Password should be of minimum 8 characters');
//                 returnval = false;
//             }

//         }

//         console.log('returnval:', returnval);

//         if (returnval == true) {
//             window.location = "http://localhost:3000/login";
//         }
//         return returnval;
//     }

//     function clearErrors(){
//         var errors = document.getElementsByClassName('formerror');
//         for(let i of errors){
//             i.innerHTML ="";
//         }
//     }

//     function seterror(id, error) {
//         // Sets error inside tag of id
//         var element = document.getElementById(id);
//         element.getElementsByClassName('formerror')[0].innerHTML = error;
//     }

//   return (
//     <div>
//                  <section id="login"> 
//                 <div class="content">
//                     <div class="btn">
//                         <div id="b"></div>
//                         <button type="button" class="b" onclick="login()">Log In</button>
//                         <button type="button" class="b" onclick="signup()">Sign up</button>
//                     </div>

//                     <form name="loginF" id="l" action="/login" method="POST" onsubmit="return validateForm('loginF')"> 
//                         <div class="text" id="name">
//                             <input type="text" name="fname" required/>
//                             <span class="formerror"></span>
//                             <label>Username</label>
//                         </div>

//                         <div class="text" id="pass">
//                             <input type="password" name="fpass" required/>
//                             <span class="formerror"></span>
//                             <label>Password</label>
//                         </div>

//                         <div class="links">
//                             <a href="forgotpassword.html">Forgot Password</a>
//                             <br/>
//                             <a href="login.html">New member? Sign up</a>
//                         </div>
//                         <input type="submit" value="Submit"/>
//                     </form>

//                     {/* <!--For sign Up--> */}
//                         <form name="signupF" action="/register" method="POST" id="s" onsubmit="return validateForm('signupF')">
//                         <div class="text" id="sname">
//                             <input type="text" name="sname" required/>
//                             <span class="formerror"></span>
//                             <label>Username</label>
//                         </div>

//                         <div class="text" id="susn">
//                             <input type="text" name="susn" required/>
//                             <span class="formerror"></span>
//                             <label>USN</label>
//                         </div>

//                         <div class="text" id="semail">
//                             <input type="email" name="semail" required/>
//                             <span class="formerror"></span>
//                             <label>Email Id</label>
//                         </div>

//                         <div class="text" id="spass">
//                             <input type="password" name="spass" required/>
//                             <span class="formerror"></span>
//                             <label>Password</label>
//                         </div>

//                         <div class="links">
//                             <a href="termsandconditions.html">I agree to the terms & conditions</a>
//                             <br/>
//                             <a href="login.html">Already Signed up? Log in</a>
//                         </div>
//                         <input type="submit"/>
//                     </form>
//                 </div>
//             </section>
//     </div>
//   )
// }

import React, { useState } from 'react';
import './style/login.css';

export default function Login() {
    const [activeForm, setActiveForm] = useState('login');
    const [formErrors, setFormErrors] = useState({});

    const toggleForm = (formName) => {
        setActiveForm(formName);
        setFormErrors({}); // Clear any previous form errors when switching forms
    };

    const handleSubmit = (event) => {
        // event.preventDefault();
        const formName = event.target.name;
        const isFormValid = validateForm(formName);

        if (isFormValid) {
            // Handle form submission logic
            // For example, redirect or submit the form data to the server
            console.log('Form submitted successfully!');
        }
    };

    const validateForm = (event, formName) => {
        var x = document.getElementById("l");
        var y = document.getElementById("s");
        var z = document.getElementById("b");
     if(formName === 'loginF'){
        x.style.left = "10px";
        y.style.left = "450px";
        z.style.left = "0";
     }
     else{
        x.style.left="-300px";
        y.style.left="0px";//contols the horizontal movement
        z.style.left="160px";
     }

        const errors = {}; // Initialize an empty object to hold form errors

        if (formName === 'loginF') {
            // Login form validation logic
            const name = event.target.fname.value;
            const pass = event.target.fpass.value;

            if (name.length < 3) {
                errors.name = '*Length of name is too short';
            }

            if (pass.length < 8) {
                errors.pass = '*Password should be of minimum 8 characters';
            }

            if (pass[0] !== pass[0].toUpperCase()) {
                errors.pass = '*First letter should be capital';
            }
        } else if (formName === 'signupF') {
            // Signup form validation logic
            const sname = event.target.sname.value;
            const susn = event.target.susn.value;
            const spass = event.target.spass.value;
            const semail = event.target.semail.value;

            const specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;

            if (sname.length < 3) {
                errors.sname = '*Length of name is too short';
            }

            if (susn.length !== 10) {
                errors.susn = '*USN should be of 10 characters';
            }

            if (!susn.startsWith('1BM')) {
                errors.susn = 'USN must start with "1BM"';
            }

            if (!semail.endsWith('@bmsce.ac.in')) {
                errors.semail = 'Email must be of the format *@bmsce.ac.in';
            }

            if (specialChars.test(sname)) {
                errors.sname = '*Name should not contain special characters';
            }

            if (spass.length < 8) {
                errors.pass = '*Password should be of minimum 8 characters';
            }
        }

        setFormErrors(errors); // Update the form errors state with the new errors

        return Object.keys(errors).length === 0; // If there are no errors, form is valid
    };
    
    const handleLogin = () => {
        toggleForm('loginF');
      };
    
      const handleSignup = () => {
        toggleForm('signupF');
      };
    
      return (
        <div className='body-bg'>
          <section id="login">
            <div className="content">
              <div className="btn">
                <div id="b"></div>
                <button
                  type="button"
                  className={`b ${activeForm === 'loginF' ? 'active' : ''}`}
                  onClick={handleLogin}>
                
                  Log In
                </button>
                <button
                  type="button"
                  className={`b ${activeForm === 'signupF' ? 'active' : ''}`}
                  onClick={handleSignup}
                >
                  Sign up
                </button>
              </div>
    
              {activeForm === 'loginF' && (
                <form name="loginF" id="l" onSubmit={handleSubmit}>
                  {/* Login form fields */}
                  <div className="text" id="name">
                    <input type="text" name="fname" required />
                    <span className="formerror"></span>
                    <label>Username</label>
                  </div>
    
                  <div className="text" id="pass">
                    <input type="password" name="fpass" required />
                    <span className="formerror"></span>
                    <label>Password</label>
                  </div>
    
                  <div className="links">
                    <a href="forgotpassword.html">Forgot Password</a>
                    <br />
                    <a href="login.html">New member? Sign up</a>
                  </div>
                  <input type="submit" value="Submit" />
                </form>
              )}
    
              {activeForm === 'signupF' && (
                <form name="signupF" id="s" onSubmit={handleSubmit}>
                  {/* Signup form fields */}
                  <div className="text" id="sname">
                    <input type="text" name="sname" required />
                    <span className="formerror"></span>
                    <label>Username</label>
                  </div>
    
                  <div className="text" id="susn">
                    <input type="text" name="susn" required />
                    <span className="formerror"></span>
                    <label>USN</label>
                  </div>
    
                  <div className="text" id="semail">
                    <input type="email" name="semail" required />
                    <span className="formerror"></span>
                    <label>Email Id</label>
                  </div>
    
                  <div className="text" id="spass">
                    <input type="password" name="spass" required />
                    <span className="formerror"></span>
                    <label>Password</label>
                  </div>
    
                  <div className="links">
                    <a href="termsandconditions.html">
                      I agree to the terms & conditions
                    </a>
                    <br />
                    <a href="login.html">Already Signed up? Log in</a>
                  </div>
                  <input type="submit" />
                </form>
              )}
            </div>
          </section>
        </div>
      );
    }
















    // return (
    //     <div className='body-bg'>
    //       <section id="login">
    //         <div className="content">
    //           <div className="btn">
    //             <div id="b"></div>
    //             <button
    //               type="button"
    //               className={`b ${activeForm === 'loginF' ? 'active' : ''}`}
    //               onClick={() => toggleForm('loginF')}
    //             >
    //               Log In
    //             </button>
    //             <button
    //               type="button"
    //               className={`b ${activeForm === 'signupF' ? 'active' : ''}`}
    //               onClick={() => toggleForm('signupF')}
    //             >
    //               Sign up
    //             </button>
    //           </div>
    
    //           {activeForm === 'loginF' && (
    //             <form name="loginF" id="l" onSubmit={handleSubmit}>
    //               {/* Login form fields */}
    //               <div className="text" id="name">
    //                 <input type="text" name="fname" required />
    //                 <span className="formerror"></span>
    //                 <label>Username</label>
    //               </div>
    
    //               <div className="text" id="pass">
    //                 <input type="password" name="fpass" required />
    //                 <span className="formerror"></span>
    //                 <label>Password</label>
    //               </div>
    
    //               <div className="links">
    //                 <a href="forgotpassword.html">Forgot Password</a>
    //                 <br />
    //                 <a href="login.html">New member? Sign up</a>
    //               </div>
    //               <input type="submit" value="Submit" />
    //             </form>
    //           )}
    
    //           {activeForm === 'signupF' && (
    //             <form name="signupF" id="s" onSubmit={handleSubmit}>
    //               {/* Signup form fields */}
    //               <div className="text" id="sname">
    //                 <input type="text" name="sname" required />
    //                 <span className="formerror"></span>
    //                 <label>Username</label>
    //               </div>
    
    //               <div className="text" id="susn">
    //                 <input type="text" name="susn" required />
    //                 <span className="formerror"></span>
    //                 <label>USN</label>
    //               </div>
    
    //               <div className="text" id="semail">
    //                 <input type="email" name="semail" required />
    //                 <span className="formerror"></span>
    //                 <label>Email Id</label>
    //               </div>
    
    //               <div className="text" id="spass">
    //                 <input type="password" name="spass" required />
    //                 <span className="formerror"></span>
    //                 <label>Password</label>
    //               </div>
    
    //               <div className="links">
    //                 <a href="termsandconditions.html">
    //                   I agree to the terms & conditions
    //                 </a>
    //                 <br />
    //                 <a href="login.html">Already Signed up? Log in</a>
    //               </div>
    //               <input type="submit" />
    //             </form>
    //           )}
    //         </div>
    //       </section>
    //     </div>
    //   );
    // }