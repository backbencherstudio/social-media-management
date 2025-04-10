"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

export default function Video() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
      {/* Left Side */}
      <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg border">
        <h2 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Video Content</h2>
        <p className="text-sm sm:text-base text-gray-600">
          Professional video content creation and editing services coming soon.
        </p>
      </div>

      {/* Right Side */}
      <div className="bg-white p-4 sm:p-6 lg:p-8 rounded-lg border">
        <Button variant="outline" className="w-full text-sm sm:text-base">
          Coming Soon
        </Button>
      </div>
    </div>
  );
}
