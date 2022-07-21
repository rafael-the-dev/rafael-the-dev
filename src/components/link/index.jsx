import Link from "next/link"

const LinkContainer = ({ children, className, href, onClick, passHref }) => {
    return (
        <Link href={href} passHref={passHref}>
            <a className={className} onClick={onClick}>
                { children }
            </a>
        </Link>
    );
};

export default LinkContainer;