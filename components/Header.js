import { Router } from 'next/dist/client/router';
import { useRouter } from 'next/router';


import Image from 'next/image';
import letsgosvg from '../public/letsgo.svg';

function Header () {

    const router = useRouter();


    return (
        <header>
            {/* Top Nav: Image */}
               {/*  <div className="flex items-center p-1 flex-grow py-2">
                    <div>

                        <Image
                        onClick={ () => router.push('/')}
                        src={letsgosvg}
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"                    
                        />


                    </div>

                </div> */}

<div className="flex items-center space-x-3 p-2 pl-6 bg-amazon_blue-light text-white text-sm">
                   {/*  <p className="link flex items-center">
                        <MenuIcon className="h-6 mr-1"/>
                        All
                    </p> */}
                    <p className="link">Prime Video</p>
                    <p className="link">Amazon Business</p>
                    <p className="link">Today's Deals</p>
                    <p className="link hidden lg:inline-flex">Electronics</p>
                    <p className="link hidden lg:inline-flex">Food & Grocery</p>
                    <p className="link hidden lg:inline-flex">Prime</p>
                    <p className="link hidden lg:inline-flex">Buy Again</p>
                    <p className="link hidden lg:inline-flex">Shopper Toolkit</p>
                    <p className="link hidden lg:inline-flex">Health & Personal Care</p>
                </div>

        </header>
    )
};

export default Header;