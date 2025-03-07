import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import contactImg from '../assets/img/contact-img.svg';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { ToastContainer, toast } from 'react-toastify'; // Importing ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Importing CSS for toast notifications
import { Bounce } from 'react-toastify'; // Importing Bounce transition

const Contact = () => {
    const formDefault = {
        name: '',
        email: '',
        subject: '',
        message: '',
    };
    
    const [formData, setFormData] = useState(formDefault);
    const [buttonText, setButtonText] = useState('Send');

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!formData.name || !formData.email || !formData.subject || !formData.message) {
            toast.error("All fields are required!", {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                theme: "light",
                transition: Bounce,
            });
            return;
        }

        setButtonText('Sending...');

        let response = await fetch('https://crypts.vercel.app/api/contact', {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
        });

        setButtonText('Send');
        let result = await response.json();
        setFormData(formDefault);
        
        if (result.code === 200) {
            toast.success("Message Sent Successfully!", {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        } else {
            toast.error("Something Went Wrong :\\", {
                position: "bottom-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: false,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    };

    return (
        <section className='contact' id='connect'>
            <Container>
                <Row>
                    <Col md={6} className="d-flex justify-content-center align-items-center">
                        <TrackVisibility>
                            {({ isVisible }) => (
                                <div className={isVisible ? "animate__animated animate__pulse" : ""}>
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
                                    <input type="text" placeholder='Name*' value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} />
                                </Col>
                                <Col sm={6} md={6} className='px-1'>
                                    <input type="email" placeholder='name@mail.com*' value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} />
                                </Col>
                                <Col sm={12} md={12}>
                                    <input type="subject" placeholder='Subject*' value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} />
                                </Col>
                                <Col sm={12} md={12}>
                                    <textarea rows="7" placeholder="What's on your mind?*" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })}></textarea>
                                    <button type="submit"><span>{buttonText}</span></button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
            <ToastContainer /> {/* Including the ToastContainer to render the toasts */}
        </section>
    );
};

export default Contact;
