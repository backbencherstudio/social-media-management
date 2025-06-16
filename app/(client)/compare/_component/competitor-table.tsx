"use client"

import React from 'react';
import Heading from '../../_components/heading-text';
import ParagraphText from '../../_components/paragraph-text';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { CheckCircle, XCircle } from "lucide-react"
import { useState, useEffect } from "react"

interface SocialMediaCompany {
    id: number
    company: string
    rating: number
    startingPrice: string
    quality: {
        text: string
        emoji: string
    }
    revisionsAllowed: boolean
    customBrandedPosts: boolean
    scheduledAndPosted: boolean
    teamLocation: string
}


const socialMediaCompanies: SocialMediaCompany[] = [
    {
        id: 1,
        company: "Tag Growth",
        rating: 5,
        startingPrice: "$99",
        quality: { text: "Great", emoji: "🏆" },
        revisionsAllowed: true,
        customBrandedPosts: true,
        scheduledAndPosted: true,
        teamLocation: "Dhaka",
    },
    {
        id: 2,
        company: "99 Dollar Social",
        rating: 5,
        startingPrice: "$199",
        quality: { text: "Great", emoji: "🏆" },
        revisionsAllowed: true,
        customBrandedPosts: true,
        scheduledAndPosted: true,
        teamLocation: "Iran",
    },
    {
        id: 3,
        company: "Smarcomms",
        rating: 4,
        startingPrice: "$98",
        quality: { text: "Good", emoji: "👍" },
        revisionsAllowed: true,
        customBrandedPosts: true,
        scheduledAndPosted: false,
        teamLocation: "Russia",
    },
    {
        id: 4,
        company: "Schedulit",
        rating: 4,
        startingPrice: "$96",
        quality: { text: "Good", emoji: "👍" },
        revisionsAllowed: true,
        customBrandedPosts: true,
        scheduledAndPosted: true,
        teamLocation: "Afghanistan",
    },
    {
        id: 5,
        company: "SocialSinQ",
        rating: 3,
        startingPrice: "$98",
        quality: { text: "Good", emoji: "👍" },
        revisionsAllowed: false,
        customBrandedPosts: true,
        scheduledAndPosted: true,
        teamLocation: "North Africa",
    },
    {
        id: 6,
        company: "Socinova",
        rating: 3,
        startingPrice: "$78",
        quality: { text: "Good", emoji: "👍" },
        revisionsAllowed: true,
        customBrandedPosts: true,
        scheduledAndPosted: true,
        teamLocation: "Palestine",
    },
    {
        id: 7,
        company: "98 Dollar Social",
        rating: 2,
        startingPrice: "$99",
        quality: { text: "Bad", emoji: "👎" },
        revisionsAllowed: true,
        customBrandedPosts: false,
        scheduledAndPosted: true,
        teamLocation: "Saudi Arabia",
    },
    {
        id: 8,
        company: "99 Social",
        rating: 2,
        startingPrice: "$92",
        quality: { text: "Bad", emoji: "👎" },
        revisionsAllowed: false,
        customBrandedPosts: true,
        scheduledAndPosted: true,
        teamLocation: "Monaco",
    },
    {
        id: 9,
        company: "75 Social",
        rating: 2,
        startingPrice: "$95",
        quality: { text: "Bad", emoji: "👎" },
        revisionsAllowed: false,
        customBrandedPosts: true,
        scheduledAndPosted: true,
        teamLocation: "Greece",
    },
    {
        id: 10,
        company: "98 Buck Social",
        rating: 1,
        startingPrice: "$88",
        quality: { text: "Bad", emoji: "👎" },
        revisionsAllowed: false,
        customBrandedPosts: false,
        scheduledAndPosted: true,
        teamLocation: "South African",
    },
    {
        id: 11,
        company: "100 Pound Social",
        rating: 1,
        startingPrice: "$79",
        quality: { text: "Bad", emoji: "👎" },
        revisionsAllowed: false,
        customBrandedPosts: false,
        scheduledAndPosted: true,
        teamLocation: "Haiti",
    },
    {
        id: 12,
        company: "50 Pound Social",
        rating: 1,
        startingPrice: "$99",
        quality: { text: "Bad", emoji: "👎" },
        revisionsAllowed: true,
        customBrandedPosts: true,
        scheduledAndPosted: true,
        teamLocation: "Algeria",
    },
]



