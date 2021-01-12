import SideLayout from '../../../components/SideLayout';
import { useFetchEntityById } from '../../../hooks/readEntityHooks';
import {
    Divider,
    InputNumber,
    Skeleton,
    message,
    Row,
    Col,
    Space,
    Image,
    Typography,
    Collapse
} from 'antd';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const { Title, Paragraph, Text, Link } = Typography;
const { Panel } = Collapse;

const ReadAppIndex = () => {
    const router = useRouter();
    const initialId = () => ('id' in router.query ? +router.query.id : 1);
    const { data, isLoading, hasError, errorMessage, updateId } = useFetchEntityById(
        'app',
        initialId()
    );
    useEffect(() => {
        if (hasError && errorMessage.message)
            message.error(errorMessage.message.replace('Entity', 'App'));
    }, [hasError, errorMessage]);

    return (
        <SideLayout>
            <Divider orientation="left">App Detail</Divider>
            <InputNumber
                min={1}
                defaultValue={initialId()}
                onChange={(value) => updateId(value)}
                style={{ marginBottom: 20 }}
            />
            <Divider />
            {isLoading ? <Skeleton /> : ''}
            {data && !isLoading ? (
                <Space direction="vertical">
                    <Row gutter={64}>
                        <Col>
                            <Image
                                src={data.app_logo_url.replace('1024x1024', '128x128')}
                                width={128}
                                style={{ borderRadius: '10%' }}
                            />
                        </Col>
                        <Col>
                            <Typography>
                                <Title>{data.app_name}</Title>
                                <Title level={4} type="secondary">
                                    {data.app_headline}
                                </Title>
                                <Title level={5} mark>
                                    {data.category_name}
                                </Title>
                                <Link href={data.developer_website_url} target="_blank">
                                    <Text code>{data.developer_org}</Text>
                                </Link>
                                <Title level={4} strong>
                                    {data.app_price == 0
                                        ? 'Free'
                                        : `€ ${data.app_price.charAt(0) === '.' ? '0' : ''}${
                                              data.app_price
                                          }`}
                                </Title>
                            </Typography>
                        </Col>
                    </Row>
                    <Divider />
                    <Collapse>
                        <Panel header="Description" key="1">
                            <Paragraph>{data.app_description}</Paragraph>
                        </Panel>
                    </Collapse>
                </Space>
            ) : (
                ''
            )}
        </SideLayout>
    );
};

export default ReadAppIndex;
