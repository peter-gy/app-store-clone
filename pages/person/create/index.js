import SideLayout from '../../../components/SideLayout';
import EntityForm from '../../../components/EntityForm';
import { Input } from 'antd';
import { useCreateEntity } from '../../../hooks/writeEntityHooks';

const entity = 'person';
const operation = 'create';
const dividerTitle = `Create a new ${entity}`;
const entityHook = useCreateEntity;
const fields = [
    {
        label: 'Username',
        name: 'username',
        rules: [{ required: true, message: 'Please input a username!' }],
        inputComponent: <Input />
    },
    {
        label: 'Password',
        name: 'password',
        rules: [{ required: true, message: 'Please input a password!' }],
        inputComponent: <Input />
    },
    {
        label: 'Region',
        name: 'region',
        rules: [{ required: true, message: 'Please input a region!' }],
        inputComponent: <Input />
    }
];

const CreatePersonIndex = () => {
    return (
        <SideLayout>
            <EntityForm
                entity={entity}
                operation={operation}
                dividerTitle={dividerTitle}
                entityHook={entityHook}
                fields={fields}
            />
        </SideLayout>
    );
};

export default CreatePersonIndex;
