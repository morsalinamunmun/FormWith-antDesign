
import { Button, Form, Input, Typography, Divider, Flex } from 'antd';
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Link } from 'react-router-dom';
const onFinish = (values) => {
  console.log(values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};
const Login = () => (
  <Flex align='center' justify='center' style={{ marginLeft: '450px', marginRight: 'auto'}}>
    <div style={{backgroundColor:"white", boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)", padding: "40px", width: '300px', borderRadius: '10px'}}>
      <Typography.Title level={3}>Sign up</Typography.Title>
      <Typography.Text type="secondary" style={{fontSize:'18px'}}>to continue to Devin AI</Typography.Text>
      <Form
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
        layout='vertical'
      >
        <div>
          <Flex align="center" gap="small" style={{
            border: '1px solid #e8e8e8',
            paddingLeft: '10px',
            borderRadius: '5px',
            marginTop: '20px',
            marginBottom: '7px',
            height: '35px',
            fontWeight: '500'
          }}><FcGoogle /><p style={{color: 'rgb(100 116 139)'}}>Continue with GitHub</p></Flex>
          <Flex align='center' gap="small" style={{
            border: '1px solid #e8e8e8',
            paddingLeft: '10px',
            borderRadius: '5px',
            height: '35px',
            fontWeight: '500',
          }}><FaGithub /><p style={{color: 'rgb(100 116 139)'}}>Continue with Google</p></Flex>
        </div>
        <Divider style={{color: 'rgb(148 163 184)', borderColor: 'rgb(148 163 184)'}}>or</Divider>
        <Form.Item
          name="Email"
          label="Email"
          rules={[
            {
              type: 'email',
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Button type="primary" htmlType="submit" block style={{ fontWeight: '600'}}>
          CONTINUE
        </Button>
      </Form>
      <Flex style={{marginTop: '20px'}}>
        <Typography.Text type='secondary' style={{fontSize: '18px'}}>No Acoount?</Typography.Text>
      <Link to="/signup">
        Sign Up
      </Link>
      </Flex>
    </div>
  </Flex>
);
export default Login;