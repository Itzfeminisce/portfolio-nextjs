'use client'
import React, { useState } from 'react';

const ContactMe = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    return (
        <div className='flex items-center justify-between flex-wrap max-w-screen-md mx-auto gap-x-5'>
            <div className='p-4 project-card-bg rounded-lg shadow-lg my-4  flex-1'>
                <h1 className='text-3xl text-black font-bold'> Send me Mail</h1>
                <p className='text-sm text-slate-600 py-3'>
                If you have any questions or if you would like to work with me on a project, feel free to send me a message. I am always happy to chat and I am excited to hear from you.</p>
                <p className='text-black'>Let us chat!</p>
                <br />

                <form onSubmit={handleSubmit} className="mx-auto">
                    <div className="mb-4">
                        <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-500">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                            className="w-full bg-indigo-500/10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-500">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            className="w-full bg-indigo-500/10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-500">
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                            className="w-full bg-indigo-500/20 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Submit
                    </button>
                </form>


            </div>
            <div>
                <h1 className='text-lg uppercase font-semibold text-gradient'>Contact Address</h1>
                <h2 className='text-xl font-semibold'>Lagos, Nigeria</h2>
                <p>Phone: +234 123 456 7890</p>
                <p>Primary Email: rofesol.ng@gmail.com</p>
                <p>Work Email: oluwafemi@notjustevent.com</p>
            </div>
        </div>);
};


export default ContactMe