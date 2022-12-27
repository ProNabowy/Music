import { Fragment } from "react";
import { Container } from "react-bootstrap";
import Header from "../Header/Header";
import LibrarySong from "./Library_Song/LibrarySong";

const Library = () =>
{
    return (
        <Fragment>
            <div className="d-flex justify-content-center"><Container><Header path={"library"} /></Container></div>
            <LibrarySong />
        </Fragment>
    )
}

export default Library;