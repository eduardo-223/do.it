import { createGlobalStyle} from "styled-components"

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    :root{
        --white: #B3E8E5;
        --white-regular: #82DBD8;
        --blue: #3BACB6;
        --blue-black: #2F8F9D;
    }

    body{
        background-color: var(--white-regular);
        color: var(--blue-black);
    }

    body, input, button{
        font-family: 'PT Serif', serif; 
        font-size: 1rem;
    }

    h1,h2,h3,h4,h5,h6{
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
    }

    button{
        cursor: pointer;
    }

    a{
        text-decoration: none;
    }
`