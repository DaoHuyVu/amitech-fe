import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import I18NextHttpBackend from 'i18next-http-backend';
const languages = ['vn','en']
const langIndex = localStorage.getItem('lang') ? parseInt(localStorage.getItem('lang'), 10) : 0;
const language = languages[langIndex] || 'vn'; // Default to 'vn' if index is out of range or invalid
i18next
    .use(initReactI18next)
    .use(I18NextHttpBackend)
    .init({
        lng : language,
        fallbackLng : 'vn',
        backend: {
            loadpath : `${process.env.REACT_APP_WEB_HOST}/locales/{{lng}}/translation.json`
        },
    })

export default i18next