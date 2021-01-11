import Link from 'next/link';
import { useFetchEntityRange } from '../hooks/readEntityHooks';
import { useEffect } from 'react';
import { Table, InputNumber, Row, Col, Divider, Button, Space, Tooltip, message } from 'antd';
import { EyeTwoTone, EditTwoTone, DeleteTwoTone } from '@ant-design/icons';

const actionConfig = {
    read: {
        title: 'Read',
        icon: <EyeTwoTone />
    },
    update: {
        title: 'Update',
        icon: <EditTwoTone />
    },
    delete: {
        title: 'Delete',
        icon: <DeleteTwoTone />
    }
};

const EntityOverview = ({
    entity,
    columns,
    actions = ['read', 'update', 'delete'],
    initialFetchCount = 100,
    inScrollViewCount = 10
}) => {
    const { data, isLoading, hasError, errorMessage, refetch, updateUp } = useFetchEntityRange(
        entity,
        1,
        initialFetchCount
    );

    if (actions.length !== 0) {
        columns.push({
            title: 'Actions',
            key: 'actions',
            render: (text, record) => (
                <Space size="middle">
                    {actions.map((action) => {
                        const { title, icon } = actionConfig[action];
                        return (
                            <Link href={`/${entity}/${action}`}>
                                <Tooltip title={title}>{icon}</Tooltip>
                            </Link>
                        );
                    })}
                </Space>
            )
        });
    }

    useEffect(() => {
        if (hasError) {
            message.error(errorMessage.message);
        }
    }, [hasError]);

    const capitalize = (str) => str.charAt(0).toUpperCase() + str.slice(1);

    return (
        <>
            <Divider orientation="left">{`${capitalize(entity)}s Overview`}</Divider>
            <Row gutter={16}>
                <Col span={8}>
                    <p>Number of {entity}s to fetch</p>
                </Col>
                <Col span={8}>
                    <InputNumber defaultValue={100} onChange={(value) => updateUp(value)} />
                </Col>
                <Col span={8}>
                    <Button type="primary" onClick={refetch}>
                        Refresh Table
                    </Button>
                </Col>
            </Row>
            <Table
                style={{ marginTop: 10 }}
                columns={columns}
                rowKey={(record) => record.id}
                dataSource={data}
                loading={isLoading}
                scroll={{ y: 57.5 * inScrollViewCount }}
                bordered
                title={() => `${capitalize(entity)}s`}
            />
        </>
    );
};

export default EntityOverview;
