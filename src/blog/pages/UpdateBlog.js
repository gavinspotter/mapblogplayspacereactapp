import React from "react";
import { useParams } from "react-router-dom";
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

  return (
    <Card>
      <form>
        <Input
          valueDue="editinput"
          element="editinput"
          name="hi"
          val1={indentifiedBlog.blgentry}
        />
        <Input
          valueDue="editinput"
          name="hello"
          val1={indentifiedBlog.blgimg}
        />
        <Button>update blog</Button>
      </form>
    </Card>
  );
};

export default UpdateBlog;
