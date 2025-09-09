import { useState, type JSX , useMemo} from "react"
import { useDebounce } from "./useDebounce"
import {items} from './data'

interface searchListProps {
    source: string[],
    delay?: number
}

export const SearchList = (props: searchListProps): JSX.Element => {
    const {source, delay} = props;

    const data: string[]= source ?? items

    const [query, setQuery] = useState('')
    const debouncedQuery = useDebounce(query, delay ?? 400)

    const filtered = useMemo(() => {
        if( !debouncedQuery.trim()) return data
        return data.filter(item => item.toLowerCase().includes(debouncedQuery.trim()))
    }, [data, debouncedQuery])

    return (
        <>
            <label htmlFor="search">Search</label>
            <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" id="search" />
            <div>Results: {filtered.length}</div>
            <ul>
                {filtered.length === 0
                    ? <li>Not found</li>
                    : filtered?.map((item, index) => (
                        <li key={index}>{item}</li>))
                }
            </ul>
        </>
    )
}