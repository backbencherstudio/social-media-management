"use client";

import React from 'react';
import { Button } from '@/components/ui/button';

export default function Blogs() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {/* Left Side */}
      <div className="bg-white p-8 rounded-lg border">
        <h2 className="text-2xl font-semibold mb-6">Blog Content</h2>
        <p className="text-gray-600">
          Professional blog writing and content creation services coming soon.
        </p>
      </div>

      {/* Right Side */}
      <div className="bg-white p-8 rounded-lg border">
        <Button variant="outline" className="w-full">
          Coming Soon
        </Button>
      </div>
    </div>
  );
}
