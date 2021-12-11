
const Home = ({user}) => {
    return (
        <div className="home">
            {user ? 
            `Welcome ${user.displayName}`    
        :
        ""}
        </div>
    )
}

export default Home
