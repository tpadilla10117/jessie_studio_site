import Image from 'next/image';
import letsgosvg from '../public/letsgo.svg';

function Header () {
    return (
        <header>
            {/* Top Nav: Image */}
                <div>
                    <div>

                        <Image
                        
                        src={letsgosvg}
                        width={150}
                        height={40}
                        objectFit="contain"
                        className="cursor-pointer"
                        
                        
                        />


                    </div>

                </div>

        </header>
    )
};

export default Header;