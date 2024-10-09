import { Helmet } from "react-helmet";
const NoPage = () => {
    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Page Not Found</title>
                <link rel="canonical" href="http://mysite.com/example" />
            </Helmet>
            <h1>404, page not found</h1>
        </>
    )

};
export default NoPage;