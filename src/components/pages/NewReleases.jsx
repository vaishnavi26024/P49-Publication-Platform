import React, { useRef } from "react";

const NewReleases = () => {
    const booksRef = useRef(null);

    const scrollBooks = (direction) => {
        const scrollAmount = 300;
        if (booksRef.current) {
            booksRef.current.scrollLeft += direction * scrollAmount;
        }
    };

    // Internal Styles Object
    const styles = {
        container: {
            margin: 0,
            padding: 0,
            boxSizing: "border-box",
            fontFamily: "'Poppins', sans-serif",
            background: "#0A1A3A",
            minHeight: "100vh",
            width: "100%",
            textAlign: "left",
        },
        header: {
            // Increased top padding (80px) to clear your Navbar 
            // and set left padding (60px) to match the scroll section
            padding: "10px 40px 0px",
            display: "flex",
            justifyContent: "flex-start",
        },
        h1: {
            fontSize: "32px", // Slightly larger for a clear page title
            margin: "0",
            color: "#ffffff",
            fontWeight: "600",
        },
        wrapper: {
            position: "relative",
            padding: "50px 60px 60px",
        },
        scrollContainer: {
            display: "flex",
            gap: "25px",
            overflowX: "auto",
            scrollBehavior: "smooth",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
        },
        bookCard: {
            minWidth: "200px",
            height: "260px",
            background: "#ffffff",
            borderRadius: "12px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            transition: "all 0.3s ease",
            cursor: "pointer",
            flexShrink: 0,
        },
        btn: {
            position: "absolute",
            top: "45%",
            transform: "translateY(-50%)",
            background: "white",
            border: "none",
            width: "40px",
            height: "40px",
            fontSize: "22px",
            borderRadius: "8px",
            cursor: "pointer",
            zIndex: 10,
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        }
    };

    const imageUrls = [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/book%205-BMFuGatO0sr4OtEBszyk43SnAb7JFo.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BOKKKKK-gB9I24YL343iCeBO3LIkML8vcClItw.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-06-16%20at%2012.12.25_68afe91a-JHAw2W8Ihm6AjhTbnik84Ql5kOQpm9.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/book%205%20%281%29-5JMhZ96vgiMKWSEYmIbiDm6TTesisB.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Rectangle%20101-n963i7I7aUg3YQDgGSZGonVVwpGKVk.png",
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/bbok%206-VzisHWZmZIk6S8bngFFfHCf5cAmPK7.png",
        "https://m.media-amazon.com/images/I/71l7123f57L._AC_SS180_.jpg",
        "https://m.media-amazon.com/images/I/71lgUShuP5L._AC_SS180_.jpg",
        "https://m.media-amazon.com/images/I/81RCw4OUSeL._AC_SS180_.jpg",
        "https://m.media-amazon.com/images/I/71-fy42RjeL._AC_SS180_.jpg",
        "https://m.media-amazon.com/images/I/81r8QjK8FnL._AC_SS180_.jpg"
    ];

    return (
        <div style={styles.container}>
            <style>{`.hide-scroll::-webkit-scrollbar { display: none; }`}</style>

            <div style={styles.header}>
                <h1 style={styles.h1}>New Releases</h1>
            </div>

            <section style={styles.wrapper}>
                <button style={{ ...styles.btn, left: "10px" }} onClick={() => scrollBooks(-1)}>&#10094;</button>

                <div style={styles.scrollContainer} className="hide-scroll" ref={booksRef}>
                    {imageUrls.map((url, index) => (
                        <div
                            key={index}
                            style={styles.bookCard}
                            onMouseOver={(e) => {
                                e.currentTarget.style.transform = "translateY(-6px)";
                                e.currentTarget.style.boxShadow = "0 10px 25px rgba(0,0,0,0.2)";
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.transform = "translateY(0)";
                                e.currentTarget.style.boxShadow = "none";
                            }}
                        >
                            <img src={url} alt="book" style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                        </div>
                    ))}
                </div>

                <button style={{ ...styles.btn, right: "10px" }} onClick={() => scrollBooks(1)}>&#10095;</button>
            </section>
        </div>
    );
};

export default NewReleases;