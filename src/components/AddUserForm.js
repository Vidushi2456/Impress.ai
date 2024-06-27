import React, { useState } from 'react';
import { Form, Input, Button, message } from 'antd';
import 'antd/dist/antd.css';

const AddUserForm = () => {
  const [form] = Form.useForm();
  const [error, setError] = useState('');

  const handleSubmit = (values) => {
    const { name, email } = values;
    fetch('http://example.com/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    })
      .then(response => response.json())
      .then(data => {
        message.success('User added successfully');
        form.resetFields();
      })
      .catch(error => {
        console.error('Error adding user:', error);
        message.error('Failed to add user');
      });
  };

  return (
    <Form form={form} onFinish={handleSubmit} layout="vertical">
      <Form.Item
        name="name"
        label="Name"
        rules={[{ required: true, message: 'Please input your name!' }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name="email"
        label="Email"
        rules={[
          { required: true, message: 'Please input your email!' },
          { type: 'email', message: 'Please enter a valid email!' },
        ]}
      >
        <Input />
      </Form.Item>
      {error && <p>{error}</p>}
      <Form.Item>
        <Button type="primary" htmlType="submit">
          Add User
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddUserForm;

