import SideLayout from '../../../components/SideLayout';
import { useFetchEntityById } from '../../../hooks/readEntityHooks';
import { Divider, InputNumber, Skeleton, List, message, Descriptions } from 'antd';
import { useEffect, useRef } from 'react';
import { useRouter } from 'next/router';

const ReadPersonIndex = () => {
    const router = useRouter();
    const initialId = () => ('id' in router.query ? +router.query.id : 50);
    const { data, isLoading, hasError, errorMessage, updateId } = useFetchEntityById(
        'person',
        initialId()
    );
    useEffect(() => {
        if (hasError && errorMessage.message)
            message.error(errorMessage.message.replace('Entity', 'Person'));
    }, [hasError, errorMessage]);

    return (
        <SideLayout>
            <Divider orientation="left">Person Detail</Divider>
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
                </Descriptions>
            ) : (
                ''
            )}
        </SideLayout>
    );
};

export default ReadPersonIndex;
