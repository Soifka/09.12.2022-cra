import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

class UserCard extends Component {
        
    render() {
        const {user: 
            {name: {first: firstName, last: lastName}, 
            email, 
            picture: {large: imgSrc}}} 
            = this.props;

        return (
            <div className='card-wrapper'>
                <img src={imgSrc} alt={`${firstName} ${lastName}`} className="user-img"></img>
                <h1>{firstName} {lastName}</h1>
                <p>{email}</p>
            </div>
        );
    }
}

/*
UserCard.propTypes = {
    user: PropTypes.object.isRequired   // isRequired делает проп обязательным
}
*/

// можно указать, какую точно структуру объекта мы ожидаем:
UserCard.propTypes = {
    user: PropTypes.shape({
        name: PropTypes.shape({
            first: PropTypes.string,
            last: PropTypes.string
        }),
        email: PropTypes.string.isRequired, 
        picture: PropTypes.shape({
            large: PropTypes.string.isRequired
        })
    }).isRequired
}

export default UserCard;