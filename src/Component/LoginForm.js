import React,{ useState } from "react"
import { useHistory } from 'react-router-dom'
import './LoginForm.css'
//REACTBOOTSTRAP
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
//FIN REACTBOOTSTRAP
//AXIOS
import axios from "axios"
//FIN AXIOS
import Swal from 'sweetalert2'
import Logo from '../Img/film-reel.png'


function LoginForm(){

    const [form, setForm] = useState({ email:'', password:''})
	const [messageAlert, setMessageAlert] = useState({
		msjFormIncomplete: false,
		msjFormIncompletePass: false,
		loandingForm: false,
	})
    const history = useHistory()

    const handleSubmit = (event) => {
        event.preventDefault()
    }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value
        setForm ({...form,[name]:value})

        if(form.email !== ''){
            setMessageAlert({ ...messageAlert, msjFormIncomplete: false })
        }

        if(form.password !== ''){
            setMessageAlert({ ...messageAlert, msjFormIncompletePass: false })
        }
    }

    const handleClick = () => {
        if(form.email === ''){
            setMessageAlert({ ...messageAlert, msjFormIncomplete: true })
        }
        else if (form.password === ''){
            setMessageAlert({ ...messageAlert, msjFormIncompletePass: true })
        }
        else{
            setMessageAlert({ ...messageAlert, loandingForm: true })
            loginUser()
        }
    }

    const loginUser = async () => {
        try{
            const response = await axios.post('http://challenge-react.alkemy.org/', form)
            if(response.data){
                setMessageAlert({ ...messageAlert, loandingForm: false })
                const token = response.data
                localStorage.setItem('token', JSON.stringify(token))
				history.push('/')
            }
        }catch(error){
            setMessageAlert({ ...messageAlert, loandingForm: false })
            messageErrorLogin()
            return {
                error: error.message,
                data: error.response.data,
            }
        }
    }

    const messageErrorLogin = ()=>{
        Swal.fire({
            title:'Error',
            html:
            'Email: challenge@alkemy.org<br>' +
            'Password: react',
            icon:'error',
            confirmButtonText:'Ok',
            timer:'7000'
        })
    }


    return(
        <div className="loginForm">
            <div className="LogoContainerLogin">
                <p className="titleLogoLogin">Movie D3</p> 
                <img src={Logo} alt='Imagen Logo' className="imgLogoLogin"></img>
            </div>

            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' value={form.email} onChange={handleChange}/>
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                    {messageAlert.msjFormIncomplete && 
                        <Form.Text className="text-muted">
                            <p className="msjIncompleteForm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                            You must complete it</p>
                        </Form.Text>
                    }
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' value={form.password} onChange={handleChange}/>
                    {messageAlert.msjFormIncompletePass && 
                        <Form.Text className="text-muted">
                            <p className="msjIncompleteForm">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x-circle" viewBox="0 0 16 16">
                            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                            </svg>
                            You must complete it</p>
                        </Form.Text>
                    }
                </Form.Group>

                {messageAlert.loandingForm ?
                    <div className="ContainerSpinnerForm">
                        <Spinner animation="border" variant="primary" className="spinnerLoginForm"/>
                        <p>Loanding ...</p>
                    </div>
                :
                    <Button variant="primary" type="submit" onClick={handleClick}>Submit</Button> 
                }
            </Form>
        </div>
    )
}

export default LoginForm