import {useState, useEffect  } from "react";
import { Link, useNavigate } from 'react-router-dom';

import { Form, Input, Button } from 'antd';
import '../Login/styles.css';

export const Login = () => {
  const [username, setUsername] = useState<string>();
  const [password, setPassword] = useState<string>();
  const navigate = useNavigate();

  const onFinish = () => {

    localStorage.setItem('username', username || '')    
    navigate('/Meting')
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return(
    <>
      <div className='page'>
        <div className='main'>
          
          <img src="./image/logo.svg" alt="V-Lab - Telemedicina e Ultrassom" />

          <div className="form-content">
          <Form
            name="basic"
            labelCol={{ span: 8 }}
            wrapperCol={{ span: 16 }}
            autoComplete="off"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Form.Item
              label="Username"
              name="Username"
              rules={[{ required: true, message: 'Please input your username!' }]}
            >
              <Input value={username} onChange={e => setUsername(e.target.value)}/>
            </Form.Item>

            <Form.Item
              label="Password"
              name="Password"
              rules={[{ required: true, message: 'Please input your password!' }]}
            >
              <Input.Password value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Item>

            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
              <Button type="primary" htmlType="submit">
                Login
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
    </>
    
  );
}