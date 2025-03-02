import React from "react";

const CommentContent: React.FC = () => {
    return (
        <main className="section">
            <div className="container">
                <div className="form-comment">
                    <h2 className="form-comment-header">Leave a Comment</h2>
                    <form id="comment-form" className="comment-form">
                        <div className="form-group">
                            <label htmlFor="nameC">Name:</label>
                            <input type="text" name="nameC" id="nameC" placeholder="Enter your name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="surname">Surname:</label>
                            <input type="text" name="surname" id="surname" placeholder="Enter your surname"/>
                        </div>
                        <div className="form-group">
                            <label
                                htmlFor="telegram">Telegram Tag:</label>
                            <input type="text" name="telegram" id="telegram" placeholder="Enter your @username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="comment">Your comment:</label>
                            <input type="text" name="comment-text" id="comment" placeholder="Enter your comment"/>
                        </div>
                        <div className="comment-form_buttons">
                            <button type="submit" className="btn btn-primary" id="submit-button">Submit Comment</button>
                            <button type="button" className="btn btn-primary" id="load-button">Load Comment</button>
                            <button className="btn btn-primary" id="clear-local-storage-btn">Очистить Local Storage
                            </button>
                        </div>
                    </form>
                </div>
                <div className="comments-container">
                    <div id="toast-container" className="fixed top-20 right-0 p-4 space-y-2 z-50"></div>
                </div>
            </div>
        </main>
    )
}

export default CommentContent;