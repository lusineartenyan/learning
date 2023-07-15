import React from "react";

type LineProps = {
    color: string
}

const Line = (props: LineProps) => (
    <hr
        style={{
            border: 0,
            color: props.color,
            backgroundColor: props.color,
            height: 1,
        }}
    />
);

export default Line;