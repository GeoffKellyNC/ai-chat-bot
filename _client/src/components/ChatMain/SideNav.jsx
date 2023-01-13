import React from "react";
import styled from "styled-components";

import berryImg from "../../assets/images/berry-logo.png";

const SideNav = () => {
  return (
    <SideNavStyled>
      <div className="nav-header">
        <div className="nav-head-top-row">
          <img src={berryImg} alt="berry-logo" className="berry-logo" />
          <h1>Berry AI</h1>
        </div>
        <div className="nav-head-bottom-row">
          <span>Powered by OpenAi</span>
        </div>
      </div>
    </SideNavStyled>
  );
};

export default SideNav;

const SideNavStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 300px;
  height: 100%;
  color: white;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  background-color: rgba(9, 8, 8, 0.6);
  border-right: 3px solid ${(pr) => pr.theme.colors.secondary};
  font-family: ${(pr) => pr.theme.font.family.secondary};
  font-size: ${(pr) => pr.theme.font.size.heading};
  z-index: 100;

  .nav-header {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .nav-head-top-row {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  .nav-head-bottom-row span {
    font-size: ${(pr) => pr.theme.font.size.large};
  }

  .berry-logo {
    height: 75px;
    width: 75px;
    padding: 1rem 2rem;
  }
`;
