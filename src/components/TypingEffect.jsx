import React, { useEffect, useState } from 'react';

const TypingEffect = ({ text, speed, onComplete }) => {
    const [displayedText, setDisplayedText] = useState('');

    useEffect(() => {
        let index = 0;
        setDisplayedText(''); // Clear the text before starting
        const interval = setInterval(() => {
            setDisplayedText(prev => prev + text[index]);
            index++;
            if (index >= text.length) {
                clearInterval(interval);
                if (onComplete) {
                    onComplete();
                }
            }
        }, speed);

        return () => clearInterval(interval);
    }, [text, speed, onComplete]); // Run effect when text changes

    return <span className='gradient-text'>{displayedText}</span>;
};

export default TypingEffect;
