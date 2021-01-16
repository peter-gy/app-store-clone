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
    Collapse,
    Descriptions,
    Comment,
    Tooltip,
    Avatar
} from 'antd';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

const { Title, Paragraph, Text, Link } = Typography;
const { Panel } = Collapse;

const getLanguages = (data) => data.languages.map(({ language_name }) => language_name);
const getPlatforms = (data) =>
    data.platforms.map(({ platform_name }) => platform_name.replaceAll('_', ' '));
const getAppSize = ({ app_size_in_bytes }) =>
    `${(app_size_in_bytes / (1024 * 1024)).toFixed(1)} MB`;
const getScreenshotUrls = (data, res = '621x1344') =>
    data.screenshot_urls.map(({ screenshot_url }) => screenshot_url.replace('1242x2688', res));
const getRatingColorType = (value) => {
    if (value >= 4 && value <= 5) return 'success';
    else if (value >= 2.5 && value < 4) return 'warning';
    return 'danger';
};
const getAvgRating = (data) => data.rating_stats[0].average_rating.substring(0, 3);

const Review = (props) => {
    const {
        value,
        title,
        text_body,
        person_id,
        username,
        developer_id,
        dev_response_text_body
    } = props.review;
    return (
        <Comment
            style={{ borderBottom: '1px solid #dcdcdc' }}
            author={
                <NextLink
                    href={{
                        pathname: `/person/read`,
                        query: { id: person_id }
                    }}>
                    {username}
                </NextLink>
            }
            avatar={
                <Tooltip title={`Person #${person_id}`}>
                    <Avatar
                        src={`https://eu.ui-avatars.com/api/?background=074075&color=fff&name=${username}`}
                        alt={username}
                    />
                </Tooltip>
            }
            content={
                <div>
                    <h1>{title}</h1>
                    <Text type={getRatingColorType(value)}>{`${value}/5`}</Text>
                    <Paragraph>{text_body}</Paragraph>
                </div>
            }>
            {dev_response_text_body ? (
                <Comment
                    author={
                        <NextLink
                            href={{
                                pathname: `/developer/read`,
                                query: { id: developer_id }
                            }}>
                            {props.org}
                        </NextLink>
                    }
                    avatar={
                        <Tooltip title={`Developer #${developer_id}`}>
                            <Avatar
                                src={`https://eu.ui-avatars.com/api/?background=f6d55c&color=000&name=${props.org}`}
                                alt={props.org}
                            />
                        </Tooltip>
                    }
                    content={<p>{dev_response_text_body}</p>}
                />
            ) : (
                ''
            )}
        </Comment>
    );
};

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
                <Space direction="vertical" style={{ padding: 10 }}>
                    <Row gutter={64} align="middle" justify="center">
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
                                {data.rating_stats[0].average_rating ? (
                                    <Title
                                        level={5}
                                        type={getRatingColorType(
                                            getAvgRating(data)
                                        )}>{`${getAvgRating(data)} / 5`}</Title>
                                ) : (
                                    ''
                                )}
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

                    <Row gutter={16} type="flex" justify="center" align="top">
                        {getScreenshotUrls(data).map((url, idx) => (
                            <Col
                                key={idx}
                                span={{ xs: 24, sm: 24, md: 12, lg: 8 }}
                                style={{ margin: 5 }}>
                                <Image
                                    style={{ borderRadius: '3%' }}
                                    src={url}
                                    height={500}
                                    placeholder={
                                        <Image preview={false} src="/fallback.png" height={500} />
                                    }
                                />
                            </Col>
                        ))}
                    </Row>
                    <Divider />
                    <Collapse defaultActiveKey={['1']}>
                        <Panel header="Description" key="1">
                            <Paragraph>{data.app_description}</Paragraph>
                        </Panel>
                    </Collapse>

                    <Divider />

                    <Collapse defaultActiveKey={['1']}>
                        <Panel header="Reviews" key="1">
                            {data.reviews.map((review) => (
                                <Review
                                    key={review.rating_id}
                                    review={review}
                                    org={data.developer_org}></Review>
                            ))}
                        </Panel>
                    </Collapse>

                    <Divider />
                    <Descriptions bordered title="Details" layout="vertical">
                        <Descriptions.Item label="Languages">
                            {getLanguages(data).join(', ')}
                        </Descriptions.Item>
                        <Descriptions.Item label="Platforms">
                            {getPlatforms(data).join(', ')}
                        </Descriptions.Item>
                        <Descriptions.Item label="App Size">{getAppSize(data)}</Descriptions.Item>
                    </Descriptions>
                </Space>
            ) : (
                ''
            )}
        </SideLayout>
    );
};

export default ReadAppIndex;
