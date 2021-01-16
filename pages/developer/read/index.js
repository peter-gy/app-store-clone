import SideLayout from '../../../components/SideLayout';
import { useFetchEntityById } from '../../../hooks/readEntityHooks';
import { Divider, InputNumber, Skeleton, Descriptions, message } from 'antd';
import { useEffect } from 'react';
import { useRouter } from 'next/router';

const ReadDeveloperIndex = () => {
    const router = useRouter();
    const initialId = () => ('id' in router.query ? +router.query.id : 40404);
    const { data, isLoading, hasError, errorMessage, updateId } = useFetchEntityById(
        'developer',
        initialId()
    );
    useEffect(() => {
        if (hasError && errorMessage.message)
            message.error(errorMessage.message.replace('Entity', 'Developer'));
    }, [hasError, errorMessage]);

    return (
        <SideLayout>
            <Divider orientation="left">Developer Detail</Divider>
            <InputNumber
                min={1}
                defaultValue={initialId()}
                onChange={(value) => updateId(value)}
                style={{ marginBottom: 20 }}
            />
            {isLoading ? <Skeleton /> : ''}
            {data && !isLoading ? (
                <Descriptions bordered title="Details" layout="vertical">
                    <Descriptions.Item label="Username">{data.username}</Descriptions.Item>
                    <Descriptions.Item label="Password">{data.password}</Descriptions.Item>
                    <Descriptions.Item label="Region">{data.region}</Descriptions.Item>
                    <Descriptions.Item label="Website Url">
                        <a href={data.website_url} target="_blank">
                            URL
                        </a>
                    </Descriptions.Item>
                    <Descriptions.Item label="Organization">{data.organization}</Descriptions.Item>
                </Descriptions>
            ) : (
                ''
            )}
        </SideLayout>
    );
};

export default ReadDeveloperIndex;
