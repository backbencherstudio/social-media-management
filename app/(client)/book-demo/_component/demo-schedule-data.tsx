import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import HashIcons from '@/public/incons/hash-icon';
import { Clock } from 'lucide-react';
import Link from 'next/link';
import { FiArrowUpRight } from "react-icons/fi";

const DemoScheduleData = () => {
    return (
        <div>
            <ContactForm />
        </div>
    );
};

export default DemoScheduleData;


const BookDemoCard = () => {

    return (
        <>
            <Card className="shadow-none h-full border-0 p-2">
                <CardContent className=" h-full p-0">
                    <div className='flex flex-col   h-full'>
                        <div className='flex flex-col gap-4 '>
                            <div className="  flex items-center justify-start">
                                <div className='flex gap-4 items-center'>
                                    <span className=' bg-[#F5F5F780] p-3  rounded-md'>
                                        <HashIcons className='lg:w-6 lg:h-6 w-4 h-4' />
                                    </span>
                                    <h2 className='xk:text-[26px] text-lg text-[#1D1D1F] font-semibold leading-[126%] capitalize'>TagGrowth Intro</h2>
                                </div>
                                <div className='flex items-center gap-2 ml-auto bg-[#F6F8FA] px-2 py-1 rounded-[99px]'>
                                    <span> <Clock className='w-5 h-5' /> </span>
                                    <span className='text-base text-[#070707] leading-[150%] tracking-[.16px]'>20 min</span>
                                </div>
                            </div>
                            <div>
                                <p className='text-base leading-[150%] tracking-[.16px] text-[#4A4C56]'>Book a <span className='text-[#1D1F2C] font-medium'>free 20-min Google Meet call</span> to learn more about TagGrowth and get any of your
                                    questions answered.</p>
                            </div>
                            <div>
                                <p className='text-base leading-[150%] tracking-[.16px] text-[#4A4C56]'><span className='text-[#1D1F2C] font-medium'>Important:</span> Ensure select the correct AM/PM time to avoid mistakes, like 3am instead of 3pm.</p>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3  lg:mt-auto mt-6 justify-end'>
                            <div className='flex'>
                                <span className='flex border-b items-center gap-2 flex-start'>
                                    <Link href="" className='text-base leading-[150%] tracking-[.16px] font-medium '>Client Reviews</Link>
                                    <FiArrowUpRight />
                                </span>
                            </div>
                            <div className='flex'>
                                <span className='flex border-b items-center gap-2 flex-start'>
                                    <Link href="" className='text-base leading-[150%] tracking-[.16px] font-medium '>Pricing & Plans</Link>
                                    <FiArrowUpRight />
                                </span>
                            </div>
                            <div className='flex'>
                                <span className='flex border-b items-center gap-2 flex-start'>
                                    <Link href="" className='text-base leading-[150%] tracking-[.16px] font-medium '>Examples of our work</Link>
                                    <FiArrowUpRight />
                                </span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </>
    )
}

 function ContactForm() {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: '',
      website: '',
      interest: '',
      timeChecked: false,
      guests: [{ name: '', email: '' }]
    });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value, type } = e.target as HTMLInputElement;
      const checked = type === 'checkbox' ? (e.target as HTMLInputElement).checked : undefined;
      
      setFormData(prev => ({
        ...prev,
        [name]: type === 'checkbox' ? checked : value
      }));
    };
  
    const handleGuestChange = (index: number, field: string, value: string) => {
      const updatedGuests = [...formData.guests];
      updatedGuests[index] = { ...updatedGuests[index], [field]: value };
      setFormData(prev => ({ ...prev, guests: updatedGuests }));
    };
  
    const addGuest = () => {
      setFormData(prev => ({
        ...prev,
        guests: [...prev.guests, { name: '', email: '' }]
      }));
    };
  
    const removeGuest = (index: number) => {
      if (formData.guests.length <= 1) return;
      const updatedGuests = formData.guests.filter((_, i) => i !== index);
      setFormData(prev => ({ ...prev, guests: updatedGuests }));
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      // Add your form submission logic here
    };
  
    return (
      <div className="max-w-[520px] mx-auto p-6 bg-white rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">Enter Details</h1>
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="name">
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
            <label className="block text-sm font-medium mb-1" htmlFor="email">
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
  
          <h2 className="text-xl font-semibold mb-4">Add Guests</h2>
  
          <div className="mb-4 bg-gray-50 p-4 rounded-md">
            <p className="text-sm text-gray-600 mb-3">
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
              <label htmlFor="timeChecked" className="ml-2 block text-sm text-gray-700">
                I've checked the time and it's correct.
              </label>
            </div>
          </div>
  
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="phone">
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
            <label className="block text-sm font-medium mb-1" htmlFor="website">
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
  
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1" htmlFor="interest">
              Why are you interested in a call? *
            </label>
            <textarea
              id="interest"
              name="interest"
              value={formData.interest}
              onChange={handleChange}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            ></textarea>
          </div>
  
          {formData.guests.map((guest, index) => (
            <div key={index} className="mb-4 p-4 border border-gray-200 rounded-md">
              <div className="flex justify-between items-center mb-2">
                <h3 className="font-medium">Guest {index + 1}</h3>
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removeGuest(index)}
                    className="text-red-500 text-sm hover:text-red-700"
                  >
                    Remove
                  </button>
                )}
              </div>
              <div className="mb-3">
                <label className="block text-sm font-medium mb-1" htmlFor={`guest-name-${index}`}>
                  Name
                </label>
                <input
                  type="text"
                  id={`guest-name-${index}`}
                  value={guest.name}
                  onChange={(e) => handleGuestChange(index, 'name', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1" htmlFor={`guest-email-${index}`}>
                  Email
                </label>
                <input
                  type="email"
                  id={`guest-email-${index}`}
                  value={guest.email}
                  onChange={(e) => handleGuestChange(index, 'email', e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>
          ))}
  
          <button
            type="button"
            onClick={addGuest}
            className="mb-6 text-blue-600 hover:text-blue-800 text-sm font-medium"
          >
            + Add another guest
          </button>
  
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Submit
          </button>
        </form>
      </div>
    );
  }