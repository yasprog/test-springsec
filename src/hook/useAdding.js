import {useState} from "react";

export const useAdding = (callback) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const adding = async (developer) => {
        try {
            setIsLoading(true)
            await callback(developer)
        } catch (e) {
            setError(e.message)
        } finally {
            setIsLoading(false)
        }
    }
    return [adding, isLoading, error]
}