
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from 'react-feather'; // Optional icons
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-gray-300">
            {/* <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300"> */}

            <div className="max-w-7xl mx-auto px-4 py-10 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Logo & Description */}
                    <div>
                        <h2 className="text-xl font-bold text-white">MyBrand</h2>
                        <p className="mt-2 text-sm">
                            Building amazing experiences for the web.
                        </p>
                    </div>

                    {/* Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Company</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link to={'/'} className="hover:text-white">About</Link></li>
                            <li><Link to={'/'} className="hover:text-white">Careers</Link></li>
                            <li><Link to={'/'} className="hover:text-white">Blog</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Support</h3>
                        <ul className="mt-4 space-y-2">
                            <li><Link to={'/'} className="hover:text-white">Contact</Link></li>
                            <li><Link to={'/'} className="hover:text-white">FAQs</Link></li>
                            <li><Link to={'/'} className="hover:text-white">Help Center</Link></li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="text-sm font-semibold text-white tracking-wider uppercase">Follow Us</h3>
                        <div className="flex space-x-4 mt-4">
                            <Link to={'/'} className="hover:text-white"><Facebook size={20} /></Link>
                            <Link to={'/'} className="hover:text-white"><Twitter size={20} /></Link>
                            <Link to={'/'} className="hover:text-white"><Instagram size={20} /></Link>
                            <Link to={'/'} className="hover:text-white"><Linkedin size={20} /></Link>
                        </div>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-10 border-t border-gray-700 pt-6 text-sm text-center text-gray-500">
                    &copy; {new Date().getFullYear()} MyBrand. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
