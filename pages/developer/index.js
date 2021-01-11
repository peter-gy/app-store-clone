import SideLayout from '../../components/SideLayout';
import EntityOverview from '../../components/EntityOverview';
import { Tooltip } from 'antd';
import { CompassTwoTone } from '@ant-design/icons';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        width: 80,
        align: 'center'
    },
    {
        title: 'Username',
        dataIndex: 'username'
    },
    {
        title: 'Password',
        dataIndex: 'password'
    },
    {
        title: 'Region',
        dataIndex: 'region',
        width: 80,
        align: 'center'
    },
    {
        title: 'Website',
        dataIndex: 'website_url',
        render: (text, record) => (
            <a href={record.website_url} target="_blank">
                <Tooltip title={record.website_url}>
                    <CompassTwoTone />
                </Tooltip>
            </a>
        ),
        width: 90,
        align: 'center'
    },
    {
        title: 'Organization',
        dataIndex: 'organization'
    }
];

const DeveloperIndex = () => {
    return (
        <SideLayout>
            <EntityOverview entity="developer" columns={columns} />
        </SideLayout>
    );
};

export default DeveloperIndex;
