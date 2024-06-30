import { useMovies } from "../../hooks/useMovies";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Card, Button, Row, Col } from "react-bootstrap";

import Image from "react-bootstrap/Image";

import { FaCartPlus } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

import { add } from "../../slices/cartSlice";

import "./MovieDetail.css";

const MovieDetail = () => {
  const dispatch = useDispatch();
  const { cart } = useSelector((state) => state.cart);
  const { pathname } = useLocation();
  const { movie, getBySlug } = useMovies();

  useEffect(() => {
    const moviedetail = pathname.split("/")[2];
    console.log(moviedetail);
    getBySlug(moviedetail);
  }, [pathname, getBySlug]);

  // return <div>{JSON.stringify(movie)}</div>;
  return (
    <>
      <div className="p-5 d-flex justify-content-center alignt-items-center">
        <Card style={{ width: "60rem" }} className="movieDetailCard p-3 border">
          <Row>
            <Col>
              <Image
                src={movie?.data?.poster}
                style={{ width: "400px", height: "100%", objectFit: "cover" }}
                rounded
              ></Image>
            </Col>
            <Col>
              <Card.Body>
                <Card.Title className="display-6">
                  {movie?.data?.title}
                </Card.Title>
                <hr />
                <strong>SYNOPSIS</strong>
                <p className="text-justify">{movie?.data?.synopsis}</p>
                <p>
                  <strong>Duration</strong> : {movie?.data?.duration}
                </p>
                <p>
                  <strong>Rating </strong>: {movie?.data?.rating}
                </p>
                <p>
                  <strong>Ticket Quantity</strong> : <input type="number" />
                </p>

                <div className="py-2">
                  <span className="fw-bold display-6">
                    ${movie?.data?.price}
                  </span>
                </div>
                {movie?.data?.seats < 1 && (
                  <p className="fw-bold text-danger">MOVIE SOLD OUT</p>
                )}

                <div className="d-flex justify-content-between alignt-items-center w-75">
                  <Button
                    variant="primary"
                    disabled={movie?.data?.seats < 1 ? true : false}
                  >
                    Buy Now
                  </Button>
                  <Button
                    variant="success"
                    className="d-flex align-items-center"
                    onClick={() => {
                      dispatch(add(movie?.data));
                    }}
                  >
                    <span className="pe-2">Add to Cart</span>
                    <FaCartPlus />
                    <span className="ps-2">
                      (
                      {cart.length > 0 &&
                      cart.filter((item) => item?.slug === movie?.data?.slug)
                        ?.length > 0
                        ? cart.filter(
                            (item) => item?.slug === movie?.data?.slug
                          )[0]?.quantity
                        : 0}
                      )
                    </span>
                  </Button>
                </div>
              </Card.Body>
            </Col>
          </Row>
        </Card>
      </div>
    </>
  );
};

export default MovieDetail;
