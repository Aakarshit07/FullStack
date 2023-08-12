import Title from "./Title";

function Header(props) {
    return (
        <>
        {/* This Was My Approach NOt good One */}
            {/* <header style={
                    {
                        fontSize:'30px', 
                        color:'purple',
                        textAlign:'center',
                    }
                    }>

                <Title >   
                    {props.title}
                </Title>
            </header> */}

 {/* Better Approach  */}
            <h1 style={
                    {
                        fontSize:'30px', 
                        color:'purple',
                        textAlign:'center',
                    }
                    }>{props.title}</h1>

        </>
    )
}

export default Header;
