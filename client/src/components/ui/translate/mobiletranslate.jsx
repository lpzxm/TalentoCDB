import { useEffect, useState } from "react";
import { MdOutlineTranslate } from "react-icons/md";

const TranslateMobi = () => {
    const [isLanguageSelectorVisible, setIsLanguageSelectorVisible] = useState(false);

    const googleTranslateElementInit = () => {
        if (!window.google?.translate?.TranslateElement) return;
        new window.google.translate.TranslateElement(
            {
                autoDisplay: false,
                includedLanguages: 'en,es,de,ja,fr,it,pt,zh-CN,hi,ru,el,no',

            },
            "google_translate_element"
        );
    };

    useEffect(() => {
        if (!document.getElementById('google_translate_element')) {
            const translateDiv = document.createElement('div');
            translateDiv.classList.add(
                'z-50',
                'bottom-8',
                'bg-white',
                'right-0',
                'w-fit',
                'fixed',
                'transition-all',
                'duration-300',
                'opacity-0',
                'invisible'
            );
            translateDiv.id = 'google_translate_element';
            document.getElementById('root').appendChild(translateDiv);

            if (!document.querySelector("[src*='translate.google.com/translate_a/element.js']")) {
                const addScript = document.createElement("script");
                addScript.setAttribute(
                    "src",
                    "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
                );
                document.body.appendChild(addScript);
                window.googleTranslateElementInit = googleTranslateElementInit;
            } else {
                googleTranslateElementInit();
            }
        }
    }, []);

    const toggleLanguageSelector = () => {
        const translateElement = document.getElementById('google_translate_element');
        setIsLanguageSelectorVisible(!isLanguageSelectorVisible);
        if (isLanguageSelectorVisible) {
            translateElement.classList.add('opacity-0', 'invisible');
            translateElement.classList.remove('opacity-100', 'visible');
        } else {
            translateElement.classList.add('opacity-100', 'visible');
            translateElement.classList.remove('opacity-0', 'invisible');
        }
    };

    return (
        <div className="fixed bottom-20 right-0 z-50 p-4">

            <button
            
                onClick={toggleLanguageSelector}
                className="bg-blue-500 p-4 rounded-full hover:bg-blue-800"
                
            >
                <MdOutlineTranslate/>
            </button>
        </div>
    );
};

export default TranslateMobi;