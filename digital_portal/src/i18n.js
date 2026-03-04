import i18n from 'i18next'
import {initReactI18next} from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector';
import { interpolate } from 'framer-motion';

i18n


.use(initReactI18next)
.init({
    fallbackLng: 'en',
    debug : true,
    ressources: {
        en:{
            translation: {
                "Digital Certificates Portal":"Digital Certificates Portal",
                "REPUBLIC OF CAMEROON":"REPUBLIC OF CAMEROON",
                "PEACE-WORK-FATHERLAND":"PEACE-WORK-FATHERLAND",
                "Log In":"Log In",
                "Register Now": "Register Now",
            }
        },
        fr:{
            translation: {
                  "Digital Certificates Portal":"Portail des certificats Numerique",
                  "REPUBLIC OF CAMEROON":"REPUBLIQUE DU CAMEROUN",
                  "PEACE-WORK-FATHERLAND":"PAIX-TRAVAIL-PATRIE",
                   "Log In":"SE Connecter",
                  "Register Now":"Enregistrez-Vous"
                   

            }
        }
    },
    interpolation:{escapeValue:false}
})

export default i18n;