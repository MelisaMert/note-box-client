import { Layout, Menu, Breadcrumb } from 'antd';

import LayoutContent from './Content';

import '../style/Layout.css';

const { Header, Content, Footer } = Layout;




function LayoutComp() {
    return (
        <>
            <Layout className="layout">
                <Header>
                    <div className="logo" />
                    <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                        <Menu.Item key="1">About Note Box</Menu.Item>
                        <Menu.Item key="2">Visit Demo</Menu.Item>
                        <Menu.Item key="3">Your Notes</Menu.Item>
                    </Menu>
                </Header>
                <Content className="layout-container">
                    <Breadcrumb className="breadcrumb">
                        <Breadcrumb.Item>Home</Breadcrumb.Item>
                        <Breadcrumb.Item>List</Breadcrumb.Item>
                        <Breadcrumb.Item>App</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="site-layout-content">
                        <LayoutContent />
                    </div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Note Box App ©2021</Footer>
            </Layout>,
        </>
    )
}

export default LayoutComp;