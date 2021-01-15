import { useEffect, useRef } from 'react';
import { Divider, Form, Button, Spin, message } from 'antd';
import { PlusCircleOutlined } from '@ant-design/icons';
import Lottie from 'react-lottie';
import createLottieData from '../lotties/create-icon.json';
import readLottieData from '../lotties/read-icon.json';
import updateLottieData from '../lotties/edit-icon.json';
import deleteLottieData from '../lotties/delete-icon.json';

const lottieOptions = {
    loop: true,
    autoplay: true,
    rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
    }
};

const getLottieData = (operation) => {
    switch (operation) {
        case 'create':
            return createLottieData;
        case 'read':
            return readLottieData;
        case 'update':
            return updateLottieData;
        case 'delete':
            return deleteLottieData;
    }
};

const layout = {
    labelCol: {
        span: 8
    },
    wrapperCol: {
        span: 16
    }
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16
    }
};

const EntityForm = ({ entity, operation, entityHook, dividerTitle, fields, initialValues }) => {
    const { data, isLoading, hasError, errorMessage, setEntityData } = entityHook(entity, {});
    const [form] = Form.useForm();
    const formRef = useRef(null);
    const afterFirstSubmit = useRef(false);

    useEffect(() => {
        if (data && afterFirstSubmit.current) message.info(data.message);
    }, [data]);

    const onFinish = (values) => {
        if (!afterFirstSubmit.current) afterFirstSubmit.current = true;
        setEntityData(values);
        formRef.current.resetFields();
    };

    const onFinishFailed = (errorInfo) => {
        message.error('Please fill in all the required fields!');
    };

    return (
        <>
            <Lottie
                options={{ ...lottieOptions, animationData: getLottieData(operation) }}
                width={150}
                height={150}
            />
            <Divider orientation="left">{dividerTitle}</Divider>
            {isLoading ? <Spin /> : ''}
            <Form
                {...layout}
                ref={formRef}
                form={form}
                name={`${operation}-${entity}`}
                initialValues={initialValues}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}>
                {fields.map(({ label, name, rules, inputComponent }, idx) => (
                    <Form.Item key={idx} label={label} name={name} rules={rules}>
                        {inputComponent}
                    </Form.Item>
                ))}
                <Form.Item {...tailLayout} style={{ marginTop: 10 }}>
                    <Button type="primary" htmlType="submit" icon={<PlusCircleOutlined />}>
                        {operation} {entity}
                    </Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default EntityForm;
