import { IWord } from "../../../../../../../shared/api/types"

export interface WordsListProps {
    words: IWord[], 
    curentWordId: string, 
    wordDispatch: (word) => void
}