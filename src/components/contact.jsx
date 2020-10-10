import React from 'react'
import '../scss/contact.scss';
import heroContact from '../images/contact-images/desktop/image-hero.jpg';
import { useForm } from "react-hook-form";
import map from '../images/contact-images/desktop/image-map.png';

const Contact = () => {
   
    const { register, handleSubmit,errors } = useForm();
    
    const onSubmit = (data) => {
        console.log(data);
    }
    return (
        <div className="contact">
            <div className="line"></div>
            <div className="page-name">Contact</div>
            <div className="contact-main">
                <div className="contact-img-wrap">
                    <img src={heroContact} className="contact-hero-img" alt="contact main" />

                </div>
                <div className="contact-content-wrap">
                    <div className="contact-banner" data-aos="fade-right">
                        <p>contact</p>
                    </div>
                    <div className="contact-content" data-aos="fade-right">
                        <div className="contact-line"></div>
                        <div className="contact-header">Tell us about your project</div>
                        <div className="contact-text">
                            We’d love to hear more about your project. Please, leave a message below or give us a call. We have two offices, one in Texas and one in Tennessee. If you find yourself nearby, come say hello!
                        </div>
                    </div>
                </div>
            </div>

            <div className="contact-details">
                <div className="details-line"></div>

                <div className="details-title" data-aos="fade-down">
                    Contact Details
                </div>
                <div className="main-office" data-aos="fade-down">
                    <div className="main-office-title" >Main office</div>
                    <p>Mail: archone@mail.com</p>
                    <p>Address: 1892 Chenoweth Drive TN</p>
                    <p>Phone: 123-456-3451</p>
                    <div className="view-on-map">


                    
                    <p>View on Map 
                  
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><g fill="none" fillRule="evenodd" stroke="black" strokeWidth="2"><path d="M15 1l9 9-9 9M0 10h24" /></g></svg>
                            </p>
                    </div>

                </div>
                <div className="second-office" data-aos="fade-down">
                    <div className="second-office-title">office ||</div>
                    <p>Mail: archone@mail.com</p>
                    <p>Address: 1892 Chenoweth Drive TN</p>
                    <p>Phone: 123-456-3451</p>
                    <div className="view-on-map">

                    <p>View on Map 
                  
                            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><g fill="none" fillRule="evenodd" stroke="black" strokeWidth="2"><path d="M15 1l9 9-9 9M0 10h24" /></g></svg>
                       
                            </p>
                    </div>
            
                </div>
            </div>

            <div className="map-wrap">
                <img src={map} className="map" alt="map"/>
            </div>

            <div className="contact-form">
                <div className="contact-form-title">
                    Connect with us
                </div>
                <div className="form" data-aos="fade-right">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-wrap">
                        <input type="text" name="name" ref={register({required:true,minLength:2})} placeholder="Name" />
                        {errors.name&&<span>This cannot be empty</span>}
                        </div>
                        <div className="input-wrap">
                        <input type="text" name="email" ref={register({required:true})} placeholder="Email"/>
                        {errors.email&&<span>This cannot be empty</span>}

                        </div>
                        <div className="input-wrap">
                        <input type="text-area" name="message" ref={register({required:true})} placeholder="Message"/>
                        </div>
                        <button className="form-btn" type="submit">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="20"><g fill="none" fillRule="evenodd" stroke="white" strokeWidth="2"><path d="M15 1l9 9-9 9M0 10h24"/></g></svg>
            </button>
                    </form>
                </div>
                    
           
            </div>
        </div>
    );
}

export default Contact;