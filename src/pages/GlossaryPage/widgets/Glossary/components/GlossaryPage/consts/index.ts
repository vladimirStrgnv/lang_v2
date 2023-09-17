import { IWord } from "../../../../../../../shared/api/types"
import { AuthData } from "../../../../../../SignIn/widgets/SignInForm/store/types"
import { BtnConfig } from "../../../../../../../shared/components/BookWordCard/types"

export interface GlossaryPageProps {
    words: IWord[],
    curentWordId: string,
    wordDispatch: (word)=> void, 
    curentWord: IWord,
    auth: AuthData, 
    btnsConfig: BtnConfig[]
}