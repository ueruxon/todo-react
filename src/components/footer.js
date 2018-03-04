import React from 'react';

class Footer extends React.Component {
    render() {
        return (
            <footer className="footer">
                <Button className="--active" text="All"  />
                <Button className="" text="Active" />
                <Button className="" text="Complited" />
                <Button className="delete-all" text="Delete completed"  />
            </footer>
        )
    }
}

const Button = ({className, text}) => {
    return <button className={`footer__button ${className}`}>{text}</button>
}

export default Footer;