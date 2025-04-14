import React from 'react';

interface CommentIconProps {
    className?: string;
}

const CommentIcon: React.FC<CommentIconProps> = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="23" viewBox="0 0 22 23" fill="none">
            <path d="M4.71102 21.48C4.41258 21.48 4.11539 21.3978 3.8507 21.2341C3.3643 20.9336 3.07414 20.4128 3.07414 19.8409V17.4409C1.36149 15.2711 0.621329 12.5614 0.98836 9.78078C1.5768 5.31953 5.24352 1.66297 9.70633 1.08687C12.8498 0.680779 15.9354 1.71109 18.1754 3.91203C20.4155 6.11297 21.4995 9.17781 21.1498 12.3211C20.643 16.8733 16.9671 20.6183 12.4098 21.2263C10.5929 21.4672 8.75539 21.2156 7.06961 20.4936L5.44445 21.3056C5.21164 21.4219 4.9607 21.48 4.71102 21.48Z" stroke="#4A4C56" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    );
};

export default CommentIcon;
