import { Layout, Menu, MenuProps, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Content, Footer } = Layout;

const items = [
    {key: '/books', label: 'books'},
    {key: '/book-search', label: 'find a book'},
    {key: '/users', label: 'users'},
    {key: '/user-search', label: 'find a user'},
]

const AppLayout = (): JSX.Element => {
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const navigate = useNavigate();

    const handleNavigation: MenuProps["onClick"] = (e) => {
        navigate(e.key);
    };

    return (
        <Layout>
            <Header style={{ display: "flex", alignItems: "center" }}>
                <div style={{ color: "white", marginRight: '50px' }}>eLibrary</div>
                <Menu
                    onClick={handleNavigation}
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                    items={items}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
            <Content style={{ padding: "0 48px", marginTop: '10px' }}>
                <div
                    style={{
                        background: colorBgContainer,
                        minHeight: 280,
                        padding: 24,
                        borderRadius: borderRadiusLG,
                    }}>
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>
                eLibrary ©{new Date().getFullYear()} Created by CSE-2302M
            </Footer>
        </Layout>
    );
};

export default AppLayout;
