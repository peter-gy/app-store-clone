import Link from 'next/link';
import Head from 'next/head';
import { useState } from 'react';
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    CodeOutlined,
    AppleOutlined,
    HomeOutlined,
    QuestionCircleOutlined,
    PlusCircleOutlined,
    EyeOutlined,
    EditOutlined,
    DeleteOutlined,
    ReloadOutlined
} from '@ant-design/icons';

const { Sider, Content, Footer } = Layout;
const { SubMenu } = Menu;

const SideLayout = ({ children }) => {
    const [collapsed, setCollapsed] = useState(true);
    return (
        <Layout>
            <Head>
                <title>App Store Clone</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Sider collapsible collapsed={collapsed} onCollapse={() => setCollapsed(!collapsed)}>
                <Menu theme="dark" mode="inline">
                    <Menu.Item key="1" icon={<HomeOutlined />}>
                        <Link href="/">Home</Link>
                    </Menu.Item>
                    <SubMenu key="sub1" icon={<UserOutlined />} title="Persons">
                        <Menu.Item key="2" icon={<QuestionCircleOutlined />}>
                            <Link href="/person">Overview</Link>
                        </Menu.Item>
                        <Menu.Item key="3" icon={<PlusCircleOutlined />}>
                            <Link href="/person/create">Create</Link>
                        </Menu.Item>
                        <Menu.Item key="4" icon={<EyeOutlined />}>
                            <Link href="/person/read">Read</Link>
                        </Menu.Item>
                        <Menu.Item key="5" icon={<EditOutlined />}>
                            <Link href="/person/update">Update</Link>
                        </Menu.Item>
                        <Menu.Item key="6" icon={<DeleteOutlined />}>
                            <Link href="/person/delete">Delete</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub2" icon={<CodeOutlined />} title="Developers">
                        <Menu.Item key="7" icon={<QuestionCircleOutlined />}>
                            <Link href="/developer">Overview</Link>
                        </Menu.Item>
                        <Menu.Item key="8" icon={<PlusCircleOutlined />}>
                            <Link href="/developer/create">Create</Link>
                        </Menu.Item>
                        <Menu.Item key="9" icon={<EyeOutlined />}>
                            <Link href="/developer/read">Read</Link>
                        </Menu.Item>
                        <Menu.Item key="10" icon={<EditOutlined />}>
                            <Link href="/developer/update">Update</Link>
                        </Menu.Item>
                        <Menu.Item key="11" icon={<DeleteOutlined />}>
                            <Link href="/developer/delete">Delete</Link>
                        </Menu.Item>
                    </SubMenu>
                    <SubMenu key="sub3" icon={<AppleOutlined />} title="Apps">
                        <Menu.Item key="12" icon={<QuestionCircleOutlined />}>
                            <Link href="/app">Overview</Link>
                        </Menu.Item>
                        <Menu.Item key="13" icon={<PlusCircleOutlined />}>
                            <Link href="/app/read">Read</Link>
                        </Menu.Item>
                    </SubMenu>
                    <Menu.Item key="2" icon={<ReloadOutlined />}>
                        <a
                            href="http://wwwlab.cs.univie.ac.at/~gyarmatip41/app-store-clone/api/resetdb.php"
                            target="blank">
                            Reset Database
                        </a>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout>
                <Content>
                    <div className="container">{children}</div>
                </Content>
                <Footer style={{ textAlign: 'center' }}>Created By Péter Ferenc Gyarmati</Footer>
            </Layout>
        </Layout>
    );
};

export default SideLayout;
