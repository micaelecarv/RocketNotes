import styled from "styled-components";

export const Container = styled.section`
  margin: 28px 0px;

  > h2 {
    border-bottom: 1px solid ${props => props.theme.COLORS.BACKGROUND_700};

    padding-bottom: 16px;
    margin-bottom: 24px;

    color: ${props => props.theme.COLORS.GRAY_100};
    font-size: 20px;
    font-weight: 400;
  }
`;
