import SideLayout from '../../../components/SideLayout';
import EntityForm from '../../../components/EntityForm';
import { InputNumber } from 'antd';
import { useDeleteEntity } from '../../../hooks/writeEntityHooks';
import { useRouter } from 'next/router';

const entity = 'developer';
const operation = 'delete';
const dividerTitle = `Delete a developer`;
const entityHook = useDeleteEntity;
const fields = [
    {
        label: 'ID',
        name: 'id',
        rules: [{ required: true, message: 'Enter the ID of the developer to be deleted!' }],
        inputComponent: <InputNumber min={1} />
    }
];

const DeleteDeveloperIndex = () => {
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

export default DeleteDeveloperIndex;
