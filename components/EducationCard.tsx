import Fade from 'react-reveal/Fade';
import { Badge, Card, CardBody } from 'reactstrap';
import { EducationType } from '../types/sections';

const EducationCard = ({
  schoolName,
  subHeader,
  duration,
  desc,
  grade,
  descBullets,
}: EducationType) => {
  return (
    <Fade left duration={2000}>
      <Card className="card-lift--hover shadow mt-4">
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h5 className="text-info">{schoolName}</h5>
              <h6>{subHeader}</h6>
              <Badge color="info" className="mr-1">
                {duration}
              </Badge>
              <p className="description mt-3">{desc}</p>
              <ul>
                {descBullets
                  ? descBullets.map((desc) => {
                      return <li key={desc}>{desc}</li>;
                    })
                  : null}
              </ul>
            </div>
          </div>
        </CardBody>
      </Card>
    </Fade>
  );
};

export default EducationCard;
