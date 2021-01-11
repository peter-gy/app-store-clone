import SideLayout from '../../components/SideLayout';
import EntityOverview from '../../components/EntityOverview';

const columns = [
    {
        title: 'ID',
        dataIndex: 'id'
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
        dataIndex: 'region'
    }
];

const PersonIndex = () => {
    return (
        <SideLayout>
            <EntityOverview entity="person" columns={columns} />
        </SideLayout>
    );
};

export default PersonIndex;
