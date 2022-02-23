import {useMemo} from "react";

export const useSortedDevelopers = (developers, sort) => {
    const sortedDevelopers = useMemo(()=> {
        if (sort) {
            return [...developers].sort((a, b) => a[sort].localeCompare(b[sort]))
        }
        return developers
    }, [sort, developers])
    return sortedDevelopers

}

export const useDevelopers = (developers, sort, query) => {
    const sortedDevelopers = useSortedDevelopers(developers, sort)
    const sortedAndSeacrhedDevelopers = useMemo(() => {
        return sortedDevelopers.filter(developer => developer.firstName.toLowerCase().includes(query.toLowerCase()) || developer.lastName.toLowerCase().includes(query.toLowerCase()))
    }, [query, sortedDevelopers])
    return sortedAndSeacrhedDevelopers;
}