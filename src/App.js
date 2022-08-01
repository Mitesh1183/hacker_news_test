/* eslint-disable react/no-danger-with-children */
import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getNews } from "./service";
const App = () => {
  const [newsList, setNewsList] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    try {
      getNews().then((res) => {
        setNewsList(res?.data?.hits);
        setLoading(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  console.log(newsList);
  return (
    <Row>
      {loading ? (
        <h2>Loading....</h2>
      ) : (
        <>
          <Container className="mb-3">
            <Row>
              <Col xs={3} md={3}>
                Comments
              </Col>
              <Col xs={3} md={3}>
                vote count
              </Col>
              <Col xs={3} md={3}>
                UpVote
              </Col>
              <Col xs={3} md={3}>
                News Details
              </Col>
            </Row>
          </Container>
          {newsList.map(
            (
              { id, author, vote = 0, upvote = 0, num_comments, title },
              index
            ) => (
              <Container>
                <Row>
                  <Col xs={3} md={3}>
                    {num_comments}
                  </Col>
                  <Col xs={3} md={3}>
                    {vote}
                  </Col>
                  <Col xs={3} md={3}>
                    {upvote}
                  </Col>
                  <Col xs={3} md={3}>
                    {title}
                    {`(${author})`}
                  </Col>
                </Row>
              </Container>
            )
          )}
        </>
      )}
    </Row>
  );
};

export default App;
