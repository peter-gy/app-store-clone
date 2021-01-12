import SideLayout from '../../../components/SideLayout';
import { useFetchEntityById } from '../../../hooks/readEntityHooks';
import { Divider, InputNumber, Skeleton, List, message } from 'antd';
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
                <List
                    size="large"
                    header={<div>{data.username}</div>}
                    bordered
                    dataSource={[data.password, data.region, data.website_url, data.organization]}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />
            ) : (
                ''
            )}
        </SideLayout>
    );
};

export default ReadDeveloperIndex;
