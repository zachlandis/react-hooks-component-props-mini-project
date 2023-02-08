import React from 'react'


function ArticleList({ articles }) {

    const articles = articles.map((article) => {
        return <p key={article.id}>{article.title}</p>
    })
    
    return (
        <main>
            {articles}
        </main>
    )
}

export default ArticleList