'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import emailjs from '@emailjs/browser';
import Breadcrumb from "@/components/breadcrumb/Breadcrumb";
import FooterTwo from "@/components/footer/FooterTwo";
import HeaderFive from "@/components/header/HeaderFive";
import ServiceTwo from "@/components/services/ServiceTwo";
import { StoreInfo } from "@/data/Common";

const ContactUs = () => {

    const [ result, showresult ] = useState(false);
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

const sendEmail = (formData) => {
	emailjs.send('service_g3aufzu', 'template_sk4dqiz', formData, '9L_sRsO66U253zcxC')
		.then((result) => {
			console.log(result.text);
		}, (error) => {
			console.log(error.text);
		});
		reset();
		showresult(true);
	};

	setTimeout(() => {
		showresult(false);
	}, 2000);


    return ( 
        <>
        <HeaderFive headerSlider />
        <main className="main-wrapper">
            <Breadcrumb 
            activeItem="Contact"
            title="Contact With Us"
            />
            <div className="axil-contact-page-area axil-section-gap">
                <div className="container">
                    <div className="axil-contact-page">
                        <div className="row row--30">
                            <div className="col-lg-8">
                                <div className="contact-form">
                                    <div>
                                        <h3 className="title mb--10">We would love to hear from you.</h3>
                                        <p>If you’ve got great products your making or looking to work with us then drop us a line.</p>
                                        <form onSubmit={handleSubmit(sendEmail)}>
                                            <div className="row row--10">
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <label>Name <span>*</span></label>
                                                        <input type="text" {...register('name', { required: true })} />
                                                        {errors.name && <p className="error">Name is required.</p>}
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <label>Phone <span>*</span></label>
                                                        <input type="text" {...register('phone', { required: true })} />
                                                        {errors.phone && <p className="error">Phone is required.</p>}
                                                    </div>
                                                </div>
                                                <div className="col-lg-4">
                                                    <div className="form-group">
                                                        <label>E-mail <span>*</span></label>
                                                        <input type="email" {...register('email', { required: true })} />
                                                        {errors.email && <p className="error">Email is required.</p>}
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group">
                                                        <label>Your Message</label>
                                                        <textarea {...register('message')} cols={1} rows={2}  />
                                                    </div>
                                                </div>
                                                <div className="col-12">
                                                    <div className="form-group mb--0">
                                                        <button name="submit" type="submit" className="axil-btn btn-bg-primary">Send Message</button>
                                                        {result && <p className="success">Message has been sent successfully</p>}
                                                    </div>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="contact-location mb--40">
                                    <h4 className="title mb--20">Our Store</h4>
                                    <span className="address mb--20">{StoreInfo.address}</span>
                                    <span className="phone">Phone: {StoreInfo.phone}</span>
                                    <span className="email">Email: {StoreInfo.email}</span>
                                </div>
                                <div className="contact-career mb--40">
                                    <h4 className="title mb--20">Careers</h4>
                                    <p>Instead of buying six things, one that you really like.</p>
                                </div>
                                <div className="opening-hour">
                                    <h4 className="title mb--20">Opening Hours:</h4>
                                    <p>Monday to Saturday: {StoreInfo.opening.monToSat}
                                        <br /> Sundays: {StoreInfo.opening.othersDay}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="axil-google-map-wrap axil-section-gap pb--0">
                        <div className="mapouter">
                            <div className="gmap_canvas">
                                <iframe width={1080} height={500} id="gmap_canvas" src="https://maps.google.com/maps?q=melbourne&t=&z=13&ie=UTF8&iwloc=&output=embed" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ServiceTwo />
        </main>
        <FooterTwo />
        </>
     );
}
 
export default ContactUs;