import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Form, Input, Button, Checkbox } from 'antd';
import { Typography } from 'antd';

export default class LoginPage extends PureComponent {
  static propTypes = {
    onLoginSuccess: PropTypes.func,
    onLoginFail: PropTypes.func
  }

  render() {
    const { Title } = Typography;

    return (
      <div>
        <Title>Login</Title>

        <Form
          name="basic"
          size='large'
          initialValues={{ remember: false }}
          onFinish={this.props.onLoginSuccess}
          onFinishFailed={this.props.onLoginFail}>

          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username' }]}>

            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password' }]}>

            <Input.Password />
          </Form.Item>

          <Form.Item name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div>
    )
  }
}
