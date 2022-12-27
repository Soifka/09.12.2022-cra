import React from "react";
import { ThemeContext } from "../contexts/themeContext";
import { UserContext } from "../contexts/userContext";

// HOC --> High Order Component
export const withTheme = (WrappedComponent) => (props) => {
    return (
        <ThemeContext.Consumer>
            {([theme, setTheme]) => {
                return <WrappedComponent
                theme={theme}
                setTheme={setTheme}
                {...props}
                />
            }}
        </ThemeContext.Consumer>
    )
}

export const withUser = (WrappedComponent) => (props) => {
    return (
        <UserContext.Consumer>
            {({user, logOut}) => {
                return <WrappedComponent 
                user={user}
                logOut={logOut}
                {...props}
                />
            }}
        </UserContext.Consumer>
    )
}