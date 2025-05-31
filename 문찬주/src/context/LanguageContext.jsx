// src/context/LanguageContext.jsx
import React, { createContext, useState } from 'react';

// 1. Context 만들기
export const LanguageContext = createContext();

// 2. Provider 컴포넌트 만들기
export const LanguageProvider = ({ children }) => {
    // 언어 상태 관리 ('en' or 'ko')
    const [language, setLanguage] = useState('en');

    // 언어 변경 함수
    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'en' ? 'ko' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
};
