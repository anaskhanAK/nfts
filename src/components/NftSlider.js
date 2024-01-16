import React from 'react'
import { Carousel } from '@mantine/carousel';

const NftSlider = () => {
    return (
        <div>
            <Carousel
                dragFree
                // height={200}
                slideSize={{ base: '100%', sm: '50%', md: '33.333333%' }}
                slideGap={{ base: 0, sm: 'md' }}
                loop
                align="start"
                style={{ width: '100%', backgroundRepeat: 'no-repeat', backgroundAttachment: 'scroll', backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <Carousel.Slide>
                    <img src='slide1.png' alt='avatar' style={{ padding: '5px' }} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <img src='slide2.png' alt='avatar' style={{ padding: '5px' }} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <img src='slide3.png' alt='avatar' style={{ padding: '5px' }} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <img src='slide4.png' alt='avatar' style={{ padding: '5px' }} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <img src='slide5.png' alt='avatar' style={{ padding: '5px' }} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <img src='slide6.png' alt='avatar' style={{ padding: '5px' }} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <img src='slide7.png' alt='avatar' style={{ padding: '5px' }} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <img src='slide8.png' alt='avatar' style={{ padding: '5px' }} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <img src='slide9.png' alt='avatar' style={{ padding: '5px' }} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <img src='slide10.png' alt='avatar' style={{ padding: '5px' }} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <img src='slide11.png' alt='avatar' style={{ padding: '5px' }} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <img src='slide6.png' alt='avatar' style={{ padding: '5px' }} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <img src='slide13.png' alt='avatar' style={{ padding: '5px' }} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <img src='slide8.png' alt='avatar' style={{ padding: '5px' }} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <img src='slide1.png' alt='avatar' style={{ padding: '5px' }} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <img src='slide2.png' alt='avatar' style={{ padding: '5px' }} />
                </Carousel.Slide>
                <Carousel.Slide>
                    <img src='slide3.png' alt='avatar' style={{ padding: '5px' }} />
                </Carousel.Slide>

            </Carousel>
        </div>

    )
}

export default NftSlider