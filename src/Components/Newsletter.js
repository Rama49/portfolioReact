import { Alert, Col} from 'react-bootstrap';
import {useEffect, useState} from 'react';
const Newsletter = ({status, message, onValidated}) => { 
    const [email, setEmail] = useState('');

    useEffect = (() =>{
        if (status === 'success') clearfields();
    }, [status])

    const handleSubmit= (e) => {
       e.preventDefault();
       email &&
       email.indexOf('@') > -1 && 
       onValidated()({
        EMAIL: email
        })
    }

    const clearfields = () => {
        setEmail('');
    }

   return(
    <Col lg={12}>
        <div className="newsletter-bx">
            <Col lg={12} md={6} xl={5}>
                <h3>Subscribe to our Newsletter</h3>
                (status === 'sending') && <Alert>Sending...</Alert>
                (status === 'error') && <Alert variant='success'>{message}</Alert>
                 (status === 'success') && <Alert>{message}.</Alert>
            </Col>
            <Col md={6} xl={7}>
                <form onSubmit={handleSubmit}>
                     <div className='new-email-bx'>
                        <input value={email} type='email' onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
                        <button type='submit'>Submit</button>
                     </div>
                </form>
            </Col>
        </div>
    </Col>
   )
}
export default Newsletter;


