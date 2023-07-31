import React from 'react';
import Text from '@atoms/text';
import Heading from '@atoms/heading';

const Section = ({ children, className }) => (
    <section className={`container m-auto px-4 lg:max-w-screen-xl ${className}`}>
        {children}
    </section>
);

Section.Title = ({ children, className }) => <Heading className={className}>{children}</Heading>;

Section.Description = ({ children, className }) => <Text className={`text-xl leading-7 text-gray-500 ${className}`}>{children}</Text>;

Section.Content = ({ children, className = 'mt-4' }) => <div className={className}>{children}</div>;

export default Section;
