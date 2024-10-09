import { Helmet } from "react-helmet";

const Home = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Welcome Page</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1>Home</h1>
            <p>Home page content goes here..</p>
        </>
    )
};
export default Home;