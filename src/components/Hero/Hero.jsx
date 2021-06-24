import { Container, Image } from 'react-bootstrap'
import './Hero.scss'
import ArrowDown from '../../assets/arrow.svg';
export default function Hero() {
    return (
        <Container fluid className="hero">
            <div className="hero__heading">
                <h1 className="hero__heading__text noselect">I build</h1>
                <h1 className="hero__heading__text noselect">websites.</h1>
                <h1 className="hero__heading__text noselect">For &nbsp;you.</h1>
            </div>
            <div className="row">
                <a href="#about">
                    <div className="hero__arrow col-12 col-sm-4">
                        <Image className="hero__arrow__icon" src={ArrowDown} />
                    </div>
                </a>
            </div>
        </Container>
    )
}
