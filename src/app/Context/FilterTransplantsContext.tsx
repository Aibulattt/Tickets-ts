import { createContext } from "react"

interface IFilterContext {
    filter: {},
    onChangeFilter: (obj: {}) => void
}

export const FilterContext = createContext<IFilterContext>({
    filter: {},
    onChangeFilter: () => {}
})
