import { useState } from "react"
import { API_URL } from "../config"

export const useSubmitContact = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [success, setSuccess] = useState(false)

    const submitContact = async (formData) => {
        setIsLoading(true)
        setError(null)
        setSuccess(false)

        try {
            const response = await fetch(`${API_URL}/api/contact`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.message || "Something went wrong. Please try again.")
            }

            setSuccess(true)
            return data
        } catch (err) {
            setError(err.message || "Something went wrong. Please try again.")
            return null
        } finally {
            setIsLoading(false)
        }
    }

    return { submitContact, isLoading, error, success }
}
