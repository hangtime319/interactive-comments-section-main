import React from "react";

const DeleteModal = ({ onCancel, onConfirm }) => {
  return (
    // Overlay
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
      {/* Box Modal */}
      <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-xl">
        <h2 className="text-xl font-medium text-gray-800 mb-4">Delete comment</h2>
        <p className="text-gray-500 mb-4 leading-relaxed">Are you sure you want to delete this comment? This will remove the comment and can't be undone.</p>

        {/* Buttons */}
        <div className="flex justify-between gap-3 w-full">
          <button onClick={onCancel} className="w-full py-3 bg-[#67727E] text-white rounded-lg font-medium uppercase text-sm hover:opacity-50 transition-opacity cursor-pointer">No , Cancel</button>
          <button onClick={onConfirm} className="w-full py-3 bg-[#ED6368] text-white rounded-lg font-medium uppercase text-sm hover:opacity-50 transition-opacity cursor-pointer">Yes , Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
