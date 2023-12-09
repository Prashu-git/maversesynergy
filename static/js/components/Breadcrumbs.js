import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
    const location = useLocation();
    const pathSegments = location.pathname.split('/').filter(segment => segment !== '');

    return (
        <div className="breadcrumbs">
            <Link to="/">Home</Link>
            {pathSegments.map((segment, index) => (
                <React.Fragment key={index}>
                    &nbsp;&gt;&nbsp;
                    <Link to={`/${pathSegments.slice(0, index + 1).join('/')}`}>
                        {segment}
                    </Link>
                </React.Fragment>
            ))}
        </div>
    );
};

export default Breadcrumbs;
