'use clinet'

import { useRouter } from "next/router"
import { LanguageOption, LanguageSelect } from "@styles/language-selector"
import { useState, useEffect } from "react"

const LanguageSelector = () => {
    const router = useRouter()
    const [lang, setLang] = useState(router.locale)


    useEffect(() => {
        document.body.dir = lang === 'fa' ? 'rtl' : "ltr";
    }, [lang]);

    return(
        <LanguageSelect
            value={router.locale}
            onChange={(e) => {
                setLang(e.target.value)
                router.push(router.pathname, router.pathname, { locale: e.target.value })
                }
            }
        >
            <LanguageOption value='en'>En</LanguageOption>
            <LanguageOption value='fa'>Fa</LanguageOption>
        </LanguageSelect>
    )
}

export default LanguageSelector