import SideLayout from '../../../components/SideLayout';
import EntityForm from '../../../components/EntityForm';
import { InputNumber } from 'antd';
import { useDeleteEntity } from '../../../hooks/writeEntityHooks';

const entity = 'person';
const operation = 'delete';
const dividerTitle = `Delete a person`;
const entityHook = useDeleteEntity;
const fields = [
    {
        label: 'ID',
        name: 'id',
        rules: [{ required: true, message: 'Enter the ID of the user to be deleted!' }],
        inputComponent: <InputNumber min={1} />
    }
];

const DeletePersonIndex = () => {
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

export default DeletePersonIndex;