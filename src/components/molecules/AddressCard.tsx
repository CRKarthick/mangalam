import { Text } from '../atoms/Text';
import { FaLocationDot } from 'react-icons/fa6';

const AddressCard = () => {
    return (
        // <div className='w-full h-auto grid lg:grid-cols-4 md:grid-cols-2 lg:gap-7 md:gap-10 gap-7 my-12 z-20 px-8 md:px-0'>
        <div className='w-full bg-white flex flex-col items-center justify-center py-6 cursor-pointer transition duration-300 hover:shadow-xl px-5 rounded-xl cardPseudo after:bg-color1'>
            <div
                className="w-28 h-28 relative z-10 before:content-[''] before:absolute before:top-3 before:right-3 before:w-16 before:h-16 before:bg-color2/30 before:-z-10 before:rounded-tl-3xl before:rounded-br-3xl"
                style={{ textAlign: 'center' }}
            >
                <FaLocationDot size={60} />
            </div>
            <div className='w-full flex flex-col items-center gap-2'>
                <Text
                    as='h4'
                    className='text-base rounded font-medium text-color3'
                >
                    Address
                </Text>
                <Text
                    as='p'
                    className='text-sm  font-light text-center text-color3'
                >
                    <a href="https://www.google.com/maps/place/13%C2%B005'49.9%22N+80%C2%B007'43.1%22E/@13.0971937,80.1264429,17z/data=!3m1!4b1!4m4!3m3!8m2!3d13.0971937!4d80.1286316?hl=en&entry=ttu">
                        No 108, MTH Road, Mannurpet, Padi, Chennai - 600050
                    </a>
                </Text>
                <hr style={{ width: '100px', margin: '10px' }} />
                <Text
                    as='p'
                    className='text-sm  font-light text-center text-color3'
                >
                    <a href="https://www.google.com/maps/place/13%C2%B005'53.4%22N+80%C2%B010'29.7%22E/@13.0981684,80.1727228,17z/data=!3m1!4b1!4m4!3m3!8m2!3d13.0981684!4d80.1749115?hl=en&entry=ttu">
                        No 397, Thiruvarkadu Main Road, Ayapakkam, Chennai -
                        600077
                    </a>
                </Text>
            </div>
        </div>
        // </div>
    );
};

export default AddressCard;
