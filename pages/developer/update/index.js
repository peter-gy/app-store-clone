import SideLayout from '../../../components/SideLayout';
import EntityForm from '../../../components/EntityForm';
import { Input, InputNumber } from 'antd';
import { useUpdateEntity } from '../../../hooks/writeEntityHooks';
import { useRouter } from 'next/router';

const entity = 'developer';
const operation = 'update';
const dividerTitle = `Update a developer`;
const entityHook = useUpdateEntity;
const fields = [
    {
        label: 'ID',
        name: 'id',
        rules: [{ required: true, message: 'Enter the ID of the developer to be updated!' }],
        inputComponent: <InputNumber min={1} />
    },
    {
        label: 'Username',
        name: 'username',
        rules: [{ required: true, message: 'Please update the username!' }],
        inputComponent: <Input />
    },
    {
        label: 'Password',
        name: 'password',
        rules: [{ required: true, message: 'Please update the password!' }],
        inputComponent: <Input />
    },
    {
        label: 'Region',
        name: 'region',
        rules: [{ required: true, message: 'Please update the region!' }],
        inputComponent: <Input />
    },
    {
        label: 'Website',
        name: 'website_url',
        rules: [{ required: true, message: 'Please update the url!' }],
        inputComponent: <Input />
    },
    {
        label: 'Organization',
        name: 'organization',
        rules: [{ required: true, message: 'Please update the organization!' }],
        inputComponent: <Input />
    }
];

const UpdateDeveloperIndex = () => {
    const router = useRouter();
    return (
        <SideLayout>
            <EntityForm
                entity={entity}
                initialValues={router.query}
                operation={operation}
                dividerTitle={dividerTitle}
                entityHook={entityHook}
                fields={fields}
            />
        </SideLayout>
    );
};

export default UpdateDeveloperIndex;
