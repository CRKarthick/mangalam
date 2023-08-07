import { Text } from '../atoms/Text';
// import { FaLocationDot } from 'react-icons/fa6';

import { HiMail } from 'react-icons/hi';

const MailCard = () => {
    return (
        <div className='w-full bg-white flex flex-col items-center justify-center py-6 cursor-pointer transition duration-300 hover:shadow-xl px-5 rounded-xl cardPseudo after:bg-color1'>
            <div
                className="w-28 h-28 relative z-10 before:content-[''] before:absolute before:top-3 before:right-3 before:w-16 before:h-16 before:bg-color2/30 before:-z-10 before:rounded-tl-3xl before:rounded-br-3xl"
                style={{ textAlign: 'center' }}
            >
                <HiMail size={60} />
            </div>
            <div className='w-full flex flex-col items-center gap-2'>
                <Text
                    as='h4'
                    className='text-base rounded font-medium text-color3'
                >
                    Email Us
                </Text>
                <Text
                    as='p'
                    className='text-sm  font-light text-center text-color3'
                >
                    <a href='mailto:mangalamandco05@gmail.com'>
                        mangalamandco05@gmail.com
                    </a>
                </Text>
            </div>
        </div>
    );
};

export default MailCard;
