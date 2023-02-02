import React from 'react';
import styles from '@styles/article.module.css';
import Link from '@atoms/link';

const Article = ({ title, dateUpdated, children, author, authorUrl }) => (
    <>
        {title && (
            <div className="my-4 relative border dark:border-gray-800">
                <h1 className="h-64 flex flex-col justify-center">
                    <span className="absolute inset-0 bg-gray-100 dark:bg-gray-900 opacity-80" />
                    <span className="transform text-center font-bold px-4 text-4xl text-gray-600 dark:text-gray-300">{title}</span>
                </h1>
            </div>
        )}

        {dateUpdated && (
            <div className="text-xs mb-8 text-gray-700 dark:text-gray-300">
                <span>Mis à jour le&nbsp;</span>
                <span>{new Date(dateUpdated).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                {author && (
                    <span>
                        &nbsp;par&nbsp;
                        {authorUrl ? (
                            <Link href={authorUrl} className="underline">
                                {author}
                            </Link>
                        ) : (
                            author
                        )}
                    </span>
                )}
            </div>
        )}

        <article className={styles.article}>{children}</article>
    </>
);

Article.defaultProps = {
    title: '',
    dateUpdated: '',
    author: '',
    authorUrl: '/',
};

export default Article;
