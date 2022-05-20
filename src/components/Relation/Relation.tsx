import { useContext } from "react";
import { Card, ListGroup } from "react-bootstrap";
import AppContext from "../../store/AppContext";
import OutputSingleRow from "./SingleRow/SingleRow";

const Relation: React.FC<{}> = () => {
  const ctx = useContext(AppContext);
  return (
    <Card>
      <Card.Header>
        <Card.Title>Result are as follows:</Card.Title>
      </Card.Header>

      <Card.Body>
        <ListGroup as='ul'>
          {ctx.output.length === 0 ? (
            <Card>
              <Card.Body className='text-danger'>Not Related!</Card.Body>
            </Card>
          ) : (
            ctx.output.map((users, i) => (
              <OutputSingleRow users={users} key={i} />
            ))
          )}
        </ListGroup>
      </Card.Body>
    </Card>
  );
};

export default Relation;
