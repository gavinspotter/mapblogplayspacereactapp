import React from "react";
import Button from "../../shared/FormComponents/Button";
import Card from "../../shared/UIElements/Card";

const BlogItem = (props) => {
  return (
    <li className="place-item">
      <Card className="place-item__content">
        <div>
          <div className="place-item__image">
            <img src={props.imge} alt={props.blog} />
          </div>
          <div>{props.blog}</div>
        </div>
        <Button to={`/blog/${props.id}`}>edit</Button>
        <Button>delete</Button>
      </Card>
    </li>
  );
};

export default BlogItem;
