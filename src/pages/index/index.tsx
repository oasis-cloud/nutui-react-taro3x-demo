import React, {useState} from 'react';
import {Form, Input, Tabs} from '@nutui/nutui-react-taro';

const Example = () => {
    const [tab1value, setTab1value] = useState('0')
    return <Tabs
        value={tab1value}
        onChange={(value) => {
            setTab1value(value)
        }}
    >
        <Tabs.TabPane title="Tab 1">
            <Form labelPosition="left" divider initialValues={{account: '123454'}}>
                <Form.Item
                    label="手机号"
                    name="account"
                    rules={[{required: true, message: '请输入手机号'}]}
                    required={false}
                >
                    <Input/>
                </Form.Item>
            </Form>
        </Tabs.TabPane>
        <Tabs.TabPane title="Tab 2"> Tab 2 </Tabs.TabPane>
        <Tabs.TabPane title="Tab 3"> Tab 3 </Tabs.TabPane>
    </Tabs>
}
export default Example;
