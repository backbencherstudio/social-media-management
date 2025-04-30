"use client"

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Send, Upload } from 'lucide-react';
import Heading from '../../_components/heading-text';
import ParagraphText from '../../_components/paragraph-text';
import { HexColorPicker } from 'react-colorful';

type FormData = {
  businessName: string;
  websiteUrl: string;
  businessIndustry: string;
  contactPerson: string;
  businessEmail: string;
  phoneNumber: string;
  businessDescription: string;
  socialMediaGoals: string[];
  pastChallenges: string;
  targetAudience: string;
  currentPlatforms: {
    instagram: string;
    facebook: string;
    twitter: string;
    tiktok: string;
    linkedin: string;
    youtube: string;
  };
  brandPersonality: string;
  stylePreferences: string;
  logo: FileList;
  competitors: string;
  competitorContent: string;
  admirableContent: string;
  brandedHashtags: string;
  keywordPhrases: string;
  additionalPreferences: string;
  upcomingPromotions: string;
  fontSelect: {
    heading: string;
    subheading: string;
    body: string;
  };
  colorSelect: {
    primary: string;
    secondary: string;
    tertiary: string;
  };
};

export default function ClientQuestioneryComponet() {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormData>({
    defaultValues: {
      colorSelect: {
        primary: '#34B6AF',
        secondary: '#1C2323',
        tertiary: '#D9D9D9'
      }
    }
  });

  const [colors, setColors] = useState({
    primary: '#34B6AF',
    secondary: '#1C2323',
    tertiary: '#D9D9D9'
  });

  const [activeColorPicker, setActiveColorPicker] = useState<string | null>(null);

  const handleColorChange = (key: 'primary' | 'secondary' | 'tertiary', value: string) => {
    setColors(prev => ({
      ...prev,
      [key]: value
    }));
    setValue(`colorSelect.${key}`, value);
  };
  const onSubmit = (data: FormData) => {
    console.log(data);
  };

  return (
    <div className="min-h-screen bg-gray-50 lg:py-[100px] md:py-[80px] py-[60px] px-5 2xl:px-0">
      <div className="max-w-[996px] mx-auto">
        <div className=' mb-12 '>
          <div className="   ">
            <Heading
              text="Client Questionnaire"
              className="text-2xl md:text-[28px] lg:text-[42px] capitalize font-bold text-[#1D1D1F]"
            />
            <ParagraphText
              paraText="Please fill out the Client Questionnaire all information."
              className=" mx-auto mt-3 sm:mt-4 text-sm sm:text-base text-[#1D1F2C]"
            />
          </div>
        </div>

        <div className="bg-white rounded-[18px] p-6">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-[42px] font-inter border border-[.5px] border-[#D2D2D5] rounded-[12px] p-6">
            {/* 1. Business Information */}
            <section>
              <h2 className="text-2xl font-semibold text-[#070707] lg:mb-6 md:mb-4 mb-3">1. Business Information</h2>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="block text-base leading-[150%] tracking-[.16px] text-[#4A4C56] ">Business Name</label>
                  <input
                    type="text"
                    {...register("businessName", { required: true })}
                    className="mt-2 block w-full rounded-[6px] border border-[#DFE1E7] focus:outline-none py-3 px-2 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-base leading-[150%] tracking-[.16px] text-[#4A4C56]">Website URL</label>
                  <input
                    type="text"
                    {...register("websiteUrl")}
                    className="mt-2 block w-full rounded-[6px] border border-[#DFE1E7] focus:outline-none py-3 px-2 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-base leading-[150%] tracking-[.16px] text-[#4A4C56]">Business Industry</label>
                  <input
                    type="text"
                    {...register("businessIndustry", { required: true })}
                    className="mt-2 block w-full rounded-[6px] border border-[#DFE1E7] focus:outline-none py-3 px-2 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-base leading-[150%] tracking-[.16px] text-[#4A4C56]">Contact Person</label>
                  <input
                    type="text"
                    {...register("contactPerson")}
                    className="mt-2 block w-full rounded-[6px] border border-[#DFE1E7] focus:outline-none py-3 px-2 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-base leading-[150%] tracking-[.16px] text-[#4A4C56]">Business Email Address</label>
                  <input
                    type="email"
                    {...register("businessEmail", { required: true })}
                    className="mt-2 block w-full rounded-[6px] border border-[#DFE1E7] focus:outline-none py-3 px-2 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-base leading-[150%] tracking-[.16px] text-[#4A4C56]">Phone Number</label>
                  <input
                    type="tel"
                    {...register("phoneNumber")}
                    className="mt-2 block w-full rounded-[6px] border border-[#DFE1E7] focus:outline-none py-3 px-2 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="mt-4">
                <label className="block text-base leading-[150%] tracking-[.16px] text-[#4A4C56]">Brief Description of Your Business</label>
                <textarea
                  {...register("businessDescription", { required: true })}
                  rows={4}
                  className="mt-2 block w-full rounded-[6px] border border-[#DFE1E7] focus:outline-none py-2 px-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </section>

            {/* 2. Social Media Goals */}
            <section className=''>
              <h2 className="text-2xl font-semibold text-[#070707] lg:mb-6 md:mb-4 mb-3">2. Social Media Goals</h2>
              <div className="space-y-4">
                <label className="block text-base leading-[150%] tracking-[.16px] text-[#4A4C56]">
                  What are your primary goals for social media marketing?
                </label>
                <div className="space-y-4">
                  {[
                    'Increase brand awareness',
                    'Drive website traffic',
                    'Generate leads/sales',
                    'Increase engagement (likes, shares, comments)',
                    'Build a community'
                  ].map((goal) => (
                    <div key={goal} className="flex items-center">
                      <input
                        type="checkbox"
                        value={goal}
                        {...register("socialMediaGoals")}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                      <label className="ml-2 text-base text-[#4A4C56]">{goal}</label>
                    </div>
                  ))}
                </div>
                <div className='pt-3'>
                  <label className="block text-base leading-[150%] tracking-[.16px] text-[#4A4C56] ">
                    What challenges have you faced with social media marketing in the past?
                  </label>
                  <textarea
                    {...register("pastChallenges")}
                    rows={4}
                    className="mt-2 block w-full rounded-[6px] border border-[#DFE1E7] focus:outline-none py-2 px-2 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </section>

            {/* 3. Target Audience */}
            <section>
              <h2 className="text-2xl font-semibold text-[#070707] lg:mb-6 md:mb-4 mb-3">3. Target Audience</h2>
              <div>
                <label className="block text-base leading-[150%] tracking-[.16px] text-[#4A4C56]">
                  Who IS your ideal customer? (Age, gender, location, interests, etc)
                </label>
                <textarea
                  {...register("targetAudience", { required: true })}
                  rows={4}
                  className="mt-2 block w-full rounded-[6px] border border-[#DFE1E7] focus:outline-none py-2 px-2 focus:border-blue-500 focus:ring-blue-500"
                />
              </div>
            </section>

            {/* 4. Current Social Media Presence */}
            <section>
              <h2 className="text-2xl font-semibold text-[#070707] lg:mb-6 md:mb-4 mb-3">4. Current Social Media Presence</h2>
              <p className="text-sm text-gray-600 lg:mb-6 md:mb-4 mb-3">
                What social media platforms are you currently using? (Share your social media profile link)
              </p>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {[
                  ['Instagram', 'instagram'],
                  ['X (Twitter)', 'twitter'],
                  ['Facebook', 'facebook'],
                  ['TikTok', 'tiktok'],
                  ['LinkedIn', 'linkedin'],
                  ['YouTube', 'youtube']
                ].map(([label, key]) => (
                  <div key={key}>
                    <label className="block text-base leading-[150%] tracking-[.16px] text-[#4A4C56]">{label}</label>
                    <input
                      type="text"
                      {...register(`currentPlatforms.${key as keyof FormData["currentPlatforms"]}`)}
                      className="mt-2 block w-full rounded-[6px] border border-[#DFE1E7] focus:outline-none py-3 px-2 focus:border-blue-500 focus:ring-blue-500"
                    />
                  </div>
                ))}
              </div>
            </section>

            {/* 5. Brand & Content Preferences */}
            <section>
              <h2 className="text-2xl font-semibold text-[#070707] lg:mb-6 md:mb-4 mb-3">5. Brand & Content Preferences</h2>
              <div className="space-y-6">
                <div>
                  <label className="block text-base leading-[150%] tracking-[.16px] text-[#4A4C56]">
                    How would you describe your brand's personality? (Fun, professional, casual, authoritative, etc. Please provide examples.)
                  </label>
                  <textarea
                    {...register("brandPersonality")}
                    rows={4}
                    className="mt-2 block w-full rounded-[6px] border border-[#DFE1E7] focus:outline-none py-2 px-2 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-base leading-[150%] tracking-[.16px] text-[#4A4C56]">
                    Are there specific colors, fonts, or styles we should follow?
                  </label>
                  {/* <textarea
                    {...register("stylePreferences")}
                    rows={4}
                    className="mt-2 block w-full rounded-[6px] border border-[#DFE1E7] focus:outline-none py-2 px-2 focus:border-blue-500 focus:ring-blue-500"
                  /> */}
                </div>
                <div className='border border-[#DFE1E7] rounded-[6px] p-4'>
                  <div className='flex items-center justify-between border-b border-[#DFE1E7] pb-4'>
                    <div className='w-full md:max-w-[29%]'>
                      <h4 className="block text-base leading-[150%] tracking-[.16px] text-[#4A4C56]">Logo</h4>
                      <p className="block text-sm leading-[150%] tracking-[.16px] text-[#4A4C56]">Your logo name is the name your customers use to refer to you.</p>
                    </div>
                    <div className="mt-1 w-full md:max-w-[52%] flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                      <div className="space-y-1 text-center">
                        <Upload className="mx-auto h-12 w-12 text-gray-400" />
                        <div className="flex text-sm text-gray-600">
                          <label className="relative cursor-pointer rounded-md bg-white font-medium text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 hover:text-blue-500">
                            <span>Upload a file</span>
                            <input
                              type="file"
                              className="sr-only"
                              {...register("logo")}
                              accept="image/*"
                            />
                          </label>
                          <p className="pl-1">or drag and drop</p>
                        </div>
                        <p className="text-xs text-gray-500">PNG, JPG up to 10MB</p>
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between border-b border-[#DFE1E7] py-5'>
                    <div className='w-full md:max-w-[29%]'>
                      <h4 className="block text-base leading-[150%] tracking-[.16px] text-[#4A4C56]">Font</h4>
                      <p className="block text-sm leading-[150%] tracking-[.16px] text-[#4A4C56]">Style of text that's printed on a page or
                        displayed on a design,</p>
                    </div>
                    <div className=" w-full md:max-w-[52%] flex justify-center  rounded-md">
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                        {[
                          ['Heading', 'heading'],
                          ['Subheading', 'subheading'],
                          ['Body', 'body'],
                        ].map(([label, key]) => (
                          <div key={key} className='flex flex-col gap-2'>
                            <input
                              type="text"
                              {...register(`fontSelect.${key as keyof FormData["fontSelect"]}`)}
                              className="block w-full rounded-[6px] border border-[#DFE1E7] focus:outline-none py-3 px-2 focus:border-blue-500 focus:ring-blue-500"
                            />
                            <label className="block text-sm leading-[150%] tracking-[.16px] text-[#4A4C56]">{label}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className='flex items-center justify-between border-b border-[#DFE1E7]  py-5'>
                    <div className='w-full md:max-w-[29%] '>
                      <h4 className="block text-base leading-[150%] tracking-[.16px] text-[#4A4C56]">Colors</h4>
                      <p className="block text-sm leading-[150%] tracking-[.16px] text-[#4A4C56]">Represent its brand identity of your
                        company or organization.</p>
                    </div>
                    <div className=" w-full md:max-w-[52%] flex justify-center  rounded-md">
                      <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
                        {[
                          ['Primary', 'primary'],
                          ['Secondary', 'secondary'],
                          ['Tertiary', 'tertiary'],
                        ].map(([label, key]) => (
                          <div key={key} className="flex flex-col gap-2 relative">
                            <div className="flex px-4 py-3 gap-2
                             items-center rounded-md border border-gray-200 overflow-hidden">
                              <button
                                type="button"
                                className="w-5 h-5 rounded-[4px] flex-shrink-0 cursor-pointer  "
                                style={{ backgroundColor: colors[key as keyof typeof colors] }}
                                onClick={() => setActiveColorPicker(activeColorPicker === key ? null : key)}
                              />
                              <input
                                type="text"
                                value={colors[key as keyof typeof colors]}
                                onChange={(e) => handleColorChange(key as 'primary' | 'secondary' | 'tertiary', e.target.value)}
                                className="w-full border-none  focus:outline-none focus:ring-0"
                                {...register(`colorSelect.${key as keyof FormData["colorSelect"]}`)}
                              />
                            </div>
                            {activeColorPicker === key && (
                              <div className="absolute z-10 top-12 ">
                                <div className="fixed inset-0 " onClick={() => setActiveColorPicker(null)} />
                                <div className="relative z-20 ">
                                  <HexColorPicker
                                    className=''
                                    color={colors[key as keyof typeof colors]}
                                    onChange={(color) => handleColorChange(key as 'primary' | 'secondary' | 'tertiary', color)}
                                  />
                                </div>
                              </div>
                            )}
                            <label className="block text-sm text-gray-700">{label}</label>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </section>

            {/* 6. Competitor & Inspiration Analysis */}
            <section>
              <h2 className="text-2xl font-semibold text-[#070707] lg:mb-6 md:mb-4 mb-3">6. Competitor & Inspiration Analysis</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-base leading-[150%] tracking-[.16px] text-[#4A4C56] ">
                    Who are your competitors in your business?
                  </label>
                  <textarea
                    {...register("competitors")}
                    rows={4}
                    className="mt-2 block w-full rounded-[6px] border border-[#DFE1E7] focus:outline-none py-2 px-2 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-base leading-[150%] tracking-[.16px] text-[#4A4C56]">
                    What do you like or dislike about their content?
                  </label>
                  <textarea
                    {...register("competitorContent")}
                    rows={4}
                    className="mt-2 block w-full rounded-[6px] border border-[#DFE1E7] focus:outline-none py-2 px-2 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-base leading-[150%] tracking-[.16px] text-[#4A4C56]">
                    Are there any brands/accounts you admire for their social media presence?
                  </label>
                  <textarea
                    {...register("admirableContent")}
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </section>

            {/* 7. Hashtags & Keywords */}
            <section>
              <h2 className="text-2xl font-semibold text-[#070707] lg:mb-6 md:mb-4 mb-3">7. Hashtags & Keywords:</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-base leading-[150%] tracking-[.16px] text-[#4A4C56]">
                    Do you have any branded hashtags you use?
                  </label>
                  <textarea
                    {...register("brandedHashtags")}
                    rows={4}
                    className="mt-2 block w-full rounded-[6px] border border-[#DFE1E7] focus:outline-none py-2 px-2 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-base leading-[150%] tracking-[.16px] text-[#4A4C56]">
                    Are there specific keywords or phrases you want included in posts?
                  </label>
                  <textarea
                    {...register("keywordPhrases")}
                    rows={4}
                    className="mt-2 block w-full rounded-[6px] border border-[#DFE1E7] focus:outline-none py-2 px-2 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </section>

            {/* 8. Additional Information */}
            <section>
              <h2 className="text-2xl font-semibold text-[#070707] lg:mb-6 md:mb-4 mb-3  ">8. Additional Information:</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-base leading-[150%] tracking-[.16px] text-[#4A4C56]">
                    Any other preferences or special requests?
                  </label>
                  <textarea
                    {...register("additionalPreferences")}
                    rows={4}
                    className="mt-2 block w-full rounded-[6px] border border-[#DFE1E7] focus:outline-none py-2 px-2 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label className="block text-base leading-[150%] tracking-[.16px] text-[#4A4C56]">
                    Do you have any specific promotions or campaigns coming up?
                  </label>
                  <textarea
                    {...register("upcomingPromotions")}
                    rows={4}
                    className="mt-2 block w-full rounded-[6px] border border-[#DFE1E7] focus:outline-none py-2 px-2 focus:border-blue-500 focus:ring-blue-500"
                  />
                </div>
              </div>
            </section>

            <div className="border-t border-gray-200 pt-6">
              <p className="text-sm text-gray-600 mb-6">
                Thank you for filling out this questionnaire! Our team will use this information to create an effective
                social media strategy tailored to your brand.
              </p>
              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
              >
                <Send className="w-5 h-5 mr-2" />
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div >
  );
}
