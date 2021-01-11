import SideLayout from '../../../components/SideLayout';
import { InputNumber } from 'antd';

const CreatePersonIndex = () => {
    return (
        <SideLayout>
            <h1>Person id</h1>
            <InputNumber min={1} defaultValue={3} />
        </SideLayout>
    );
};

export default CreatePersonIndex;
