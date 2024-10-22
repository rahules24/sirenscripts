import { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import contactImg from '../assets/img/contact-img.svg'
import 'animate.css'
import TrackVisibility from 'react-on-screen';

const Contact = () => {
    const formDefault = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }
    const [formData, setFormData] = useState(formDefault)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()
        setButtonText('Sending...')
        let response = await fetch('http://localhost:5000/contact', {   //chnage to public url after hosting on server
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            }
        });
        setButtonText('Send');
        let result = await response.json();
        setFormData(formDefault);
        if (result.code===200) {
            setStatus({success: true, message: "Message sent successfully"})
        } else {
            setStatus({success: false, message: "Somethign went wrong. Please try again :\\"})
        }
    }
  return (
    <section className='contact' id='connect'>
        <Container>
            <Row>
                <Col md={6} className="d-flex justify-content-center align-items-center">
                    <TrackVisibility>
                        {({ isVisible }) => (
                            <div className={isVisible ? "animate__animated animate__pulse" : ""} >
                                <img src={contactImg} alt="Contact Us" />
                            </div>
                            )}
                    </TrackVisibility>
                </Col>
                <Col md={6}>
                    <h2>Get In Touch</h2>
                    <form onSubmit={handleSubmit}>
                        <Row>
                            <Col sm={6} md={6} className='px-1'>
                                <input type="text" placeholder='Name' value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
                            </Col>
                            <Col sm={6} md={6} className='px-1'>
                                <input type="email" placeholder='name@mail.com' value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
                            </Col>
                            <Col sm={12} md={12}>
                                <input type="subject" placeholder='Subject' value={formData.subject} onChange={(e) => setFormData({...formData, subject: e.target.value})} />
                            </Col>
                            <Col sm={12} md={12}>
                                <textarea rows="7" placeholder="What's on your mind?" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})}></textarea>
                                <button type="submit"><span>{buttonText}</span></button>
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
        </Container>
    </section>
  )
}

export default Contact