"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { useState } from "react";
import EmailTagInput from "./guest-email-option";
import { set } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        website: '',
        interest: '',
        timeChecked: false,
        businessType: '',
        noShowPolicy: false,
        referralSource: '',
        country: 'USA',
        otherBusinessType: '',
        otherReferralSource: ''

    });
    const [addguestField, setAddGuestField] = useState(false);
    const [guestEmails, setGuestEmails] = useState<Array<{ value: string, isValid: boolean }>>([]);
    const [showDialog, setShowDialog] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value, type } = e.target as HTMLInputElement;
        const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;

        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const router = useRouter();



    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        console.log(guestEmails);
        setShowDialog(true);

        // Disable scrolling
        document.body.style.overflow = 'hidden';

 
        const timer = setTimeout(() => {
    
            router.push('/demo-confirmed'); // Uncomment this line and set the correct target route
        }, 2000); 

        return () => {
            clearTimeout(timer);
            document.body.style.overflow = 'auto'; // Re-enable scrolling
        };
    };

    const handleGuest = () => {
        setAddGuestField(!addguestField);
    }

    return (
        <div className="w-full bg-white ">
            <div className='border border-[#D2D2D5] rounded-[12px] p-6'>
                <h1 className="text-2xl font-bold mb-6">Enter Details</h1>

                <form onSubmit={handleSubmit} className="demoschedule-form">
                    <div className="mb-4">
                        <label className="block text-base leading-[150%] tracking-[.16px] font-medium mb-2" htmlFor="name">
                            Name *
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-base leading-[150%] tracking-[.16px] font-medium mb-2" htmlFor="email">
                            Email *
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="border-t border-gray-200 my-6"></div>

                    {/* Guest Added Button field  */}

                    <button onClick={handleGuest} className={`text-base font-semibold mb-4 tracking-[.16px] md:px-4 px-3  md:py-3 py-2 cursor-pointer hover:text-white hover:bg-[#4A4C56] bg-[#F6F8FA80] border border-[#4A4C56] rounded-[4px] ${addguestField ? "hidden" : "block"} `}>
                        Add Guests
                    </button>
                    {addguestField && (
                        <EmailTagInput emails={guestEmails} setEmails={setGuestEmails} />
                    )}

                    <div className="mb-4 mt-4 bg-gray-50 p-4 rounded-md">
                        <p className="text-base font-semibold text-gray-600 mb-3">
                            Please confirm you've checked the time and timezone* to avoid selecting a night-time slot by mistake (e.g., 3 AM instead of 3 PM).
                        </p>
                        <div className="flex items-center">
                            <input
                                type="checkbox"
                                id="timeChecked"
                                name="timeChecked"
                                checked={formData.timeChecked}
                                onChange={handleChange}
                                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                required
                            />
                            <label htmlFor="timeChecked" className="ml-2 block text-base text-gray-700">
                                I've checked the time and it's correct.
                            </label>
                        </div>
                    </div>

                    <div className="mb-4">
                        <label className="block text-base leading-[150%] tracking-[.16px] font-medium mb-2" htmlFor="phone">
                            What's your phone number? *
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label className="block text-base leading-[150%] tracking-[.16px] font-medium mb-2" htmlFor="website">
                            Website URL (or link to your socials) *
                        </label>
                        <input
                            type="url"
                            id="website"
                            name="website"
                            value={formData.website}
                            onChange={handleChange}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        />
                    </div>

                    <div className="">
                        <label className="block text-base leading-[150%] tracking-[.16px] font-medium mb-2" htmlFor="interest">
                            Why are you interested in a call? *
                        </label>
                        <textarea
                            id="interest"
                            name="interest"
                            value={formData.interest}
                            onChange={handleChange}
                            rows={1}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            required
                        ></textarea>
                    </div>


                    {/* Select what best describes you */}
                    <div className="mb-6 mt-6">
                        <label className="block text-base leading-[150%] tracking-[.16px] font-medium mb-2">
                            Select what best describes you: *
                        </label>
                        <div className="space-y-3 mt-4">
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="existingBusiness"
                                    name="businessType"
                                    value="Existing Business"
                                    checked={formData.businessType === "Existing Business"}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                    required
                                />
                                <label htmlFor="existingBusiness" className="ml-2 block text-base leading-[150%] tracking-[.16px] text-gray-700">
                                    Existing Business
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="newBusiness"
                                    name="businessType"
                                    value="Launching a New Business Soon"
                                    checked={formData.businessType === "Launching a New Business Soon"}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <label htmlFor="newBusiness" className="ml-2 block text-base leading-[150%] tracking-[.16px] text-gray-700">
                                    Launching a New Business Soon
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="reseller"
                                    name="businessType"
                                    value="Interested in the Reseller Program"
                                    checked={formData.businessType === "Interested in the Reseller Program"}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <label htmlFor="reseller" className="ml-2 block text-base leading-[150%] tracking-[.16px] text-gray-700">
                                    Interested in the Reseller Program
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="otherBusiness"
                                    name="businessType"
                                    value="Other"
                                    checked={formData.businessType === "Other"}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <label htmlFor="otherBusiness" className="ml-2 block text-base leading-[150%] tracking-[.16px] text-gray-700">
                                    Other
                                </label>
                            </div>
                            {formData.businessType === "Other" && (
                                <input
                                    type="text"
                                    name="otherBusinessType"
                                    value={formData.otherBusinessType}
                                    onChange={handleChange}
                                    className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Please specify"
                                />
                            )}
                        </div>
                    </div>

                    {/* No-Show Policy */}
                    <div className="mb-6">
                        <label className="block text-base leading-[150%] tracking-[.16px] font-medium mb-2">
                            No-Show Policy *
                        </label>
                        <div className="flex items-start">
                            <input
                                type="checkbox"
                                id="noShowPolicy"
                                name="noShowPolicy"
                                checked={formData.noShowPolicy}
                                onChange={handleChange}
                                className="h-4 w-4 mt-1 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                                required
                            />
                            <label htmlFor="noShowPolicy" className="ml-2 block text-base leading-[150%] tracking-[.16px] text-gray-700">
                                I acknowledge that failing to attend the meeting (without notice) will disqualify me from future meetings.
                            </label>
                        </div>
                    </div>

                    {/* How did you find us? */}
                    <div className="mb-6">
                        <label className="block text-base leading-[150%] tracking-[.16px] font-medium mb-2">
                            How did you find us? *
                        </label>
                        <div className="space-y-3 ">
                            <div className="flex items-center mt-4">
                                <input
                                    type="radio"
                                    id="google"
                                    name="referralSource"
                                    value="Google"
                                    checked={formData.referralSource === "Google"}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                    required
                                />
                                <label htmlFor="google" className="ml-2 block text-base leading-[150%] tracking-[.16px] text-gray-700">
                                    Google
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="socialMedia"
                                    name="referralSource"
                                    value="Social Media"
                                    checked={formData.referralSource === "Social Media"}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <label htmlFor="socialMedia" className="ml-2 block text-base leading-[150%] tracking-[.16px] text-gray-700">
                                    Social Media
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="contacted"
                                    name="referralSource"
                                    value="You Contacted Me"
                                    checked={formData.referralSource === "You Contacted Me"}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <label htmlFor="contacted" className="ml-2 block text-base leading-[150%] tracking-[.16px] text-gray-700">
                                    You Contacted Me
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="referral"
                                    name="referralSource"
                                    value="Referral"
                                    checked={formData.referralSource === "Referral"}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <label htmlFor="referral" className="ml-2 block text-base leading-[150%] tracking-[.16px] text-gray-700">
                                    Referral
                                </label>
                            </div>
                            <div className="flex items-center">
                                <input
                                    type="radio"
                                    id="otherSource"
                                    name="referralSource"
                                    value="Other"
                                    checked={formData.referralSource === "Other"}
                                    onChange={handleChange}
                                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                                />
                                <label htmlFor="otherSource" className="ml-2 block text-base leading-[150%] tracking-[.16px] text-gray-700">
                                    Other
                                </label>
                            </div>
                            {formData.referralSource === "Other" && (
                                <input
                                    type="text"
                                    name="otherReferralSource"
                                    value={formData.otherReferralSource}
                                    onChange={handleChange}
                                    className="w-full mt-2 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                    placeholder="Please specify"
                                />
                            )}
                        </div>
                    </div>

                    <div className=" md:my-6 my-4 text-base leading-[150%] text-[#4A4C56] tracking-[.16px]" >
                        By proceeding, you confirm that you have read and agree to
                        <span className="font-medium text-[#1D1F2C] "> Calendly's Terms of use</span> and <span className="font-medium text-[#1D1F2C] ">Privacy Notice.</span>
                    </div>




                    <button type="submit" className="bg-[#070707]  cursor-pointer text-white py-4 px-6 rounded-lg hover:bg-[#352d2d] focus:outline-none">
                        Schedule Event
                    </button>
                    {showDialog && (
                        <div
                            className={`fixed inset-0  flex items-start pt-40 justify-center bg-black/30 bg-opacity-10 ${showDialog ? 'block' : 'hidden'}`}
                        >
                            <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full text-center">
                                <div className="flex justify-center mb-4">
                                    {/* Green Checkmark Icon */}
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="50"
                                        height="50"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                        className="text-green-500"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm0 2a10 10 0 110-20 10 10 0 010 20zm.707-12.707a1 1 0 10-1.414 1.414L9 9.586 7.707 8.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l3-3a1 1 0 000-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                </div>
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">Confirmed</h2>
                                <p className="text-sm text-gray-600 mb-4">
                                    You are scheduled with Zana Kastrati.
                                </p>
                                <p className="text-sm text-gray-400">Redirecting...</p>
                            </div>
                        </div>
                    )}
                </form>
            </div>
        </div>
    );

}