import React from 'react';
import SideLayout from '../components/SideLayout';
import Link from 'next/link';
import { Row, Col, Card, Typography } from 'antd';
import Lottie from 'react-lottie';
import dbLottieData from '../lotties/db-icon.json';
import userLottieData from '../lotties/user-open-icon.json';
import developerLottieData from '../lotties/developer-icon.json';
import appLottieData from '../lotties/apple-store-icon.json';
import {
    QuestionCircleOutlined,
    PlusCircleOutlined,
    EyeOutlined,
    EditOutlined,
    DeleteOutlined
} from '@ant-design/icons';
const { Meta } = Card;
const { Title } = Typography;

const lottieOptions = {
    loop: false,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const Home = () => {
    return (
        <SideLayout>
            <Lottie
                options={{ ...lottieOptions, loop: true, animationData: dbLottieData }}
                width={200}
                height={200}
            />
            <Title>Database Systems University Project</Title>
            <Title level={4} type="secondary">
                Winter Semester of 2020
            </Title>
            <Row gutter={16} type="flex" justify="space-between" align="bottom">
                <Col span={{ xs: 24, sm: 24, md: 12, lg: 8 }}>
                    <Card
                        style={{ width: 200, marginTop: 10 }}
                        actions={[
                            <Link href="/person">
                                <QuestionCircleOutlined key="overview-person" />
                            </Link>,
                            <Link href="/person/create">
                                <PlusCircleOutlined key="create-person" />
                            </Link>,
                            <Link href="/person/read">
                                <EyeOutlined key="read-person" />
                            </Link>,
                            <Link href="/person/update">
                                <EditOutlined key="update-person" />
                            </Link>,
                            <Link href="/person/delete">
                                <DeleteOutlined key="delete-person" />
                            </Link>
                        ]}>
                        <div style={{ display: 'flex', alignItems: 'center', width: 150 }}>
                            <Lottie
                                options={{ ...lottieOptions, animationData: userLottieData }}
                                width={150}
                                height={150}
                            />
                        </div>
                        <Meta title="Persons" description="Perform CRUD operations on persons!" />
                    </Card>
                </Col>
                <Col span={{ xs: 24, sm: 24, md: 12, lg: 8 }}>
                    <Card
                        style={{ width: 200, marginTop: 10 }}
                        actions={[
                            <Link href="/developer">
                                <QuestionCircleOutlined key="overview-developer" />
                            </Link>,
                            <Link href="/developer/create">
                                <PlusCircleOutlined key="create-developer" />
                            </Link>,
                            <Link href="/developer/read">
                                <EyeOutlined key="read-developer" />
                            </Link>,
                            <Link href="/developer/update">
                                <EditOutlined key="update-developer" />
                            </Link>,
                            <Link href="/developer/delete">
                                <DeleteOutlined key="delete-developer" />
                            </Link>
                        ]}>
                        <div style={{ display: 'flex', alignItems: 'center', width: 150 }}>
                            <Lottie
                                options={{ ...lottieOptions, animationData: developerLottieData }}
                                width={150}
                                height={150}
                            />
                        </div>
                        <Meta
                            title="Developers"
                            description="Perform CRUD operations on developers!"
                        />
                    </Card>
                </Col>
                <Col span={{ xs: 24, sm: 24, md: 12, lg: 8 }}>
                    <Card
                        style={{ width: 200, marginTop: 10, marginBottom: 10 }}
                        actions={[
                            <Link href="/app">
                                <QuestionCircleOutlined key="overview-app" />
                            </Link>,
                            <Link href="/app/read">
                                <EyeOutlined key="read-app" />
                            </Link>
                        ]}>
                        <div style={{ display: 'flex', alignItems: 'center', width: 150 }}>
                            <Lottie
                                options={{ ...lottieOptions, animationData: appLottieData }}
                                width={150}
                                height={150}
                            />
                        </div>
                        <Meta title="Apps" description="Check out various details of Apps!" />
                    </Card>
                </Col>
            </Row>
        </SideLayout>
    );
};

export default Home;
