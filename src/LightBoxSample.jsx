import Lightbox from 'react-image-lightbox';
import React from 'react';
import './LightBoxSample.css';
import pic1 from './images/01.jpg';
import pic2 from './images/02.jpg';
import pic3 from './images/03.jpg';


const images = [pic1, pic2, pic3];
//ss
// const images = [
//     '../images/01.jpg',
//     '../images/02.jpg',
//     '../images/03.jpg'
// ];

class LightBoxSample extends React.Component{

    constructor(props) {
        super(props);

        this.state = {
            photoIndex: 0,
            isOpen: false,
        };
    }

    render() {

        const { photoIndex, isOpen } = this.state;

        return (
            <div>


                {!isOpen &&
                    <div>
                        <img src={pic1} className="thumbnail" onClick={() => this.setState({ isOpen: true, photoIndex:0 })} />
                        <img src={pic2} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:1 })} />
                        <img src={pic3} className="thumbnail"  onClick={() => this.setState({ isOpen: true, photoIndex:2 })} />

                    </div>

                }
                {isOpen && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                        onMovePrevRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + images.length - 1) % images.length,
                            })
                        }
                        onMoveNextRequest={() =>
                            this.setState({
                                photoIndex: (photoIndex + 1) % images.length,
                            })
                        }
                    />
                )}
            </div>
        );
    }
}

export default LightBoxSample;