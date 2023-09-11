export interface BookWordItemProps {
    word: string,
    id?: string,
    translate: string,
    difficulty: string,
    isChoosen: boolean,
    onClick: (id: string)=> void
  }