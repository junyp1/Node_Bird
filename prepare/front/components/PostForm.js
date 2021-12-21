import { Button, Form, Input } from "antd";
import { useCallback, useState } from "react";
import { useSelector } from "react-redux";

const PostForm = () => {
  const onSubmit = useCallback(() => {}, []);
  const { imagePaths } = useSelector((state) => state.post);
  const [text, setText] = useState("");

  const handleChangeText = (e) => {
    setText(e.target.value);
  };

  return (
    <Form
      style={{ margin: "10px 0 20px" }}
      encType="multipart/form-data"
      onFinish={onSubmit}
    >
      <Input.TextArea
        value={text}
        onChange={handleChangeText}
        maxLength={140}
        placeholder="어떤 일이 있었나요?"
      ></Input.TextArea>
      <div>
        <input type="file" multiple hidden></input>
        <Button>이미지 업로드</Button>
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
