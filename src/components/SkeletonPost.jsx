import '@styles/SkeletonPost.css';

const SkeletonPost = () => {
    return (
        <div className="skeleton-post-container">
            <div className="skeleton-post-title"></div>
            <div className="skeleton-post-created"></div>
            <div className="skeleton-post-category"></div>
            <div className="skeleton-post-image"></div>
            <div className="skeleton-post-content"></div>
        </div>
    );
};

export default SkeletonPost;