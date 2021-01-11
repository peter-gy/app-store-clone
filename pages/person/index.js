import SideLayout from '../../components/SideLayout';
import { useEffect } from 'react';
import { useFetchEntityById } from '../../hooks/readEntityHooks';
import { message, InputNumber, Spin, Button } from 'antd';

const PersonIndex = () => {
    const initialId = 1;
    const { data, isLoading, hasError, errorMessage, refetch, updateId } = useFetchEntityById(
        'person',
        initialId
    );

    useEffect(() => {
        if (hasError) {
            message.error(errorMessage.message);
        }
    }, [hasError]);

    return (
        <SideLayout>
            <h1>Person Index</h1>
            <InputNumber
                min={1}
                max={10}
                defaultValue={initialId}
                onChange={(value) => updateId(value)}
            />
            {isLoading ? <Spin /> : <p>{JSON.stringify(data)}</p>}
            <Button type="primary" onClick={refetch}>
                Refresh
            </Button>
        </SideLayout>
    );
};

export default PersonIndex;
