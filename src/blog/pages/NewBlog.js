import React from "react";
import Card from "../../shared/UIElements/Card";
import Input from "../../shared/FormComponents/Input";
import Button from "../../shared/FormComponents/Button";

const NewBlog = (props) => {
  return (
    <Card>
      <form>
        <Input element="input" />
        <Input />
        <Button to={`/blog/${props.id}`}>edit</Button>
        <Button>delete</Button>
      </form>
    </Card>
  );
};

export default NewBlog;
