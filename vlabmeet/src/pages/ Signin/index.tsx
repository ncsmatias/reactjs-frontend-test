import { useNavigate } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { useState } from 'react';
import { Container, Content } from "./styles";

interface User {
  username: string;
  password: string;
}

const Signin: React.FC = () => {
  const [user, setUser] = useState<User>()
  const navigate = useNavigate();

  const onFinish = (values: User) => {
    setUser(values)
    localStorage.setItem('user', JSON.stringify(user)) 
    navigate('/Meting')
  };

 

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Container>
      <Content>
      <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
      >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
      </Content>
    </Container>
  )
}

export default Signin;