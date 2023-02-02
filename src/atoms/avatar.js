const Avatar = ({ src }) => (
    <img className="inline-block h-12 w-12 rounded-full" src={src} alt="avatar" />
);

Avatar.defaultProps = {
    src: 'https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mp&f=y',
};

export default Avatar;
