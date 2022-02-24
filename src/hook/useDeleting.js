import {useState} from "react";

export const useDeleting = (callback) => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState('')

    const deleting = async (developer) => {
        try {
            setIsLoading(true)
            await callback(developer)
        }
        catch (e) {
            setError(e.message)
        }
        finally {
           setIsLoading(false)
        }
    }
    return [deleting, isLoading, error]
}