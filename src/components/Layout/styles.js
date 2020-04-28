import styled from 'styled-components';

export const Button = styled.button`
  background: ${(props) => props.theme.colors.blue.main};
  color: #ffffff;
  border-radius: 8px;
  border-width: 0;
  text-transform: uppercase;
  padding: 12px;
  :hover {
    background: ${(props) => props.theme.colors.blue.dark};
  }
`;

export const IconButton = styled.button`
  background: ${(props) => props.theme.colors.gray.light};
  color: #8181a5;
  border-radius: 8px;
  border-width: 0;
  text-transform: uppercase;
  width: 36px;
  height: 36px;
  :hover {
    background: ${(props) => props.theme.colors.gray.main};
  }
`;
export const LayoutWrapper = styled.div`
  height: 100vh;
  position: relative;
  display: grid;
  grid-template-columns: 80px 400px auto;
  overflow-y: hidden;
`;
export const Logo = styled.div`
  background-color: ${(props) => props.theme.colors.gray.light};
  border-radius: 9999px;
  box-sizing: border-box;
  height: 30px;
  max-width: 100%;
  width: 30px;
`;

export const Avatar = styled.img`
  border-radius: 9999px;
  box-sizing: border-box;
  height: 48px;
  max-width: 100%;
  width: 48px;
  object-fit: cover;
  background-color: #333;
`;

export const Main = styled.main``;

export const Overview = styled.main`
  display: flex;
  flex-direction: column;
  border-right: 1px solid #f0f0f3;
`;

export const OverviewTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 30px;
  border-bottom: 1px solid #f0f0f3;
  font-weight: bold;
  font-size: 14px;
  line-height: 21px;
`;

export const OverviewContent = styled.div`
  flex: 1;
  padding: 16px 30px;
  height: 100vh;
`;
export const DetailsTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  color: #1c1d21;
  padding: 16px 30px;
`;
export const Details = styled.main`
  background: #f5f5fa;
  display: flex;
  flex-direction: column;
  padding: 0 26px 26px 26px;
  flex: 1;
  overflow-y: auto;
`;
export const DetailsContent = styled.div`
  border: 1px solid #ececf2;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  border-radius: 12px;
  flex: 1;
`;
export const Title = styled.span`
  display: block;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 24px;
  color: #1c1d21;
`;
export const Subtitle = styled.span`
  display: block;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 21px;
  color: #8181a5;
`;
export const Providers = styled.div``;

export const ProviderItem = styled.div`
  border: 1px solid #f0f0f3;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(245, 245, 250, 0.4);
  border-radius: 12px;
  width: 336px;
  height: 100px;
  margin-top: 12px;
  div {
    padding: 20px;
  }
  button {
    border-width: 0;
    background: ${(props) => props.theme.colors[props.color || 'gray'].light};
    border-radius: 10px;
    width: 56px;
    height: 56px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  span:nth-child(1) {
    display: block;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 21px;
    color: #8181a5;
  }
  span:nth-child(2) {
    display: block;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 32px;
    color: #1c1d21;
  }
  :hover {
    background: #f5f5fa;
    button {
      background: ${(props) => props.theme.colors[props.color || 'gray'].main};
    }
    svg {
      fill: ${(props) => props.theme.colors.white};
    }
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
`;
