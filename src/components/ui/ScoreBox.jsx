import React from "react";

const ScoreBox = ({ initialScore = 0 }) => {
  const [score, setScore] = React.useState(initialScore);

  const handleUpvote = () => {
    setScore((prev) => prev + 1);
  };

  const handleDownvote = () => {
    setScore((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="flex flex-row md:flex-col items-center justify-between bg-gray-100 rounded-lg px-4 py-2 w-24 md:w-11 md:px-0 md:py-3 h-10 md:h-auto">
      <button className="flex items-center justify-center p-1 text-[#C5C6EF] hover:text-[#5357B6] transition-colors cursor-pointer" aria-label="Upvote" onClick={handleUpvote}>
        <svg width="11" height="11" xmlns="http://www.w3.org/2000/svg">
          <path
            fill="currentColor"
            d="M6.33 10.896c.137 0 .255-.05.354-.149.1-.1.149-.217.149-.354V7.004h3.315c.136 0 .254-.05.354-.149.099-.1.148-.217.148-.354V5.272a.483.483 0 0 0-.148-.354.483.483 0 0 0-.354-.149H6.833V1.4a.483.483 0 0 0-.149-.354.483.483 0 0 0-.354-.149H4.915a.483.483 0 0 0-.354.149c-.1.1-.149.217-.149.354v3.37H1.08a.483.483 0 0 0-.354.15c-.1.099-.149.217-.149.353v1.23c0 .136.05.254.149.353.1.1.217.149.354.149h3.333v3.39c0 .136.05.254.15.353.098.1.216.149.353.149H6.33Z"
          />
        </svg>
      </button>

      <span className="text-[#5357B6] font-bold">{score}</span>

      <button className="flex items-center justify-center p-1 text-[#C5C6EF] hover:text-[#5357B6] transition-colors cursor-pointer" aria-label="Downvote" onClick={handleDownvote}>
        <svg width="11" height="3" xmlns="http://www.w3.org/2000/svg">
          <path fill="currentColor" d="M9.256 2.66c.204 0 .38-.056.53-.167.148-.11.222-.243.222-.396V.722c0-.152-.074-.284-.223-.395a.859.859 0 0 0-.53-.167H.76a.859.859 0 0 0-.53.167C.083.437.009.57.009.722v1.375c0 .153.074.285.223.396a.859.859 0 0 0 .53.167h8.495Z" />
        </svg>
      </button>
    </div>
  );
};

export default ScoreBox;
