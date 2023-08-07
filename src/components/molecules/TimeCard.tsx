import { Text } from '../atoms/Text';
import { FaClock } from 'react-icons/fa6';

const TimeCard = () => {
    return (
        <div className='w-full bg-white flex flex-col items-center justify-center py-6 cursor-pointer transition duration-300 hover:shadow-xl px-5 rounded-xl cardPseudo after:bg-color1'>
            <div
                className="w-28 h-28 relative z-10 before:content-[''] before:absolute before:top-3 before:right-3 before:w-16 before:h-16 before:bg-color2/30 before:-z-10 before:rounded-tl-3xl before:rounded-br-3xl"
                style={{ textAlign: '-webkit-center' }}
            >
                <FaClock size={60} />
            </div>
            <div className='w-full flex flex-col items-center gap-2'>
                <Text
                    as='h4'
                    className='text-base rounded font-medium text-color3'
                >
                    Open Hours
                </Text>
                <Text
                    as='p'
                    className='text-sm  font-light text-center text-color3'
                >
                    Monday - Saturday <br /> 9:00 AM - 7:30 PM
                </Text>
                <hr style={{ width: '100px', margin: '10px' }} />
                <Text
                    as='p'
                    className='text-sm  font-light text-center text-color3'
                >
                    Sunday <br /> 9:00 AM - 2:30 PM
                </Text>
            </div>
        </div>
    );
};

export default TimeCard;
