export interface StatusFilterBtnProps {
    isCurrentFilter: boolean,
    title: string,
    abbreviation: string,
    setGlossaryFilter: (filter)=> void,
    filter: string
}