import React from "react";

type LineProps = {
    color: string
}

const Line = (props: LineProps) => (
    <hr
        style={{
            opacity:0.5,
            marginBottom: 20,
            marginTop: 20,
            border: 0,
            color: props.color,
            backgroundColor: props.color,
            height: 1,
        }}
    />
);

export default Line;