export interface GameCardProps {
    link: string,
    imgLink: string,
    meaning: string,
    title: string,
    descrpt: string,
    wordsCounts: number,
    wordsParams: {
      section: number | null,
      page: number | null,
      wordCounts: number | null,
      filter: string
    }
  }