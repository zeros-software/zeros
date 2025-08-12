"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setStatus("sending");

        try {
            const res = await fetch("/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (!res.ok) {
                throw new Error(`Error: ${res.statusText}`);
            }

            await res.json();
            setStatus("success");
        } catch (err) {
            setStatus("error");
        }
    };

    return (
        <div className="flex flex-col h-screen text-white relative px-6">
            <div className="py-4 pt-16 flex flex-col max-w-2xl">
                <span className="sf-pro-bold text-7xl">Tell us about you</span>
                <span className="text-4xl mt-4">
                    Let us know how we can help you achieve your goal.
                </span>
                <div className="w-full bg-white h-0.5 mt-6"></div>

                <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                    <AnimatePresence mode="wait">
                        {/* STEP 1: MESSAGE */}
                        {status === "idle" && step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.3 }}
                            >
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    placeholder="Type your message..."
                                    required
                                    className="w-full p-3 rounded text-white cursor-text resize-none"
                                />
                                {formData.message.trim() && (
                                    <button
                                        type="button"
                                        onClick={() => setStep(2)}
                                        className="mt-4 bg-[#F6F6F7] text-[#090909] px-6 py-2 rounded hover:bg-[#CACACA] cursor-pointer"
                                    >
                                        Continue
                                    </button>
                                )}
                            </motion.div>
                        )}

                        {/* STEP 2: NAME + EMAIL */}
                        {status === "idle" && step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-4"
                            >
                                <div>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        placeholder="Your name"
                                        required
                                        className="w-full p-3 rounded text-white"
                                    />
                                </div>
                                <div>
                                    <input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        placeholder="Your email"
                                        required
                                        className="w-full p-3 rounded text-white"
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="mt-4 bg-[#F6F6F7] text-[#090909] px-6 py-2 rounded hover:bg-[#CACACA] cursor-pointer"
                                >
                                    Send Email
                                </button>
                            </motion.div>
                        )}

                        {/* SUCCESS MESSAGE */}
                        {status === "success" && (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="mt-6"
                            >
                                <h2 className="text-3xl font-bold mb-2">Thanks for getting in touch!</h2>
                                <p className="text-lg">
                                    We&apos;ve received your message and will get back to you shortly.
                                </p>
                            </motion.div>
                        )}

                        {/* ERROR MESSAGE */}
                        {status === "error" && (
                            <motion.div
                                key="error"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="text-red-500"
                            >
                                <p>Something went wrong. Please try again.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </form>
            </div>
        </div>
    );
}
