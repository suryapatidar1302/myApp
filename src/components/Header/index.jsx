import React from 'react';
import { Search2Icon } from '@chakra-ui/icons';
import { Input, InputGroup } from '@chakra-ui/react';
import profileIcon from '../../assets/profileIcon.svg';
import wishlistIcon from '../../assets/wishlistIcon.svg';
import bag from '../../assets/bag.svg';

const Header = () => {
    return (
        <>
            <div className="w-full h-32 bg-defaultBackgroundColor border-2 border-black flex justify-items-center justify-evenly items-center">
                <div className="text-[#232323] font-defaultFontFamily">
                    FASHION
                </div>
                <div className="text-[#232323] font-defaultFontFamily text-sm list-none flex justify-evenly items-center justify-items-center min-w-1/2">
                    <div>
                        <li className="cursor-pointer">
                            <a>Home</a>
                        </li>
                    </div>
                    <div>
                        <li className="cursor-pointer">
                            <a>Men</a>
                        </li>
                    </div>
                    <div>
                        <li className="cursor-pointer">
                            <a>Women</a>
                        </li>
                    </div>
                    <div>
                        <li className="cursor-pointer">
                            <a>Kids</a>
                        </li>
                    </div>
                </div>
                <div>
                    <InputGroup
                        size="sm"
                        className="flex items-center justify-items-center gap-5"
                    >
                        <Input
                            variant="filled"
                            placeholder="Search here..."
                            size="sm"
                            className="!rounded"
                        />
                        <button>
                            <Search2Icon />
                        </button>
                    </InputGroup>
                </div>
                <div className="flex justify-evenly w-[20%]">
                    <button>
                        <div className="profile flex flex-col items-center justify-items-center">
                            <div className="profileIcon">
                                <img src={profileIcon} alt="Profile Icon" />
                            </div>
                            <div className="text-[#232323] text-base font-light">
                                Profile
                            </div>
                        </div>
                    </button>
                    <button>
                        <div className="wishlist flex flex-col items-center justify-items-center">
                            <div className="wishlistIcon">
                                <img src={wishlistIcon} alt="Wishlist Icon" />
                            </div>
                            <div className="text-[#232323] text-base font-light">
                                Wishlist
                            </div>
                        </div>
                    </button>
                    <button>
                        <div className="wishlist flex flex-col items-center justify-items-center">
                            <div className="wishlistIcon">
                                <img src={bag} alt="Wishlist Icon" />
                            </div>
                            <div className="text-[#232323] text-base font-light">
                                Bag
                            </div>
                        </div>
                    </button>
                </div>
            </div>
        </>
    );
};

export default Header;
