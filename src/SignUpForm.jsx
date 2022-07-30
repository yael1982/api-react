import {Formik, Form, Field, ErrorMessage} from "formik";
import * as Yup from "yup";
import "./SignUpForm.css"
import React, {useState} from 'react'; 
import { Button} from '@mui/material'



function SignUpForm() {
        
    const [user, setUser] = useState({
        name: " ",
        email: " ",
        password: " "
     }); 
       
        const [buttonClicked, setButtonClicked] = useState(false);
        const handleButtonClick = () =>{
          setButtonClicked(true)
          console.log("Paises")
        }
        const handleTable = () =>{
          history.push("/tablas");
        }
    

      const PostLogin=(event)=> {
      const { name, email, image, password} = event.target.elements
      
      //const cookies = new Cookies();
      const myData ={ 
        name: name.value,
        email: email.value,
        password: password.value,
        file: image.value
      };

        fetch('http://localhost:3030/users/login', {  
          method: 'POST',
          headers: {
          'Accept': 'application/json',  
          'Content-Type': 'application/json'
          },
          body: JSON.stringify( myData ),        
        })
        
        .then(res => {
          return res.json()
        })
        .then(myData => {console.log(myData)
          if (myData.hasOwnProperty('Token_info')) {
            alert('Bienvenido!');
            setUser(myData)
            //return <Redirect to="/tablas"/>
            // cookies.set("TOKEN", data.Token_info.token, {path:"/"})
            // window.location.href="./App.jsx"
          } else{
              alert('Login incorrecto');
          }})
        
     }
    
    
        return(
        <Formik
            initialValues={{name:"", email:"", password:""}}
            validationSchema={Yup.object({
                name: Yup.string()
                    .min(2, "Must be 2 characters at least")
                    .max(30, "Must be 30 characters long")
                    .required("Require"),
                email: Yup.string()
                    .email("Invalid email adress")
                    .required("Required"),
                password: Yup.string()
                    .min(8, "Min 8 characters")
                    .required("Password is  required")
            })}
           onSubmit={(values, {setSubmitting})=>{
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false)}                    
           }
        >
          {( { errors }) =>(
            <Form onSubmit = {PostLogin}>
                <label className="label" htmlFor="name">Nombre</label>
                <Field className="field" name="name" id="name" type="text" />
                <br /> 
                <ErrorMessage name='name' component={() => (
                  <div>{errors.name}</div>
                )} />
                <br />

                <label className="label" htmlFor="email">Email</label>
                <Field className="field" name="email" id="email" type="text" />
                <br />
                <ErrorMessage name='email' component={() => (
                  <div>{errors.email}</div> 
                )} />
                <br />

                <label className="label" htmlFor="password">Password</label>
                <Field className="field" name="password" id="password" type="password"/>
                <br />
                <ErrorMessage name='password' component={() => (
                  <div>{errors.password}</div> 
                )} />
                <br />

                <label className="label" htmlFor="image">Imagen</label>
                <Field className="field" name="image" id="image" type="file"/>
                <br />
                <ErrorMessage name='image' component={() => (
                  <div>{errors.image}</div> 
                )} />
                <br />             


                <Button  className="button" type='submit' variant="contained">Ingresar</Button>
           
            </Form>
            )}
        </Formik>

    )}
       

export default SignUpForm;