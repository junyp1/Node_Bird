import { Button, Form, Input } from "antd";
import { useCallback, useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useinput from "../hooks/useinput";
import { addPost } from "../reducers/post";

const PostForm = () => {
  const dispatch = useDispatch();
  const { imagePaths, addPostDone } = useSelector((state) => state.post);
  const [text, onChangeText, setText] = useinput("");

  useEffect(() => {
    if (addPostDone) {
      setText("");
    }
  }, [addPostDone]);

  const onSubmit = useCallback(() => {
    dispatch(addPost(text));
  }, [text]);

  const imageInput = useRef();
  const onClickImageUpload = useCallback(() => {
    imageInput.current.click();
  }, [imageInput.current]);

  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={onChangeText}
        maxLength={140}
        placeholder="어떤 일이 있었나요?"
      ></Input.TextArea>
      <div>
        <input type="file" multiple hidden ref={imageInput}></input>
        <Button onClick={onClickImageUpload}>이미지 업로드</Button>
        <Button type="primary" style={{ float: "right" }} htmlType="submit">
          쨱짹
        </Button>
      </div>
      <div>
        {imagePaths &&
          imagePaths.map((v) => (
            <div key={v} style={{ display: "inline-block" }}>
              <img src={v} style={{ width: "200px" }} alt={v}></img>
              <div>
                <Button>제거</Button>
              </div>
            </div>
          ))}
      </div>
    </Form>
  );
};

export default PostForm;
