import SideLayout from '../../../components/SideLayout';
import { useFetchEntityById } from '../../../hooks/readEntityHooks';
import { Divider, InputNumber, Skeleton, List, message } from 'antd';
import { useEffect } from 'react';

const initialId = 1;

const ReadPersonIndex = () => {
    const { data, isLoading, hasError, errorMessage, updateId } = useFetchEntityById(
        'person',
        initialId
    );

    useEffect(() => {
        if (hasError && errorMessage.message) message.error(errorMessage.message);
    }, [hasError, errorMessage]);

    return (
        <SideLayout>
            <Divider orientation="left">Person Detail</Divider>
            <InputNumber
                min={1}
                defaultValue={initialId}
                onChange={(value) => updateId(value)}
                style={{ marginBottom: 20 }}
            />
            {isLoading ? <Skeleton /> : ''}
            {data && !isLoading ? (
                <List
                    size="large"
                    header={<div>{data.username}</div>}
                    bordered
                    dataSource={[data.password, data.region]}
                    renderItem={(item) => <List.Item>{item}</List.Item>}
                />
            ) : (
                ''
            )}
        </SideLayout>
    );
};

export default ReadPersonIndex;
