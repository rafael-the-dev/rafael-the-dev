import classNames from "classnames";

import Link from "src/components/link";

const LinkContainer = ({ id, label }) => (
    <li className={classNames("mb-2 text-slate-300")}>
        <Link 
            className={classNames('no-underline color-transition text-slate-300 hover:underline')} 
            href={`resume?drawer=projects&id=${id}`}>
            { label }
        </Link>
    </li>
);

export default LinkContainer;