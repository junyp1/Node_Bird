import { Button, Card, Popover, List, Comment } from "antd";
import {
  EllipsisOutlined,
  HeartOutlined,
  HeartTwoTone,
  MessageOutlined,
  RetweetOutlined,
} from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import PropTypes from "prop-types";
import Avatar from "antd/lib/avatar/avatar";
import PostImages from "./PostImages";
import { useCallback, useEffect, useState } from "react";
import CommentForm from "./CommentForm";
import PostCardContent from "./PostCardContent";
import {
  REMOVE_POST_REQUEST,
  LIKE_POST_REQUEST,
  UNLIKE_POST_REQUEST,
  RETWEET_REQUEST,
} from "../reducers/post";
import FollowButton from "./FollowButton";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const id = useSelector((state) => state.user.me?.id);
  const { removePostLoading } = useSelector((state) => state.post);
  const [commentFormOpened, setCommendOpened] = useState(false);

  const liked = post.Likers.find((v) => v.id === id);

  const onLike = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }
    return dispatch({
      type: LIKE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  const onUnlike = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }
    return dispatch({
      type: UNLIKE_POST_REQUEST,
      data: post.id,
    });
  }, [id]);

  const onToggleComment = useCallback(() => {
    setCommendOpened((prev) => !prev);
  }, []);

  const onRemovePost = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }
    return dispatch({
      type: REMOVE_POST_REQUEST,
      data: post.id,
    });
  }, []);

  const onRetweet = useCallback(() => {
    if (!id) {
      return alert("로그인이 필요합니다.");
    }
    return dispatch({
      type: RETWEET_REQUEST,
      data: post.id,
    });
  }, [id]);

  return (
    <div style={{ marginBottom: 20 }}>
      <Card
        title={
          post.RetweetId ? `${post.User.nickname}님이 리트윗하셨습니다` : null
        }
        cover={post.Images[0] && <PostImages images={post.Images}></PostImages>}
        actions={[
          <RetweetOutlined key="retweet" onClick={onRetweet}></RetweetOutlined>,
          liked ? (
            <HeartTwoTone
              twoToneColor="#eb2f96"
              key="heart"
              onClick={onUnlike}
            ></HeartTwoTone>
          ) : (
            <HeartOutlined key="heart" onClick={onLike}></HeartOutlined>
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
                    <Button
                      type="danger"
                      onClick={onRemovePost}
                      loading={removePostLoading}
                    >
                      삭제
                    </Button>
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
        extra={id && <FollowButton post={post}></FollowButton>}
      >
        {post.RetweetId && post.Retweet ? (
          <Card
            cover={
              post.Retweet.Images[0] && (
                <PostImages images={post.Retweet.Images}></PostImages>
              )
            }
          >
            <Card.Meta
              avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
              title={post.User.nickname}
              description={
                <PostCardContent
                  postData={post.Retweet.content}
                ></PostCardContent>
              }
            ></Card.Meta>
          </Card>
        ) : (
          <Card.Meta
            avatar={<Avatar>{post.User.nickname[0]}</Avatar>}
            title={post.User.nickname}
            description={
              <PostCardContent postData={post.content}></PostCardContent>
            }
          ></Card.Meta>
        )}
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
    </div>
  );
};

PostCard.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.string,
    User: PropTypes.object,
    content: PropTypes.string,
    createdAt: PropTypes.string,
    Comments: PropTypes.arrayOf(PropTypes.object),
    Images: PropTypes.arrayOf(PropTypes.object),
    Likers: PropTypes.arrayOf(PropTypes.object),
    RetweetId: PropTypes.number,
    Retweet: PropTypes.objectOf(PropTypes.any),
  }).isRequired,
};

export default PostCard;
