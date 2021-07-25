import React, { useState, useEffect } from 'react';

const Slides = (props) => {
    const { slides } = props;

    const [currentSlidePage, setCurrentSlidePage] = useState(0);

    const renderCurrentSlide = () => {
        const slide = slides[currentSlidePage];
        const { text, title } = slide;

        return (
            <div id="slide" className="card text-center">
                <h1 data-testid="title">{title}</h1>
                <p data-testid="text">{text}</p>
            </div>
        );
    }

    const handleSetCurrentSlide = (slidePage) => {
        if (slidePage >= 0 && slidePage < slides.length) {
            setCurrentSlidePage(slidePage)
        }
    }

    return (
        <div>
            <div id="navigation" className="text-center">
                <button
                    data-testid="button-restart"
                    className="small outlined"
                    onClick={() => handleSetCurrentSlide(0)}
                    disabled={currentSlidePage === 0}
                >
                    Restart
                </button>
                <button
                    data-testid="button-prev"
                    className="small"
                    onClick={() => handleSetCurrentSlide(currentSlidePage-1)}
                    disabled={currentSlidePage === 0}
                >
                    Prev
                </button>
                <button
                    data-testid="button-next"
                    className="small"
                    onClick={() => handleSetCurrentSlide(currentSlidePage+1)}
                    disabled={currentSlidePage === slides.length - 1}
                >
                    Next
                </button>
            </div>
           {renderCurrentSlide()}
        </div>
    );

}

export default Slides;
