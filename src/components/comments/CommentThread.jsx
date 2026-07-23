import React from "react";
import CommentReply from "./CommentReply";
import CommentForm from "./CommentForm";
import Avatar from "../ui/Avatar";
import ScoreBox from "../ui/ScoreBox";
import { UserContext } from "../../context/UserContext";
import DeleteModal from "../modals/DeleteModal";

const CommentThread = ({ comment, parentId, handleAddReply, handleEditComment, handleDeleteComment, handleUpdateScore }) => {
  const { currentUser } = React.useContext(UserContext);
  const isCurrentUser = currentUser?.username === comment.user.username;
  const [isReplying, setIsReplying] = React.useState(false);
  const [isEditing, setIsEditing] = React.useState(false);
  const [editContent, setEditContent] = React.useState(comment.content);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const toggleReplyForm = () => {
    setIsReplying(!isReplying);
  };

  const submitReply = (text) => {
    handleAddReply(text, parentId, comment.user.username);
    setIsReplying(false);
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <article className="grid grid-cols-2 md:grid-cols-[auto_1fr_auto] gap-4 md:gap-x-6 md:gap-y-4 bg-white rounded-lg p-4 md:p-6 w-full">
        <div className="col-span-2 md:col-span-1 md:col-start-2 md:row-start-1 flex items-center gap-3">
          <Avatar image={comment.user.image.png} username={comment.user.username} />
          <h3 className="text-gray-800 font-semibold">{comment.user.username}</h3>
          {isCurrentUser && <span className="bg-[#5357B6] text-white text-xs font-medium px-2 py-0.5 rounded">you</span>}
          <span className="text-gray-500">{comment.createdAt}</span>
        </div>

        {/* 2. TEXT OR EDITION */}
        <div className="col-span-2 md:col-start-2 md:col-span-2 md:row-start-2 w-full">
          {isEditing ? (
            <div className="flex flex-col items-end gap-3 w-full mt-2">
              <textarea value={editContent} onChange={(e) => setEditContent(e.target.value)} className="w-full border border-gray-200 rounded-lg p-3 text-gray-700 focus:outline-none focus:border-[#5357B6] resize-none" rows="3"></textarea>
              <button
                onClick={() => {
                  handleEditComment(comment.id, editContent);
                  setIsEditing(false);
                }}
                className="px-6 py-2 bg-[#5357B6] text-white uppercase text-sm rounded-md hover:bg-[#5357B6]/80 transition-colors">
                Update
              </button>
            </div>
          ) : (
            <p className="text-gray-500 leading-relaxed wrap-break-word">
              {comment.replyingTo && <span className="text-[#5357B6] font-bold mr-1">@{comment.replyingTo} </span>}
              {comment.content}
            </p>
          )}
        </div>

        {/* 3. SCOREBOX */}
        <div className="col-start-1 row-start-3 md:col-start-1 md:row-start-1 md:row-span-2 flex items-start">
          <ScoreBox score={comment.score} commentId={comment.id} onUpdateScore={handleUpdateScore} />
        </div>

        {/* 4. BUTTONS */}
        <div className="col-start-2 row-start-3 md:col-start-3 md:row-start-1 flex justify-end items-center gap-4">
          {isCurrentUser ? (
            <>
              <button onClick={() => setIsModalOpen(true)} className="flex items-center gap-2 text-[#ED6368] font-medium hover:opacity-50 transition-opacity cursor-pointer">
                <svg width="12" height="14" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1.167 12.448c0 .854.7 1.552 1.555 1.552h6.222c.856 0 1.556-.698 1.556-1.552V3.5H1.167v8.948Zm10.5-11.281H8.75L7.773 0h-3.88l-.976 1.167H0v1.166h11.667V1.167Z" fill="currentColor" />
                </svg>
                Delete
              </button>
              <button onClick={() => setIsEditing(true)} className="flex items-center gap-2 text-[#5357B6] font-medium hover:opacity-50 transition-opacity cursor-pointer">
                <svg width="14" height="14" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M13.479 2.872 11.08.474a1.75 1.75 0 0 0-2.327-.06L.879 8.287a1.75 1.75 0 0 0-.5 1.06l-.375 3.648a.875.875 0 0 0 .875.954h.078l3.65-.333c.399-.04.773-.216 1.058-.499l7.875-7.875a1.68 1.68 0 0 0-.061-2.37l-.001-.001ZM3.854 11.838l-2.483.227.228-2.484 7.21-7.21 2.255 2.255-7.21 7.21Zm8.811-8.812-1.258 1.258-2.255-2.255 1.258-1.258c.414-.414 1.08-.414 1.494 0l.76.76c.415.415.415 1.08 0 1.495Z"
                    fill="currentColor"
                  />
                </svg>
                Edit
              </button>
            </>
          ) : (
            <CommentReply onReply={toggleReplyForm} />
          )}
        </div>
      </article>

      {/* SLIDE DOWN WITH GRID */}
      <div className={`grid transition-all duration-300 ease-in-out ${isReplying ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}>
        <div className="overflow-hidden">
          <div className="pt-2">
            <CommentForm handleSubmit={submitReply} />
          </div>
        </div>
      </div>

      {isModalOpen && (
        <DeleteModal
          onCancel={() => setIsModalOpen(false)}
          onConfirm={() => {
            handleDeleteComment(comment.id);
            setIsModalOpen(false);
          }}
        />
      )}
    </div>
  );
};

export default CommentThread;
