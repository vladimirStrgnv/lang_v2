export interface GameListProps {
    wordsCounts: number,
    wordsParams: {
      section: number | null,
      page: number | null,
      wordCounts: number | null,
      filter: string
    }
  }