import { createContext } from "react"

interface IFilterContext {
    filter: any,
    onChangeFilter: (obj: {}) => void
}

export const FilterContext = createContext<IFilterContext>({
    filter: {},
    onChangeFilter: () => {}
})
