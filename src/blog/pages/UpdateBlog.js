import React from "react";
import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import Card from "../../shared/UIElements/Card";
import Input from "../../shared/FormComponents/Input";
import Button from "../../shared/FormComponents/Button";

const BLOG = [
  {
    id: "be1",
    blgimg: "https://upload.wikimedia.org/wikipedia/commons/d/d6/Ra_Barque.jpg",
    blgentry: "this is my first blog post",
    creator: "ra",
  },
  {
    id: "be1",
    blgimg:
      "https://upload.wikimedia.org/wikipedia/commons/1/1b/The_judgement_of_the_dead_in_the_presence_of_Osiris.jpg",
    blgentry: "this is basically my first post",
    creator: "osiris",
  },
  {
    id: "be1",
    blgimg:
      "https://upload.wikimedia.org/wikipedia/commons/d/d4/Set_speared_Apep.jpg",
    blgentry: "this is me seth's first entry",
    creator: "seth",
  },
];

const UpdateBlog = (props) => {
  const blogId = useParams().blogId;
  const indentifiedBlog = BLOG.find((b) => b.id === blogId);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <Card>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          valueDue="editinput"
          element="editinput"
          nam1="hi"
          val1={indentifiedBlog.blgentry}
          valRef={register}
        />
        <Input
          valueDue="editinput"
          nam1="hello"
          val1={indentifiedBlog.blgimg}
          valRef={register}
        />
        <Button>update blog</Button>
      </form>
    </Card>
  );
};

export default UpdateBlog;
