import { useEffect, useRef } from "react";
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaPhoneAlt } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Contact = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_1mrmwny', 'template_m9raent', form.current, 'sqnWxbE8qt_Y7wZ0A')
            .then((result) => {
                console.log(result.text);
                toast.success("Message sent successfully")
            }, (error) => {
                console.log(error.text);
                toast.error("Message not sent!")
            });
        e.target.reset();
    };
    return (
        <section id="contact" className="container mx-auto p-2" data-aos="zoom-in-up" data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <form ref={form} onSubmit={sendEmail} className="w-full p-8 my-4 bg-gray-900 rounded-lg shadow-lg dark:bg-gray-900">
                <h2 className="text-2xl font-bold text-center dark:text-white">Contact Me</h2>
                <div className="grid grid-cols-1 gap-4 mt-4 sm:grid-cols-2">
                    <div className="flex flex-col">
                        <label htmlFor="name" className="mb-2 font-semibold dark:text-gray-200">Name</label>
                        <input type="text" id="name" name="from_name" className="p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" required />
                    </div>
                    <div className="flex flex-col">
                        <label htmlFor="email" className="mb-2 font-semibold dark:text-gray-200">Email</label>
                        <input type="email" id="email" name="from_email" className="p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" required />
                    </div>
                </div>
                <div className="flex flex-col mt-4">
                    <label htmlFor="message" className="mb-2 font-semibold dark:text-gray-200">Message</label>
                    <textarea id="message" name="message" rows="5" className="p-2 border border-gray-300 rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-gray-200" required></textarea>
                </div>
                <div className="flex justify-center mt-6">
                    <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded-lg hover:bg-blue-700">Send</button>
                </div>
                <div className="mt-6 text-center">
                    <p className="text-xl font-semibold dark:text-gray-200">You can also find me on:</p>
                    <div className="my-1 flex justify-center items-center space-x-2">
                        <FaPhoneAlt className="dark:text-gray-200" />
                        <h2 className="font-medium text-lg dark:text-gray-200">+8801810313991</h2>
                    </div>
                    <div className="my-1 flex justify-center items-center space-x-2">
                        <TfiEmail className="dark:text-gray-200" />
                        <h2 className="dark:text-gray-200 font-medium text-lg">sisazid182713@gmail.com</h2>
                    </div>
                    {/* <div className="flex items-center justify-center mt-4 space-x-4">
                        <a href="https://github.com/Sa18-f" aria-label="GitHub" className="transition-transform dark:fill-white fill-black hover:scale-150">
                            <svg width="30" height="30" viewBox="0 0 15 15" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.49997 0.25C3.49641 0.25 0.25 3.49591 0.25 7.50025C0.25 10.7026 2.32714 13.4207 5.20809 14.3797C5.57083 14.446 5.70301 14.2222 5.70301 14.0299C5.70301 13.8576 5.69678 13.4019 5.69322 12.7971C3.6766 13.2351 3.25111 11.825 3.25111 11.825C2.92131 10.9874 2.44598 10.7644 2.44598 10.7644C1.78772 10.3149 2.49583 10.3238 2.49583 10.3238C3.22352 10.3751 3.60628 11.0711 3.60628 11.0711C4.25297 12.1788 5.30334 11.8588 5.71637 11.6733C5.78224 11.205 5.96961 10.8855 6.17657 10.7043C4.56674 10.521 2.87414 9.89918 2.87414 7.12104C2.87414 6.32925 3.15676 5.68257 3.62052 5.17563C3.54575 4.99226 3.29696 4.25521 3.69173 3.25691C3.69173 3.25691 4.30014 3.06196 5.68521 3.99973C6.26336 3.83906 6.88379 3.75895 7.50021 3.75583C8.11619 3.75895 8.73618 3.83906 9.31522 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50025C14.75 3.49591 11.5036 0.25 7.49997 0.25Z" fillRule="evenodd" clipRule="evenodd"></path>
                            </svg>
                        </a>
                        <a href="https://web.facebook.com/shoriful.islamsazid.75" aria-label="Facebook" className="transition-transform dark:fill-white fill-black hover:scale-150">
                            <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M9 8h-3v4h3v12h5v-12h3.656l.344-4h-4v-1.111c0-.899.089-1.222 1.197-1.222h2.803v-5h-3.999c-4.196 0-5.001 1.978-5.001 4.889v2.444z" />
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/sazid_0/" aria-label="Instagram" className="dark:fill-white transition-transform  fill-black hover:scale-150">
                            <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                            </svg>
                        </a>
                    </div> */}
                </div>
            </form>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default Contact;