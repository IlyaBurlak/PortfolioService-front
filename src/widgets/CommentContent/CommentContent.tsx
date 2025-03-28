import React, { useEffect } from 'react';
import '../../pages/Comments/CommentContent.css';
import { useAuth } from '../../context/AuthContext';
import useComments from "../../shared/hooks/useComments";
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from "react-toastify";

const CommentContent: React.FC = () => {
    const { isAuthenticated } = useAuth();
    const {
        commentText,
        setCommentText,
        comments,
        loading,
        error,
        loadComments,
        submitComment,
    } = useComments();

    useEffect(() => {
        loadComments();
    }, [loadComments]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await submitComment();
    };

    return (
        <main className="section">
            <div className="container">
                <ToastContainer />
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
                            <button type="submit" className="btn btn-primary" disabled={loading}>
                                {loading ? 'Submitting...' : 'Submit Comment'}
                            </button>
                        </form>
                    ) : (
                        <p>Please log in to leave a comment</p>
                    )}
                </div>

                {error && <p className="error-message">{error}</p>}

                <div className="comments-container">
                    {Array.isArray(comments) &&
                        comments.map((comment) => (
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
                                            minute: '2-digit',
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