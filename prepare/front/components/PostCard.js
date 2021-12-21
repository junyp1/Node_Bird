import { Button, Card, Popover, List, Comment } from "antd";
import {
  EllipsisOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";
import Avatar from "antd/lib/avatar/avatar";
import PostImages from "./PostImages";
import { useCallback, useState } from "react";
import CommentForm from "./CommentForm";
import PostCardContent from "./PostCardContent";

const PostCard = ({ post }) => {
  const id = useSelector((state) => state.user.me?.id);
  const [liked, setLiked] = useState(false);
  const [commentFormOpened, setCommendOpened] = useState(false);

  const onToggleLike = useCallback(() => {
    setLiked((prev) => !prev);
  }, []);

  const onToggleComment = useCallback(() => {
    setCommendOpened((prev) => !prev);
  });

  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        cover={post.Images[0] && <PostImages images={post.Images}></PostImages>}
        actions={[
          <RetweetOutlined key="retweet"></RetweetOutlined>,
          liked ? (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="heart"
              onClick={onToggleLike}
            ></HeartTwoTone>
          ) : (
            <HeartOutlined key="heart" onClick={onToggleLike}></HeartOutlined>
          ),
          <MessageOutlined
            key="comment"
            onClick={onToggleComment}
          ></MessageOutlined>,
          <Popover
            key="more"
            content={
              <Button.Group>
                {id && post.User.id === id ? (
                  <>
                    <Button>수정</Button>
                    <Button type="danger">삭제</Button>
                  </>
                ) : (
                  <Button>신고</Button>
                )}
              </Button.Group>
            }
          >
            <EllipsisOutlined></EllipsisOutlined>
          </Popover>,
        ]}
      >
        <Card.Meta
          avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
          title={post.User.nickname}
          description={
            <PostCardContent postData={post.content}></PostCardContent>
          }
        ></Card.Meta>
      </Card>
      {commentFormOpened && (
        <div>
          <CommentForm post={post}></CommentForm>
          <List
            header={`${post.Comments.length}개의 댓글`}
            itemLayout="horizontal"
            dataSource={post.Comments}
            renderItem={(item) => (
              <li>
                <Comment
                  author={item.User.nickname}
                  avatar={<Avatar>{item.User.nickname[0]}</Avatar>}
                  content={item.content}
                ></Comment>
              </li>
            )}
          ></List>
        </div>
      )}
      {/* <CommentForm></CommentForm>
      <Comments></Comments> */}
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.object,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};

export default PostCard;