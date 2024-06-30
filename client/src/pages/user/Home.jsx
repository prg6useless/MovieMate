import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import Pagination from "react-bootstrap/Pagination";
import Spinner from "react-bootstrap/Spinner";

import { FaCartPlus } from "react-icons/fa";

import { Link } from "react-router-dom";

import { useMovies } from "../../hooks/useMovies";
import { useState, useEffect, useCallback } from "react";

import { useDispatch, useSelector } from "react-redux";

import { add } from "../../slices/cartSlice";

import "./Home.css";

const Home = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const [limit, setLimit] = useState(5);
  const [page, setPage] = useState(1);
  const [title, setTitle] = useState("");
  const [featuredMovie, setFeaturedmovie] = useState([]);

  const { allMovie, error, msg, loading, getAllMovies } = useMovies();

  const getTop5Movies = useCallback(() => {
    const result = allMovie?.data?.movies.slice(0, 5) || [];
    setFeaturedmovie(result);
  }, [allMovie]);

  useEffect(() => {
    // debouncing and cleanup
    const result = setTimeout(() => {
      getAllMovies({ limit, page, title });
    }, 200);
    return () => clearTimeout(result);
  }, [limit, page, title, getAllMovies]);

  useEffect(() => {
    if (!featuredMovie.length && allMovie.data) {
      getTop5Movies();
    }
  }, [allMovie, featuredMovie, getTop5Movies]);

  // const totalMovies = allMovie?.data?.total || 0;
  // const totalPages = Math.ceil(totalMovies / limit);
  return (
    <div>
      <main>
        <div id="myCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            {featuredMovie.map((movie, index) => {
              return (
                <button
                  key={index}
                  type="button"
                  data-bs-target="#myCarousel"
                  data-bs-slide-to={index}
                  className={index === 0 ? "active" : ""}
                  aria-current={index === 0 ? "true" : "false"}
                  aria-label={`Slide ${index + 1}`}
                  style={{
                    backgroundColor: "black",
                  }}
                ></button>
              );
            })}
          </div>

          <div className="carousel-inner">
            {featuredMovie.map((movie, index) => {
              return (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="container marketing">
                    <div className="row featurette">
                      <div className="col-md-7">
                        <h2 className="featurette-heading fw-normal lh-1">
                          {movie?.title}
                        </h2>
                        <p className="lead">{movie?.synopsis}</p>
                        <div className="d-flex justify-content-between lg:w-25 w-50">
                          <Link to={`/movies/${movie?.slug}`}>
                            <Button variant="primary">Buy Movie</Button>
                          </Link>
                          <Button
                            variant="success"
                            className="d-flex align-items-center"
                            onClick={() => {
                              dispatch(add(movie));
                            }}
                          >
                            <FaCartPlus />
                            <span className="ps-2">
                              (
                              {cart.length > 0 &&
                              cart.filter((item) => item?.slug === movie?.slug)
                                ?.length > 0
                                ? cart.filter(
                                    (item) => item?.slug === movie?.slug
                                  )[0]?.quantity
                                : 0}
                              )
                            </span>
                          </Button>
                        </div>
                      </div>
                      <div className="col-md-5 ">
                        <img
                          src={movie?.poster}
                          style={{
                            width: "100%",
                            objectFit: "cover",
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          {/* previous button */}
          <button
            className="carousel-control-prev "
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon "
              aria-hidden="true"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22%23000%22 viewBox=%220 0 16 16%22%3e%3cpath d=%22M11.354 1.646a.5.5 0 010 .708L6.707 7l4.647 4.646a.5.5 0 01-.708.708l-5-5a.5.5 0 010-.708l5-5a.5.5 0 01.708 0z%22/%3e%3c/svg%3e')",
              }}
            ></span>
            <span className="visually-hidden ">Previous</span>
          </button>
          {/* next butotn */}
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
              style={{
                backgroundImage:
                  "url('data:image/svg+xml,%3csvg xmlns=%22http://www.w3.org/2000/svg%22 fill=%22%23000%22 viewBox=%220 0 16 16%22%3e%3cpath d=%22M4.646 1.646a.5.5 0 000 .708L9.293 7l-4.647 4.646a.5.5 0 00.708.708l5-5a.5.5 0 000-.708l-5-5a.5.5 0 00-.708 0z%22/%3e%3c/svg%3e')",
              }}
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </main>

      <div className=" bg-secondary">
        <Form className="p-2  d-flex justify-content-center">
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search Movie"
                className=" mr-sm-2"
                style={{ width: "500px" }}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Search</Button>
            </Col>
          </Row>
        </Form>
        {loading && (
          <div className="d-flex justify-content-center align-items-center">
            <Spinner animation="border" role="status">
              <span className="visually-hidden">Loading...</span>
            </Spinner>
          </div>
        )}
        <div className="d-flex justify-content-evenly flex-wrap p-5 gap-3">
          {allMovie?.data?.movies.length > 0 ? (
            allMovie?.data?.movies.map((movies) => {
              return (
                <Card style={{ width: "20rem" }} key={movies.slug}>
                  <Card.Img variant="top" src={movies?.poster} />
                  <Card.Body>
                    <Card.Title>{movies?.title}</Card.Title>
                    <Card.Text>
                      {movies?.synopsis.substring(0, 95).concat("...")}
                    </Card.Text>
                    <div className="d-flex justify-content-between align-items-end">
                      <Link to={`/movies/${movies?.slug}`}>
                        <Button variant="primary">Buy Movie</Button>
                      </Link>
                      <Button
                        variant="success"
                        className="d-flex align-items-center"
                        onClick={() => {
                          dispatch(add(movies));
                        }}
                      >
                        <FaCartPlus />
                        <span className="ps-2">
                          (
                          {cart.length > 0 &&
                          cart.filter((item) => item?.slug === movies?.slug)
                            ?.length > 0
                            ? cart.filter(
                                (item) => item?.slug === movies?.slug
                              )[0]?.quantity
                            : 0}
                          )
                        </span>
                      </Button>
                      <small className="text-muted">{movies?.duration}</small>
                    </div>
                  </Card.Body>
                </Card>
              );
            })
          ) : (
            <>No Movies Found</>
          )}
        </div>
        {/* pagination */}
        {/* <div className="d-flex justify-content-center">
          <Pagination>
            <Pagination.First
              onClick={() => setPage(1)}
              disabled={page === 1}
            />
            <Pagination.Prev
              onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
              disabled={page === 1}
            />
            {allMovie?.data?.movies.map((i, index) => {
              return (
                <Pagination.Item
                  key={index + 1}
                  active={index + 1 === page}
                  onClick={() => setPage(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              );
            })}

            <Pagination.Next
              onClick={() => setPage((prev) => Math.min(prev + 1, totalPages))}
              disabled={page === totalPages}
            />
            <Pagination.Last
              onClick={() => setPage(totalPages)}
              disabled={page === totalPages}
            />
          </Pagination>
        </div> */}
      </div>
    </div>
  );
};

export default Home;
