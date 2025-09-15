// src/components/Navbar.jsx
import React, { useState } from 'react';
import { Menu, X } from 'react-feather'; // Optional icons, install react-feather
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenRight, setIsOpenRight] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleMenuRight = () => setIsOpenRight(!isOpenRight);

    return (
        <nav className="bg-white shadow-md fixed w-full top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Right toggleMenu */}
                    <div className="hidden md:flex lg:flex items-center">
                        <button onClick={toggleMenuRight}>
                            {isOpenRight ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                    <div className='flex absolute left-[10px] lg:left-40 top-[55px]'>
                        {/* Right Dropdown Menu */}
                        {isOpenRight && (
                            <div className="hidden md:flex lg:flex flex-col bg-white px-4 pb-4 space-y-2 shadow-md pl-10 pr-10">
                                <Link onClick={toggleMenuRight} to={'/'} className="block text-gray-700 hover:bg-gray-200 p- hover:text-blue-600">Home</Link>
                                <Link onClick={toggleMenuRight} to={'/accordian'} className="block text-gray-700 hover:bg-gray-200 p- hover:text-blue-600">Accordian</Link>
                                <Link onClick={toggleMenuRight} to={'/randomColor'} className="block text-gray-700 hover:bg-gray-200 p- hover:text-blue-600">RandomColor</Link>
                                <Link onClick={toggleMenuRight} to={'/starRating'} className="block text-gray-700 hover:bg-gray-200 p- hover:text-blue-600">StarRating</Link>
                                <Link onClick={toggleMenuRight} to={'/imageSlider'} className="block text-gray-700 hover:bg-gray-200 p- hover:text-blue-600">ImageSlider</Link>
                                <Link onClick={toggleMenuRight} to={'/loadMoreData'} className="block text-gray-700 hover:bg-gray-200 p- hover:text-blue-600">LoadMoreData</Link>
                                <Link onClick={toggleMenuRight} to={'/treeView'} className="block text-gray-700 hover:bg-gray-200 p- hover:text-blue-600">TreeView</Link>
                                <Link onClick={toggleMenuRight} to={'/qrCodeGenerator'} className="block text-gray-700 hover:bg-gray-200 p- hover:text-blue-600">QRCodeGenerator</Link>
                                <Link onClick={toggleMenuRight} to={'/lightDarkMode'} className="block text-gray-700 hover:bg-gray-200 p- hover:text-blue-600">LightDarkMode</Link>
                                <Link onClick={toggleMenuRight} to={'/scrollIndicator'} className="block text-gray-700 hover:bg-gray-200 p- hover:text-blue-600">ScrollIndicator</Link>
                                <Link onClick={toggleMenuRight} to={'/tabTest'} className="block text-gray-700 hover:bg-gray-200 p- hover:text-blue-600">TabTest</Link>
                                <Link onClick={toggleMenuRight} to={'/modalTest'} className="block text-gray-700 hover:bg-gray-200 p- hover:text-blue-600">modalTest</Link>
                                <Link onClick={toggleMenuRight} to={'/githubProfileFinder'} className="block text-gray-700 hover:bg-gray-200 p- hover:text-blue-600">githubProfileFinder</Link>
                                <Link onClick={toggleMenuRight} to={'/searchAutocomplete'} className="block text-gray-700 hover:bg-gray-200 p- hover:text-blue-600">searchAutocomplete</Link>
                                <Link onClick={toggleMenuRight} to={'/ticTacToe'} className="block text-gray-700 hover:bg-gray-200 p- hover:text-blue-600">ticTacToe</Link>
                                <Link onClick={toggleMenuRight} to={'/useFetchHookTest'} className="block text-gray-700 hover:bg-gray-200 p- hover:text-blue-600">useFetchHookTest</Link>
                                <Link onClick={toggleMenuRight} to={'/useOnclickOutsideTest'} className="block text-gray-700 hover:bg-gray-200 p- hover:text-blue-600">useOnclickOutsideTest</Link>
                                <Link onClick={toggleMenuRight} to={'/useWindowResizeTest'} className="block text-gray-700 hover:bg-gray-200 p- hover:text-blue-600">useWindowResizeTest</Link>
                                <Link onClick={toggleMenuRight} to={'/scrollToTopAndBottom'} className="block text-gray-700 hover:bg-gray-200 p- hover:text-blue-600">scrollToTopAndBottom</Link>
                                <Link onClick={toggleMenuRight} to={'/scrollToSection'} className="block text-gray-700 hover:bg-gray-200 p- hover:text-blue-600">scrollToSection</Link>
                            </div>
                        )}
                    </div>

                    {/* Logo */}
                    <Link to={'/'}>
                        <div className="flex items-center">
                            <span className="text-xl font-bold text-blue-600">MyBrand</span>
                        </div>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6">
                        <Link to={'/'} className="text-gray-700 hover:text-blue-600">Home</Link>
                        <Link to={'/'} className="text-gray-700 hover:text-blue-600">About</Link>
                        <Link to={'/'} className="text-gray-700 hover:text-blue-600">Services</Link>
                        <Link to={'/'} className="text-gray-700 hover:text-blue-600">Contact</Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button onClick={toggleMenu}>
                            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-white px-4 pb-4 space-y-2 shadow-md">
                    <Link onClick={toggleMenu} to={'/'} className="block text-gray-700 hover:text-blue-600">Home</Link>
                    <Link onClick={toggleMenu} to={'/'} className="block text-gray-700 hover:text-blue-600">About</Link>
                    <Link onClick={toggleMenu} to={'/'} className="block text-gray-700 hover:text-blue-600">Services</Link>
                    <Link onClick={toggleMenu} to={'/'} className="block text-gray-700 hover:text-blue-600">Contact</Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
