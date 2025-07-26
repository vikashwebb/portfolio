import React, { useEffect, useState } from 'react';


import Header from "../Component/Header";
import Footer from "../Component/Footer";


function Blog() {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        fetch("https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@vikashwebb")
            .then(res => res.json())
            .then(data => setArticles(data.items));
    }, []);


    function getFirstImageSrc(htmlString) {
        const match = htmlString.match(/<img[^>]+src="([^">]+)"/);
        return match ? match[1] : null;
    }
    function formatDate(dateString) {
        const date = new Date(dateString);
        const options = { year: "numeric", month: "long", day: "numeric" };
        return date.toLocaleDateString(undefined, options);
    }

    return (
        <>
            <Header />
            <div className="section shop wf-section">
                <div className="container-default w-container">
                    <div className="top-content shop-container">
                        <h1>Blogs</h1>
                    </div>
                    <div className="w-dyn-list">
                        <div className="_3-column-grid articles-news-section w-dyn-items">
                            {articles.map((article, index) => {
                                const imageSrc = getFirstImageSrc(article.description);
                                const formattedDate = formatDate(article.pubDate);

                                return (
                                    <div key={index} className="w-dyn-item">
                                        <a href={article.link} class="card blog-card w-inline-block" >
                                            <div className="image-wrapper articles-news-card">
                                                {imageSrc ? (
                                                    <img
                                                        src={imageSrc}
                                                        alt={article.title}
                                                        className="image image-zoom"

                                                    />) : (
                                                    <div className="no-image-placeholder">No image</div>
                                                )}
                                            </div>
                                            <div className="split-content articles-news-section">
                                                <h3>{article.title}</h3>
                                                <div className="split-content articles-news-card-bottom-content">
                                                    {formattedDate}
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                </div>
            </div>
            <Footer />
        </>
    );
}

export default Blog;
