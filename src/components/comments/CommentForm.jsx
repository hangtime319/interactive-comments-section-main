import React, { useContext } from "react";
import Avatar from "../ui/Avatar";
import { UserContext } from "../../context/UserContext";

const CommentForm = ({ handleSubmit }) => {
  const { currentUser } = useContext(UserContext);
  const [text, setText] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.trim() === "") return;
    handleSubmit(text);
    setText("");
  };

  return (
    
      <form onSubmit={onSubmit} className="grid grid-cols-2 md:grid-cols-[auto_1fr_auto] gap-4 bg-white rounded-lg p-4 md:p-6 w-full">
        <div className="col-start-1 row-start-2 md:col-start-1 md:row-start-1 flex items-center">
          {currentUser && <Avatar image={currentUser.image.png} username={currentUser.username} />}
        </div>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="col-span-2 md:col-span-1 md:col-start-2 md:row-start-1 w-full border border-gray-200 rounded-lg p-4 text-gray-700 placeholder-gray-500 focus:outline-none focus:border-[#5357B6] resize-none cursor-pointer"
          rows="3"
          placeholder="Add a comment...">
        </textarea>

        <div className="col-start-2 row-start-2 md:col-start-3 md:row-start-1 flex justify-end">
          <button type="submit" className="px-4 py-2 md:px-6 bg-[#5357B6] uppercase text-white text-sm rounded-md cursor-pointer hover:bg-[#5357B6]/80 transition-colors duration-200">
          Send
          </button>
        </div>
      </form>
  );
};

export default CommentForm;
