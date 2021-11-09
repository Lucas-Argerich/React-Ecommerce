import React, { useState } from "react";

function Greeting() {
    const [name, setName] = useState("Christian 😉")

    return (
        <h1 onClick={() => setName("No mas Christian 😔")}>
            Hello, {name}
        </h1>
    )
}

export default Greeting
