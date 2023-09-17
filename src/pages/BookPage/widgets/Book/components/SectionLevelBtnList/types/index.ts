import { ChangeSectionBtnData } from "../../../types"

export interface SectionLevelBtnListProps {
    btnsData: ChangeSectionBtnData[], 
    currentSection: number, 
    sectionDispatch: (section)=>  void
}