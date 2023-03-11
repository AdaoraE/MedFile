
 const inputData = [
   {
     id: 1,
     name: "email",
     type: "email",
     placeholder: "Email",
     errorMessage: "It should be a valid email address",
     required: true,
   },
   {
     id: 2,
     name: "password",
     type: "password",
     placeholder: "Password",
     errorMessage:
       "Password should be 8-20 characters and include at least one uppercase letter, one lowercase letter and one number",
    //  pattern: `^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$`,
     required: true,
   },
   {
     id: 3,
     name: "confirmPassword",
     type: "password",
     placeholder: "Confirm Password",
     errorMessage: "Passwords don't match",
     required: true,
   },
 ];
export default inputData