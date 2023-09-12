import { IWord } from "../../../../../../../shared/api/types"

export interface OptionBtnProps {
    wordId: string, 
    isChoosenWord: boolean, 
    correctWordId: string, 
    word: string, 
    onClick: ()=> void, 
    choosenWord: IWord
}