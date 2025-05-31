import React, { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

function WelcomeMessage() {
    const { language } = useContext(LanguageContext);

    return (
        <h1>{language === 'EN' ? 'Welcome!' : '환영합니다!'}</h1>
    );
}

export default WelcomeMessage;
