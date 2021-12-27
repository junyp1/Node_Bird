import { useCallback, useMemo, useState } from "react";
import { Form, Input } from "antd";
import { useDispatch, useSelector } from "react-redux";
import useinput from "../hooks/useinput";
import { CHANGE_NICKNAME_REQUEST } from "../reducers/user";

const NicknameEditForm = () => {
  const { me } = useSelector((state) => state.user);
  const [nickname, setNickname] = useState("");
  const dispatch = useDispatch();

  const onChangeNickname = useCallback((e) => {
    setNickname(e.target.value);
  });

  const onSubmit = useCallback(() => {
    dispatch({
      type: CHANGE_NICKNAME_REQUEST,
      data: nickname,
    });
  }, [nickname]);

  return (
    <Form
      style={{
        marginBottom: "20px",
        border: "1px solid #d9d9d9",
        padding: "20px",
      }}
    >
      <Input.Search
        value={nickname}
        placeholder={me?.nickname}
        onChange={onChangeNickname}
        addonBefore="닉네임"
        enterButton="수정"
        onSearch={onSubmit}
      />
    </Form>
  );
};

export default NicknameEditForm;
