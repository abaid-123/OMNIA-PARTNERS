import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";

const BlogComments = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      name: "Emile",
      date: "29 February 2024 at 5:00PM",
      content:
        "In the face of climate change and environmental concerns, renewable energy technologies are gaining momentum. Innovations in solar, wind, and hydroelectric power are making clean energy more accessible and cost-effective.",
    },
    {
      id: 2,
      name: "Emile",
      date: "29 February 2024 at 5:00PM",
      content:
        "In the face of climate change and environmental concerns, renewable energy technologies are gaining momentum. Innovations in solar, wind, and hydroelectric power are making clean energy more accessible and cost-effective.",
    },
    {
      id: 3,
      name: "Emile",
      date: "29 February 2024 at 5:00PM",
      content:
        "In the face of climate change and environmental concerns, renewable energy technologies are gaining momentum. Innovations in solar, wind, and hydroelectric power are making clean energy more accessible and cost-effective.",
    },
  ]);

  const [newComment, setNewComment] = useState("");
  const [editingCommentId, setEditingCommentId] = useState(null);
  const [editedContent, setEditedContent] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleAddComment = () => {
    if (newComment.trim() === "") return;

    const newId = comments.length + 1;
    const today = new Date();
    const formattedDate = today.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "long",
      year: "numeric",
    });

    const formattedTime = today.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const newCommentObj = {
      id: newId,
      name: "You",
      date: `${formattedDate} at ${formattedTime}`,
      content: newComment,
    };

    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  const handleDelete = (id) => {
    setComments(comments.filter((c) => c.id !== id));
  };

  const handleEdit = (id, content) => {
    setEditingCommentId(id);
    setEditedContent(content);
    setDropdownOpen(null);
  };

  const handleUpdate = () => {
    setComments(
      comments.map((c) =>
        c.id === editingCommentId ? { ...c, content: editedContent } : c
      )
    );
    setEditingCommentId(null);
    setEditedContent("");
  };

  return (
    <div className="mt-10 border rounded-lg p-4 shadow-sm bg-white">
      <h2 className="text-lg font-semibold mb-4">
        Comments (0{comments.length})
      </h2>

      {comments.map((comment) => (
        <div key={comment.id} className="mb-6 pb-4 border-b relative">
          <div className="flex justify-between items-start">
            <div className="flex items-center gap-3">
              <img
                src="/images/Insights/Blogs/Emile.png"
                alt="User"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-sm">{comment.name}</h4>
                <p className="text-xs text-gray-400">{comment.date}</p>
              </div>
            </div>
            <div className="relative">
              <BsThreeDotsVertical
                className="text-gray-400 cursor-pointer"
                onClick={() =>
                  setDropdownOpen(dropdownOpen === comment.id ? null : comment.id)
                }
              />
              {dropdownOpen === comment.id && (
                <div className="absolute right-0 mt-2 w-24 bg-white border rounded shadow z-10">
                  <button
                    className="w-full px-3 py-1 text-sm hover:bg-gray-100 text-left"
                    onClick={() => handleEdit(comment.id, comment.content)}
                  >
                    Edit
                  </button>
                  <button
                    className="w-full px-3 py-1 text-sm hover:bg-gray-100 text-left text-red-500"
                    onClick={() => handleDelete(comment.id)}
                  >
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Edit Mode */}
          {editingCommentId === comment.id ? (
            <div className="mt-2">
              <textarea
                value={editedContent}
                onChange={(e) => setEditedContent(e.target.value)}
                rows="3"
                className="w-full border rounded-lg p-2 text-sm text-gray-700"
              />
              <button
                onClick={handleUpdate}
                className="mt-2 px-4 py-1 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
              >
                Update
              </button>
            </div>
          ) : (
            <p className="mt-2 text-sm text-gray-700">{comment.content}</p>
          )}
        </div>
      ))}

      {/* Add New Comment */}
      <div>
        <textarea
          rows="4"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
          className="w-full border rounded-lg p-3 text-sm border-gray-400 text-gray-700 focus:ring-blue-500"
          placeholder="Starting typing here..."
        />
        <button
          onClick={handleAddComment}
          className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 text-sm"
        >
          Post a comment
        </button>
      </div>
    </div>
  );
};

export default BlogComments;
