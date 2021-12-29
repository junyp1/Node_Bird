import PropTypes from "prop-types";
import Link from "next/dist/client/link";
import { Input, Button } from "antd";
import { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";

const { TextArea } = Input;

const PostCardContent = ({
  postData,
  editMode,
  onCancelUpdate,
  onChangePost,
}) => {
  const [editText, setEditText] = useState(postData);
  const { updatePostLoading, updatePostDone } = useSelector(
    (state) => state.post
  );

  useEffect(() => {
    if (updatePostDone) {
      onCancelUpdate();
    }
  }, [updatePostDone]);

  const onChangeText = useCallback((e) => {
    setEditText(e.target.value);
  }, []);

  return (
    <div>
      {editMode ? (
        <>
          <TextArea value={editText} onChange={onChangeText}></TextArea>
          <Button.Group>
            <Button
              loading={updatePostLoading}
              onClick={onChangePost(editText)}
            >
              수정
            </Button>
            <Button type="danger" onClick={onCancelUpdate}>
              취소
            </Button>
          </Button.Group>
        </>
      ) : (
        postData.split(/(#[^\s#]+)/g).map((v, i) => {
          if (v.match(/(#[^\s#]+)/g)) {
            return (
              <Link prefetch={false} href={`/hashtag/${v.slice(1)}`} key={i}>
                <a>{v}</a>
              </Link>
            );
          }
          return v;
        })
      )}
    </div>
  );
};

PostCardContent.propTypes = {
  postData: PropTypes.string.isRequired,
  editMode: PropTypes.bool,
  onCancelUpdate: PropTypes.func.isRequired,
  onChangePost: PropTypes.func.isRequired,
};

PostCardContent.defaultProps = {
  editMode: false,
};

export default PostCardContent;
