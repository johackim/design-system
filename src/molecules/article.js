import React from 'react';
import styles from '@styles/article.module.css';
import Link from '@atoms/link';

const Article = ({ children }) => children;

Article.Title = ({ children, className = '' }) => (
    children && (
        <div className={`my-4 relative border dark:border-gray-800 ${className}`}>
            <h1 className="h-64 flex flex-col justify-center">
                <span className="absolute inset-0 bg-gray-100 dark:bg-gray-800 opacity-80" />
                <span className="transform text-center font-bold px-4 text-4xl text-gray-600 dark:text-gray-300">{children}</span>
            </h1>
        </div>
    )
);

Article.Author = ({ author, date, url, className = '' }) => (
    author && date && (
        <div className={`text-xs mb-8 text-gray-700 dark:text-gray-300 ${className}`}>
            {date && (
                <>
                    <span>Mis à jour le&nbsp;</span>
                    <span>{new Date(date).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                </>
            )}
            {author && (
                <span>
                &nbsp;par&nbsp;
                    {url ? (
                        <Link href={url} className="underline">
                            {author}
                        </Link>
                    ) : (
                        author
                    )}
                </span>
            )}
        </div>
    )
);

Article.Content = ({ children, className = '' }) => (
    <article className={`${styles.article} ${className}`}>{children}</article>
);

export default Article;
