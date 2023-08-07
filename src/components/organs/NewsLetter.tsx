import { Image } from '../atoms/Image';
import { Text } from '../atoms/Text';
// import { SubscribeForm } from '../molecules/SubscribeForm';
// import { NewsletterTexts } from '../particles/DataLists';
import groupOfPlus from '../../assets/plusGroup2.png';
import AddressCard from '../molecules/AddressCard';
// import { Icon1 } from '../../assets/icon1.png';
import { Fade } from 'react-awesome-reveal';
import CallCard from '../molecules/CallCard';
import MailCard from '../molecules/MailCard';
import TimeCard from '../molecules/TimeCard';

const NewsLetter = () => {
    return (
        <section className='w-full my-32 flex justify-between relative items-start lg:h-[900px] h-[1400px]'>
            <div className='bg-color3/10 w-[30%] h-[70%] self-end rounded-r-xl'></div>
            <div className='bg-color3/10 w-[30%] h-[70%] rounded-l-xl'></div>
            <div
                className='w-full bg-color3/5 h-[100%] absolute flex flex-col items-center
            justify-center md:gap-16 gap-10 px-5'
            >
                {/* <Text
                    as='h1'
                    className='lg:text-3xl md:text-2xl text-xl text-center text-color3/70 lg:w-3/5 w-full'
                >
                    {NewsletterTexts.firstText}
                </Text> */}
                {/* <SubscribeForm /> */}
                <main className='w-full pt-32 flex flex-col gap-3 items-center justify-center'>
                    {/* <Text
                        as='p'
                        className='font-light text-base text-color3/80 tracking-widest'
                    >
                        <Fade>Contact Us</Fade>
                    </Text> */}
                    <Text
                        as='h2'
                        className='md:text-4xl text-2xl font-medium capitalize text-color3'
                    >
                        <Fade>Contact Us</Fade>
                    </Text>
                    {/* <div className='w-full h-auto grid lg:grid-cols-4 md:grid-cols-2 lg:gap-7 md:gap-10 gap-7 my-12 z-20 px-8 md:px-0'>
                        <div className='w-full bg-white flex flex-col items-center justify-center py-6 cursor-pointer transition duration-300 hover:shadow-xl px-5 rounded-xl cardPseudo after:bg-color1'>
                            <div
                                className="w-28 h-28 relative z-10 before:content-[''] before:absolute before:top-3 before:right-3 before:w-16 before:h-16 before:bg-color2/30 before:-z-10 before:rounded-tl-3xl before:rounded-br-3xl"
                                style={{ textAlign: '-webkit-center' }}
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
                                    No 108, MTH Road, Mannurpet, Padi, Chennai -
                                    600050
                                </Text>
                                <hr />
                                <Text
                                    as='p'
                                    className='text-sm  font-light text-center text-color3'
                                >
                                    No 397, Thiruvarkadu Main Road, Ayapakkam,
                                    Chennai - 600077
                                </Text>
                            </div>
                        </div>
                        <Card
                            cardClass='w-full bg-white flex flex-col items-center justify-center py-6 cursor-pointer transition duration-300 hover:shadow-xl px-5 rounded-xl cardPseudo after:bg-color1'
                            imageWrapperClass="w-28 h-28 relative z-10 before:content-[''] before:absolute before:top-3 before:right-3 before:w-16 before:h-16 before:bg-color2/30 before:-z-10 before:rounded-tl-3xl before:rounded-br-3xl"
                            cover='object-cover'
                            imageAlt='First Text'
                            imageSrc='src\assets\icon1.png'
                            textWrapperClass='w-full flex flex-col items-center gap-2'
                        >
                            <Text
                                as='h4'
                                className='text-base rounded font-medium text-color3'
                            >
                                First Text
                            </Text>
                            <Text
                                as='p'
                                className='text-sm  font-light text-center text-color3'
                            >
                                Second Text
                            </Text>
                        </Card>
                    </div> */}
                    <div className='w-full h-auto grid lg:grid-cols-2 md:grid-cols-2 lg:gap-30 md:gap-10 gap-7 my-12 z-20 px-8 md:px-0'>
                        <AddressCard />
                        <CallCard />
                        <MailCard />
                        <TimeCard />
                    </div>
                </main>
            </div>

            <Image
                image={groupOfPlus}
                alt='Plus'
                className='absolute -bottom-16 right-2 h-32'
            />
        </section>
    );
};

export default NewsLetter;
