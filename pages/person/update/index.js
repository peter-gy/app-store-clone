import SideLayout from '../../../components/SideLayout';
import EntityForm from '../../../components/EntityForm';
import { Input, InputNumber } from 'antd';
import { useUpdateEntity } from '../../../hooks/writeEntityHooks';

const entity = 'person';
const operation = 'update';
const dividerTitle = `Update a person`;
const entityHook = useUpdateEntity;
const fields = [
    {
        label: 'ID',
        name: 'id',
        rules: [{ required: true, message: 'Enter the ID of the user to be updated!' }],
        inputComponent: <InputNumber min={1} />
    },
    {
        label: 'Username',
        name: 'username',
        rules: [{ required: true, message: 'Update username!' }],
        inputComponent: <Input />
    },
    {
        label: 'Password',
        name: 'password',
        rules: [{ required: true, message: 'Update password!' }],
        inputComponent: <Input />
    },
    {
        label: 'Region',
        name: 'region',
        rules: [{ required: true, message: 'Update region!' }],
        inputComponent: <Input />
    }
];

const UpdatePersonIndex = () => {
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

export default UpdatePersonIndex;
