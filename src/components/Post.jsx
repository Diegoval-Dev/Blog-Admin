import React from "react";

const Post = ({ post, onSelectPost }) => {
    const date = new Date(post.created_at);
    const dateString = date.toLocaleDateString("es-ES", {
        year: "numeric",
        month: "long",
        day: "numeric",
        weekday: "long",
    });
    const timeString = date.toLocaleTimeString("es-ES", {
        hour: "2-digit",
        minute: "2-digit",
    });
    const dateTimeString = `${dateString} a las ${timeString}`;

    return (
        <div
            key={post.id}
            style={{ color: "#fff" }}
            onClick={() => onSelectPost(post.id)}
        >
            <h3
                style={{
                    color: "#fff",
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    marginBottom: "10px",
                }}
            >
                <span
                    style={{
                        fontSize: "1.5rem",
                        fontWeight: "600",
                        marginBottom: "10px",
                    }}
                >
                    {post.id} :{" "}
                </span>
                {post.title}
            </h3>
            <p style={{ color: "#ca9f91ff", fontSize: "1rem" }}>
                Creado: {dateTimeString}
            </p>
            <p style={{ fontSize: "0.8rem", color: "#cd913cff" }}>
                categoria: {post.category}
            </p>
            {post.bannerImageB64 && (
                <img
                    src={post.bannerImageB64}
                    alt="imagen"
                    style={{ width: "300px", height: "300px" }}
                />
            )}
            <p>{post.content}</p>
        </div>
    );
};

export default Post;
