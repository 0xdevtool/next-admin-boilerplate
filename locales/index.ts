import enLang from './en-US';
import jaLang from './ja-JP';

export const languageData = [
    {
        languageId: 'english',
        locale: 'en',
        name: 'English',
        icon: 'us',
    },
    {
        languageId: 'japanese',
        locale: 'ja',
        name: 'Japanese',
        icon: 'jp',
    },
];

const AppLocale: any = {
    en: enLang,
    ja: jaLang,
};

export default AppLocale;
