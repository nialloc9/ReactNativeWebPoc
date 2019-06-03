interface DefaultStyle {
    button: {
        alignItems: string,
        backgroundColor: string,
        borderRadius: number,
        justifyContent: string,
        height: number,
        minWidth: number,
        lineHeight: number,
        width: string,
        textAlign: string,
        verticalAlign: string,
    },
    text: {
        color: string,
    }
}

export const defaultStyle : DefaultStyle = {
    button: {
        alignItems: "center",
        backgroundColor: "lightgrey",
        borderRadius: 10,
        justifyContent: "center",
        height: 45,
        minWidth: 100,
        width: "100%",
        textAlign: "center",
        lineHeight: 45,
        verticalAlign: "middle"
    },
    text: {
        color: "white"
    }
}