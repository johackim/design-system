import React from 'react';
import styles from '@styles/article.module.css';
import Link from '@components/link';

const Article = ({ title, dateUpdated, children, author, authorUrl }) => (
    <>
        {title && (
            <div className="tw-my-4 tw-relative tw-border dark:tw-border-gray-800">
                <h1 className="tw-h-64 tw-flex tw-flex-col tw-justify-center">
                    <span className="tw-absolute tw-inset-0 tw-bg-gray-100 dark:tw-bg-gray-900 tw-opacity-80" />
                    <span className="tw-transform tw-text-center tw-font-bold tw-px-4 tw-text-4xl tw-text-gray-600 dark:tw-text-gray-300">{title}</span>
                </h1>
            </div>
        )}

        {dateUpdated && (
            <div className="tw-text-xs tw-mb-8 tw-text-gray-700 dark:tw-text-gray-300">
                <span>Mis à jour le&nbsp;</span>
                <span>{new Date(dateUpdated).toLocaleDateString('fr-FR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                {author && (
                    <span>
                        &nbsp;par&nbsp;
                        {authorUrl ? (
                            <Link href={authorUrl} className="tw-underline">
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
