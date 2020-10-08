import React from "react";
import Card from "../../shared/UIElements/Card";
import Input from "../../shared/FormComponents/Input";

const NewBlog = () => {
  return (
    <Card>
      <form>
        <Input element="input" />
        <Input />
      </form>
    </Card>
  );
};

export default NewBlog;
