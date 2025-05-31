import React, { useContext } from 'react';
import { LanguageContext } from '../context/LanguageContext';

const About = () => {
    const { language } = useContext(LanguageContext);

    return (
        <div>
            <h1>{language === 'en' ? 'About Me' : '자기소개'}</h1>
            <p>
                {language === 'en'
                    ? 'Hello! I am an aspiring developer learning React.'
                    : '안녕하세요! 저는 리액트를 배우고 있는 개발자 지망생입니다.'
                }
            </p>
            <p>
                {language === 'en'
                    ? "I'll study hard to become a great developer!"
                    : '열심히 공부해서 멋진 개발자가 될게요!'
                }
            </p>
        </div>
    );
};

export default About;
