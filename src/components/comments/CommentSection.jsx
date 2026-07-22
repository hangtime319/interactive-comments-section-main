import React, { useContext } from "react";
import CommentThread from "./CommentThread";
import CommentForm from "./CommentForm";
import data from "../../data/data.json";
import { UserContext } from "../../context/UserContext";
import DeleteModal from "../modals/DeleteModal";

const CommentSection = () => {
  const [comments, setComments] = React.useState(data.comments);
  const { currentUser } = useContext(UserContext);

  const addComment = (text) => {
    const newComment = {
      id: Date.now(),
      content: text,
      createdAt: "Just now",
      score: 0,
      user: currentUser,
      replies: [],
    };

    setComments([...comments, newComment]);
  };

  const addReply = (text, parentId, replyingToUsername) => {
    const newReply = {
      id: Date.now(),
      content: text,
      createdAt: "Just now",
      score: 0,
      replyingTo: replyingToUsername,
      user: currentUser,
    };

    const updateComments = comments.map((comment) => {
      if (comment.id === parentId) {
        return {
          ...comment,
          replies: [...comment.replies, newReply],
        };
      }
      return comment;
    });

    setComments(updateComments);
  };

  const editComment = (commentId, newContent) => {
    const updatedComments = comments.map((comment) => {
      // 1. Verifica se é o comentário principal
      if (comment.id === commentId) {
        return { ...comment, content: newContent };
      }

      // 2. Se não for o principal, verifica dentro das respostas dele
      if (comment.replies && comment.replies.length > 0) {
        const updatedReplies = comment.replies.map((reply) => {
          if (reply.id === commentId) {
            return { ...reply, content: newContent };
          }
          return reply;
        });

        // Retorna o comentário com o array de respostas atualizado
        return { ...comment, replies: updatedReplies };
      }

      return comment;
    });

    setComments(updatedComments);
  };

  const deleteComment = (commentId) => {
    const updateComments = comments
      .filter((comment) => comment.id !== commentId)
      .map((comment) => {
        if (comment.replies && comment.replies.length > 0) {
          return { ...comment, replies: comment.replies.filter((reply) => reply.id !== commentId) };
        }
        return comment;
      });
    setComments(updateComments);
  };

  return (
    <main className="flex flex-col gap-4 justify-center items-center min-h-screen py-10 px-4">
      <section className="flex flex-col gap-4 w-full max-w-3xl">
        {comments.map((comment) => (
          <div key={comment.id} className="flex flex-col gap-4">
            <CommentThread comment={comment} parentId={comment.id} handleAddReply={addReply} handleEditComment={editComment} handleDeleteComment={deleteComment} />

            {comment.replies && comment.replies.length > 0 && (
              <div className="flex flex-col gap-4 border-l-2 border-gray-200 pl-4 ml-4 md:pl-10 md:ml-10">
                {comment.replies.map((reply) => (
                  <CommentThread key={reply.id} comment={reply} parentId={comment.id} handleAddReply={addReply} handleEditComment={editComment} handleDeleteComment={deleteComment} />
                ))}
              </div>
            )}
          </div>
        ))}

        <CommentForm handleSubmit={addComment} />
      </section>
    </main>
  );
};

export default CommentSection;
