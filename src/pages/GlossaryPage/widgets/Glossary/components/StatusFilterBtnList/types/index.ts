import { FilterBtnData } from "../../../utils/consts"

export interface StatusFilterBtnListProps {
    filterBtnsData: FilterBtnData[],
    filterDispatch: (filter)=> void,
    currentFilter: string
}