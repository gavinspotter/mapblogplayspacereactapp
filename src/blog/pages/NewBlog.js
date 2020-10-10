import React from "react";
import Card from "../../shared/UIElements/Card";
import Input from "../../shared/FormComponents/Input";
import Button from "../../shared/FormComponents/Button";

const NewBlog = () => {
  return (
    <Card>
      <form>
        <Input element="input" />
        <Input />
        <Button>edit</Button>
        <Button>delete</Button>
      </form>
    </Card>
  );
};

export default NewBlog;
