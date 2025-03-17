import { useState, useCallback } from 'react';
import { useAuth } from '../../context/AuthContext';

const useComments = () => {
    const { isAuthenticated } = useAuth();
    const [commentText, setCommentText] = useState('');
    const [comments, setComments] = useState<any[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const loadComments = useCallback(async () => {
        try {
            setLoading(true);
            const response = await fetch(`${process.env.REACT_APP_API_URL}/comments`);

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            const receivedComments = Array.isArray(data) ? data : [];
            setComments(receivedComments);
            setError(null);
        } catch (err) {
            console.error('Error loading comments:', err);
            setError('Failed to load comments');
            setComments([]);
        } finally {
            setLoading(false);
        }
    }, []);

    const submitComment = useCallback(async () => {
        if (!isAuthenticated || !commentText.trim()) return;

        try {
            const token = localStorage.getItem('token');
            const response = await fetch(`${process.env.REACT_APP_API_URL}/comments`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
                body: JSON.stringify({ comment: commentText }),
            });

            if (!response.ok) {
                throw new Error('Failed to submit comment');
            }

            setCommentText('');
            await loadComments();
            setError(null);
        } catch (err) {
            console.error('Error submitting comment:', err);
            setError('Failed to submit comment');
        }
    }, [isAuthenticated, commentText, loadComments]);

    return {
        commentText,
        setCommentText,
        comments,
        loading,
        error,
        loadComments,
        submitComment,
    };
};

export default useComments;