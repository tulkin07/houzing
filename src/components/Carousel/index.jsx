import React, { useRef } from 'react'
import { Container, Arrow, SliderImg, Overlay, Content } from './style'
import { Carousel } from 'antd';
import slider1 from '../../assets/images/slider1.png'
import slider2 from '../../assets/images/slider2.png'
import slider3 from '../../assets/images/slider3.jpg'
import next from '../../assets/images/next.png'
import prev from '../../assets/images/prev.png'
const contentStyle = {
    height: 'calc(100VH - 130px)',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
};
export default function GetCarousel() {

    const slider = useRef()
    return (
        <Container>
            <Carousel ref={slider} autoplay>
                <SliderImg src={slider1} />
                <SliderImg src={slider2} />
                <SliderImg src={slider3} />
            </Carousel>
            <Overlay />
            <Content>
                <Content.Title>Skyper Pool Partment</Content.Title>
                <Content.Desc>112 Glenwood Ave Hyde Park, Boston, MA</Content.Desc>
                <Content.Price>$5,250/mo</Content.Price>
            </Content>
            <Arrow src={prev} left="true" onClick={() => slider.current.prev()} />
            <Arrow src={next} onClick={() => slider.current.next()} />
        </Container>
    )
}
