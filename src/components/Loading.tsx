import React from 'react';
import { Loader } from 'lucide-react';

const Loading = () => {
  return (
    <div className="fixed inset-0 bg-[#0a0a0a] flex items-center justify-center z-50">
      <div className="text-center">
        <Loader className="h-12 w-12 text-blue-500 animate-spin mx-auto mb-4" />
        <div className="text-xl text-blue-400 font-medium">
          Loading Astra Zen...
        </div>
      </div>
    </div>
  );
};

export default Loading;