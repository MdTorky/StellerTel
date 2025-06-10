import { useState } from "react"
import { useSubmitContact } from "../hooks/useSubmitContact"
import { motion } from "framer-motion"
export const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        surname: "",
        organisation: "",
        email: "",
        phone: "",
        message: "",
    })

    const { submitContact, isLoading, error, success } = useSubmitContact()

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await submitContact(formData)
    }

    const inputVariants = {
        focus: { scale: 1.02, boxShadow: "0 0 0 2px rgba(26, 46, 77, 0.3)" },
    }

    return (
        <motion.form
            onSubmit={handleSubmit}
            className="bg-white p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label htmlFor="firstName" className="block mb-1 font-medium">
                        First Name <span className="text-red-500">*</span>
                    </label>
                    <motion.input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        whileFocus="focus"
                        variants={inputVariants}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </div>

                <div>
                    <label htmlFor="surname" className="block mb-1 font-medium">
                        Surname <span className="text-red-500">*</span>
                    </label>
                    <motion.input
                        type="text"
                        id="surname"
                        name="surname"
                        value={formData.surname}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        whileFocus="focus"
                        variants={inputVariants}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </div>
            </div>

            <div className="mb-4">
                <label htmlFor="organisation" className="block mb-1 font-medium">
                    Organisation / Company
                </label>
                <motion.input
                    type="text"
                    id="organisation"
                    name="organisation"
                    value={formData.organisation}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    whileFocus="focus"
                    variants={inputVariants}
                    transition={{ type: "spring", stiffness: 300 }}
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label htmlFor="email" className="block mb-1 font-medium">
                        Email Address <span className="text-red-500">*</span>
                    </label>
                    <motion.input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        whileFocus="focus"
                        variants={inputVariants}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </div>

                <div>
                    <label htmlFor="phone" className="block mb-1 font-medium">
                        Phone Number
                    </label>
                    <motion.input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                        whileFocus="focus"
                        variants={inputVariants}
                        transition={{ type: "spring", stiffness: 300 }}
                    />
                </div>
            </div>

            <div className="mb-6">
                <label htmlFor="message" className="block mb-1 font-medium">
                    Your Message <span className="text-red-500">*</span>
                </label>
                <motion.textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                    whileFocus="focus"
                    variants={inputVariants}
                    transition={{ type: "spring", stiffness: 300 }}
                ></motion.textarea>
            </div>

            <motion.button
                type="submit"
                disabled={isLoading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
                className="bg-accent text-white font-medium py-3 px-6 rounded-lg hover:bg-accent/70 transition-all disabled:opacity-70 cursor-pointer"
            >
                {isLoading ? "Sending..." : "Send Message"}
            </motion.button>

            {/* {error && <div className="mt-4 p-3 bg-red-100 text-red-700 rounded-lg">{error}</div>}

            {success && (
                <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">Thanks — we'll be in touch shortly.</div>
            )} */}

            {error && <AnimatedMessage show={error} type="error">
                {error}
            </AnimatedMessage>}

            {success && <AnimatedMessage show={success} type="success">
                Thanks — we'll be in touch shortly.
            </AnimatedMessage>}
        </motion.form>
    )
}

const AnimatedMessage = ({ show, type, children }) => {
    return (
        <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: show ? 1 : 0, height: show ? "auto" : 0 }}
            transition={{ duration: 0.3 }}
            className={`mt-4 p-3 rounded-lg ${type === "error" ? "bg-red-100 text-red-700" : "bg-green-100 text-green-700"}`}
        >
            {children}
        </motion.div>
    )
}