const CompetitorTable = () => {
 

    const renderStars = (rating: number) => {
        return (
            <div className="flex">
                {[...Array(5)].map((_, i) => (
                    <span key={i} className={`text-lg ${i < rating ? "text-yellow-400" : "text-gray-300"}`}>
                        ★
                    </span>
                ))}
            </div>
        )
    }

    return (
        <div className='max-w-[1200px] mx-auto px-5 2xl:px-0 lg:py-[100px] md:py-[80px] py-[60px]'>
            <div className='md:max-w-[498px] mx-auto text-center'>
                <Heading
                    text="Competitor Table Review"
                    className="text-2xl md:text-[28px] lg:text-[42px] capitalize font-bold text-[#1D1D1F]"
                />
                <ParagraphText
                    paraText="The table below objectively compares the top low-cost social media agencies on the most important factors."
                    className=" mx-auto mt-3 sm:mt-4 text-sm sm:text-base text-[#1D1F2C]"
                />
            </div>
            <div className="overflow-x-auto lg:mt-12 md:mt-10 mt-8">
                <Table className="border-collapse w-full">
                    <TableHeader>
                        <TableRow className="bg-gray-50 leading-[150%] tracking-[.16px] md:text-base text-sm ">
                            <TableHead className="py-4 px-4 text-left font-medium text-[#1D1F2C] border-gray-200 border ">Company</TableHead>
                            <TableHead className="py-4 px-4 text-left font-medium border border-gray-200 text-white  " style={{background: "linear-gradient(110deg, #0D0D0D 5.15%, #7C7C85 139.45%)"}} > 
                                Rating
                            </TableHead>
                            <TableHead className="py-4 px-4 text-left font-medium text-[#1D1F2C] border-gray-200 border">Starting price</TableHead>
                            <TableHead className="py-4 px-4 text-left font-medium text-[#1D1F2C] border-gray-200 border">Quality</TableHead>
                            <TableHead className="py-4 px-4 text-left font-medium text-[#1D1F2C] border-gray-200 border" >
                                Revisions
                                <br />
                                allowed
                            </TableHead>
                            <TableHead className="py-4 px-4 text-left font-medium text-[#1D1F2C] border-gray-200 border">
                                Custom,
                                <br />
                                branded posts
                            </TableHead>
                            <TableHead className="py-4 px-4 text-left font-medium text-[#1D1F2C] border-gray-200 border">
                                Schedul'd &<br />
                                posted for you
                            </TableHead>
                            <TableHead className="py-4 px-4 text-left font-medium text-[#1D1F2C]  border-gray-200 border">Team location</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {socialMediaCompanies.map((company, index) => (
                            <TableRow key={company.id} className={` ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}  text-[#4A4C56] md:text-base text-sm leading-[150%] tracking-[.16px]`}>
                                <TableCell className="py-4 px-4  border-gray-200 border">{company.company}</TableCell>
                                <TableCell className="py-4 px-4  border-gray-200 border">{renderStars(company.rating)}</TableCell>
                                <TableCell className="py-4 px-4  border-gray-200 border">{company.startingPrice}</TableCell>
                                <TableCell className="py-4 px-4 border-gray-200 border">
                                    <div className="flex items-center gap-1 ">
                                        {company.quality.text} <span>{company.quality.emoji}</span>
                                    </div>
                                </TableCell>
                                <TableCell className="py-4 px-4  border-gray-200 border">
                                    <div className="flex items-center justify-center">
                                        {company.revisionsAllowed ? (
                                            <CheckCircle className="text-green-500 h-5 w-5" />
                                        ) : (
                                            <XCircle className="text-red-500 h-5 w-5" />
                                        )}
                                    </div>
                                </TableCell>
                                <TableCell className="py-4 px-4  border-gray-200 border">
                                    <div className="flex items-center justify-center">
                                        {company.customBrandedPosts ? (
                                            <CheckCircle className="text-green-500 h-5 w-5" />
                                        ) : (
                                            <XCircle className="text-red-500 h-5 w-5" />
                                        )}
                                    </div>
                                </TableCell>
                                <TableCell className="py-4 px-4  border-gray-200 border">
                                <div className="flex items-center justify-center">
                                    {company.scheduledAndPosted ? (
                                        <CheckCircle className="text-green-500 h-5 w-5" />
                                    ) : (
                                        <XCircle className="text-red-500 h-5 w-5" />
                                    )}
                                    </div>
                                </TableCell>
                                <TableCell className="py-4 px-4  border-gray-200 border">{company.teamLocation}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default CompetitorTable;



