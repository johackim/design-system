const Avatar = ({ src }) => (
    <img className="inline-block h-12 w-12 rounded-full" src={src} alt="avatar" />
);

Avatar.defaultProps = {
    src: 'https://gravatar.com/avatar/000?d=mp&f=y',
};

export default Avatar;
