import React from "react";

const Avatar = ({ image, username}) => {
  return (
    <>
      <img className="size-8 rounded-full object-cover" src={image} alt={`Avatar of ${username}`} />
    </>
  );
};

export default Avatar;
