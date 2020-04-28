import styled from 'styled-components';

export const LayoutWrapper = styled.div`
  height: 100vh;
  display: grid;
  grid-template-columns: 80px auto;
`;
export const Logo = styled.div`
  background-color: red;
  border: 1px solid red;
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
`;
export const Sidebar = styled.aside`
  border-right: 1px solid #f0f0f3;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 26px 0;
  transition: all 0.2s;
`;
export const Main = styled.main`
  display: grid;
  grid-template-columns: 400px auto;
`;

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
`;
export const DetailsTitle = styled.div`
  font-weight: bold;
  font-size: 20px;
  line-height: 32px;
  color: #1c1d21;
  padding: 16px 30px;
`;
export const Details = styled.div`
  background: #f5f5fa;
  display: flex;
  flex-direction: column;
  padding: 0 26px 26px 26px;
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
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 20px;
  > div:nth-child(1) {
    margin-right: 10px;
  }
`;

export const Table = styled.div``;

export const TableHeader = styled.div`
  background: ${(props) => props.theme.colors.gray.light};
  display: flex;
  justify-content: space-between;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 18px;
  color: #8181a5;
  padding: 0 20px;
  > div {
    cursor: pointer;
    padding: 14px 26px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
    :hover {
      background: ${(props) => props.theme.colors.gray.main};
    }
  }
`;

export const TableBody = styled.div`
  padding: 20px;
`;

export const TableRow = styled.div`
  cursor: pointer;
  display: flex;
  border: 1px solid #ececf2;
  box-sizing: border-box;
  border-radius: 12px;
  padding: 15px 0;
  :hover {
    background: #f5f5fa;
  }
  margin-top: 12px;
`;
export const TableCell = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 20px;
  span {
    white-space: nowrap;
    overflow: hidden;
  }
`;

export const Name = styled.div`
  flex: 1;
  > div {
    padding-left: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    span {
      margin-left: 16px;
      font-weight: bold;
      font-size: 14px;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  :hover {
    cursor: pointer;
  }
`;
export const Tag = styled.span`
  background: ${(props) => props.theme.colors.yellow.light};
  border-radius: 8px;
  text-align: center;
  color: ${(props) => props.theme.colors.yellow.dark};
  font-weight: bold;
  padding: 7px 21px;
`;
