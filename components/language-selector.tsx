import { useRouter } from "next/router"
import { LanguageOption, LanguageSelect } from "@styles/language-selector"

const LanguageSelector = () => {
    const router = useRouter()

    return(
        <LanguageSelect
            value={router.locale}
            onChange={(e) => router.push(router.pathname, router.pathname, { locale: e.target.value })}
        >
            <LanguageOption value='en'>En</LanguageOption>
            <LanguageOption value='fa'>Fa</LanguageOption>
        </LanguageSelect>
    )
}

export default LanguageSelector