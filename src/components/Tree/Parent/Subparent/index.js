import React from 'react';
import Child from './Child';
import { withTheme } from '../../../../HOC';
import { withUser } from '../../../../HOC';
import CONSTANTS from '../../../../constants';
const { THEMES } = CONSTANTS;

const Subparent = (props) => {
    const nextTheme = props.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT; 
    return (
        <div style={{border: '3px solid black', padding:'25px'}}>
            Subparent
            <p>{props.user.firstName}</p>
            <button onClick={() => props.setTheme(nextTheme)}>Click to change theme</button>
            <Child />
        </div>
    );
}

// const SubparentWithTheme = (props) => {
//     return (
//         <UserContext.Consumer>
//             {({user, logOut}) => {
//                 const SubparentThemed = withTheme(Subparent);
//                 return (
//                     <SubparentThemed user={user} logOut={logOut} />
//                 )
//             }}
//         </UserContext.Consumer>
//     )
// }

const SubparentWithContext = (props) => {
    const SubparentThemed = withTheme(Subparent);
    const SubparentWithContext = withUser(SubparentThemed);
    return (
        <SubparentWithContext />
    )
}

export default SubparentWithContext;
