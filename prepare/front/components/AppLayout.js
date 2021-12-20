import PropTypes from "prop-types";
import Link from "next/link";
import { Menu, Input, Row, Col } from "antd";
import { useState } from "react";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import styled from "styled-components";

const SearchInput = styled(Input.Search)`
  vertical-align: middle;
`;

const AppLayout = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Menu mode="horizontal">
        <Menu.Item key="1">
          <Link href={"/"}>
            <a>노드버드</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link href={"/profile"}>
            <a>프로필</a>
          </Link>
        </Menu.Item>
        <Menu.Item key="3">
          <SearchInput enterButton></SearchInput>
        </Menu.Item>
        <Menu.Item key="4">
          <Link href={"/signup"}>
            <a>회원가입</a>
          </Link>
        </Menu.Item>
      </Menu>
      <Row gutter={8}>
        <Col xs={24} md={6}>
          {isLoggedIn ? (
            <UserProfile setIsLoggedIn={setIsLoggedIn}></UserProfile>
          ) : (
            <LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>
          )}
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a
            href="https://www.zerocho.com"
            target={"_blank"}
            rel="noreferrer noopener"
          >
            Made by Jun
          </a>
        </Col>
      </Row>
    </div>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
