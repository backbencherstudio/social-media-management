import React, { ReactNode } from 'react';
import Link from 'next/link';

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
  wordCount: string;
  learnMoreLink: string;
}

export default function BlogCard({ icon, title, description, wordCount, learnMoreLink }: CardProps) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="mb-4 text-gray-600">
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <p className="text-sm text-gray-500 mb-3">{wordCount}</p>
      <Link 
        href={learnMoreLink}
        className="text-sm font-medium text-gray-900 hover:text-gray-700 flex items-center gap-1"
      >
        Learn more
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  );
}