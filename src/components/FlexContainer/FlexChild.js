import React from 'react';

const FlexChild = (props) => {
    const { flexDirection, alignItems, justifyContent } = props;

    const inlineStyles = {
        display: 'flex',
        flexDirection,  // то же самое, что   flexDirection: flexDirection
        alignItems,
        justifyContent
    }

    return (
        <div style={inlineStyles}>
            {props.children}
        </div>
    );
}

export default FlexChild;
