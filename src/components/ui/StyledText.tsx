import React from 'react';

const StyledText = ({ text }: { text: string }) => {
  const parts = text.split(/(\*\*.*?\*\*|\*.*?\*)/g);

  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <span key={i} className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-bold">
              {part.slice(2, -2)}
            </span>
          );
        }
        if (part.startsWith('*') && part.endsWith('*')) {
          return (
            <span key={i} className="text-white/90">
              {part.slice(1, -1)}
            </span>
          );
        }
        return part;
      })}
    </>
  );
};

export default StyledText;
