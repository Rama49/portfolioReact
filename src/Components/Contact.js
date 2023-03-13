import{ useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import contactimg from './Image/contact-img.svg';

const Contact =() =>{
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  }

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttontext, setButtonText] = useState('send');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({
       ... formDetails,
       [category]: value,
    })
  } 

  const handleSubmit = async (e) =>{
    e.preventDefault();
    setButtonText('Sending...');
    let reponse = await fetch("https://localhost:5000/contact", {
        method: "POST",
        headers: {
            "Content-type": "Application/json:charset=utf-8",
        },
        body: JSON.stringify(formDetails)
    });
    let result = reponse.json();
    setFormDetails(formInitialDetails);
    if(result.code === 200){
        setStatus({ success: true, message: 'Message sent successfully'});
    } else{
        setStatus({ success: false, message: 'Something went wrong, please try again later'})
    }
  }

  return(
    <section className='contact'id="connect">
        <Row className='align-tems-center'>
            <Col md={6}>
                <img src={contactimg} alt='Contact Us'/>
            </Col>
            <Col md={6}>
                <h2>Get In Touch</h2>
                <form onSubmit={handleSubmit}>
                    <Row>
                        <Col sm={6} className='px-1 mb-5'>
                            <input type='text' value={formDetails.firstName} placeholder='First Name' onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                        </Col>
                        <Col sm={6} className='px-1 mb-5'>
                        <input type='text' value={formDetails.firstName} placeholder='Last Name' onChange={(e) => onFormUpdate('LastName', e.target.value)} />
                        </Col>
                        <Col sm={6} className='px-1 mb-5'>
                            <input type='email' value={formDetails.email} placeholder='Email Adresse' onChange={(e) => onFormUpdate('email', e.target.value)} />
                        </Col>
                        <Col sm={6} className='px-1 mb-5'>
                        <input type='tel' value={formDetails.phone} placeholder='Phone No.' onChange={(e) => onFormUpdate('phone', e.target.value)} />
                        </Col>
                        <Col>
                          <textarea row='6' value={formDetails.message} placeholder='Message' onChange={(e) => onFormUpdate('massage', e.target.value)}></textarea>
                          <button type='submit'><span>{buttontext}</span></button>
                        </Col>
                        {
                            status.message &&
                            <Col>
                             <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                             </Col>
                        }
                    </Row>
                </form>
            </Col>
        </Row>
    </section>
  )
}

export default Contact;