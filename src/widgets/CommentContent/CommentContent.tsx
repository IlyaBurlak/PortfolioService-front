import React, { useState, useEffect } from "react";
import '../../pages/Comments/CommentContent.css';
import { useAuth } from "../../context/AuthContext";

const CommentContent: React.FC = () => {
    const { isAuthenticated, user } = useAuth();
    const [commentText, setCommentText] = useState("");
    const [comments, setComments] = useState<any[]>([]);

    useEffect(() => {
        loadComments();
    }, []);

    const loadComments = async () => {
        try {
            const response = await fetch(`${process.env.REACT_APP_API_URL}/comments`);
            console.log('Raw response:', response);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Received data:', data);

            const receivedComments = Array.isArray(data) ? data : [];
            setComments(receivedComments);
        } catch (error) {
            console.error("Error loading comments:", error);
            setComments([]);
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!isAuthenticated || !commentText.trim()) return;

        try {
            const token = localStorage.getItem("token");
            const response = await fetch(`${process.env.REACT_APP_API_URL}/comments`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ comment: commentText }),
            });

            if (!response.ok) throw new Error("Failed to submit comment");
            setCommentText("");
            await loadComments();
        } catch (error) {
            console.error("Error submitting comment:", error);
        }
    };

    return (
        <main className="section">
            <div className="container">
                <div className="form-comment">
                    {isAuthenticated ? (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label></label>
                                <textarea
                                    value={commentText}
                                    onChange={(e) => setCommentText(e.target.value)}
                                    placeholder="Please leave your feedback"
                                    required
                                />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                Submit Comment
                            </button>
                        </form>
                    ) : (
                        <p>Please log in to leave a comment</p>
                    )}
                </div>
                <div className="comments-container">
                    {Array.isArray(comments) && comments.map((comment) => (
                        <div key={comment.id} className="comment-card">
                            <div className="comment-header">
                                <div className="user-info">
                                    <span className="user-name">
                                        {comment.user?.name || 'Anonymous'} {comment.user?.surname || ''}
                                    </span>
                                    <span className="user-email">{comment.user?.email || 'No email'}</span>
                                </div>
                                <span className="comment-date">
                                    {new Date(comment.createdAt).toLocaleDateString('en-GB', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric',
                                        hour: '2-digit',
                                        minute: '2-digit'
                                    })}
                                </span>
                            </div>
                            <p className="comment-text">{comment.comment}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default CommentContent;
