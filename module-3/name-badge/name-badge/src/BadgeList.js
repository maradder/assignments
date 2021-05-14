import React from 'react';


const Badge = (props) => {
    const badgeStyle = {
        width: '700px',
        height: "fit-content",
        margin: "0 auto 50px auto",
        padding: "0",
        border: "1px solid #9B1B1B",
        borderRadius: "46px",
        display: 'flex',
        flexDirection: 'column',
    }

    const h1Style = {
        textAlign: "center",
        width: "fit-content",
        color: "#ffffff",
        lineHeight: "1",
        margin: "0"
    }

    const h5Style = {
        textAlign: "center",
        width: "fit-content",
        color: "#ffffff",
        marginTop: "0px"
    }

    const pStyle = {
        fontWeight: "400",
        fontSize: "20px",
        width: "fit-content",
        margin: "5px"
    }

    const commentsStyle = {
        fontWeight: "400",
        fontSize: "20px",
        width: "fit-content",
        margin: "5px",
        gridRow: "4 / 7",
        gridColumn: "1 / 3"
    }

    const headerBandStyle = {
        display: "flex",
        fontSize: "48px",
        fontWeight: 500,
        flexDirection: "column",
        fontFamily: "'Montserrat', sans-serif",
        justifyContent: "center",
        alignItems: "center",
        width: "700px",
        minHeight: "187px",
        maxHeight: "187px",
        paddingTop: "24px",
        backgroundColor: "#9B1B1B",
        borderRadius: "46px 46px 0 0"
    }

    const bodyBandStyle = {
        display: 'grid',
        gridTemplateColumns: "50% 50%",
        gridTemplateRows: "1fr 1fr 1fr 3fr",
        width: "700px",
        height: "230px",
        padding: "30px 30px",
    }

    const bottomBandStyle = {
        minHeight: "46px",
        maxHeight: "46px",
        width: "700px",
        borderRadius: "0 0 46px 46px",
        backgroundColor: "#9B1B1B"
    }


    return (
        <div key={props.key} style={badgeStyle}>
            <div style={headerBandStyle}>
                <h1 style={h1Style}>Hello</h1>
                <h5 style={h5Style}>my name is</h5>
            </div>
            <div style={bodyBandStyle}>
                <p style={pStyle}>Name: {`${props.firstName} ${props.lastName}`}</p>
                <p style={pStyle}>{}</p>
                <p style={pStyle}>Birthplace: {props.birthplace}</p>
                <p style={pStyle}>Favorite Food: {props.favfood}</p>
                <p style={pStyle}>Email: {props.email}</p>
                <p style={commentsStyle}>Comments: {props.comments}</p>
            </div>
            <div style={bottomBandStyle} />
        </div>
    )
}

export {
    Badge,
}