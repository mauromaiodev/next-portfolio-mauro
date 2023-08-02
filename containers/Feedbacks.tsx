import { Col, Container, Row } from 'reactstrap';
import FeedbackCard from '../components/FeedbackCard';
import { feedbacks } from '../portfolio';

const Feedbacks = () => {
  return (
    feedbacks && (
      <section className="section section-lg bg-gradient-default">
        <Container>
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                <i className="fa fa-star text-info" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-info  text-white">Feedbacks</h4>
            </div>
          </div>
          <Row className="row-grid align-items-center">
            {feedbacks.map((data, i) => {
              return (
                <Col key={i} lg={6}>
                  <FeedbackCard {...data} />
                </Col>
              );
            })}
          </Row>
        </Container>
        <div className="separator separator-bottom separator-skew zindex-100">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon className="fill-white" points="0 0 2560 100 0 100" />
          </svg>
        </div>
      </section>
    )
  );
};

export default Feedbacks;
