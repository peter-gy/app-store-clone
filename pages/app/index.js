import SideLayout from '../../components/SideLayout';
import EntityOverview from '../../components/EntityOverview';
import { Image } from 'antd';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id',
        width: 80,
        align: 'center'
    },
    {
        title: 'Logo',
        dataIndex: 'app_logo_url',
        width: 100,
        align: 'center',
        render: (text, record) => (
            <Image
                src={text.replace('1024x1024', '128x128')}
                width={56}
                alt={`Logo of app ${record.app_name}`}
            />
        )
    },
    {
        title: 'Name',
        dataIndex: 'app_name'
    },
    {
        title: 'Price',
        dataIndex: 'app_price',
        width: 90,
        align: 'center',
        render: (text, record) => <p>{text === '0' ? 'Free' : `€ ${text}`}</p>
    },
    {
        title: 'Category',
        dataIndex: 'category_name',
        width: 110,
        align: 'center'
    }
];

const AppIndex = () => {
    return (
        <SideLayout>
            <EntityOverview
                entity="app"
                columns={columns}
                actions={['read']}
                initialFetchCount={15}
            />
        </SideLayout>
    );
};

export default AppIndex;
