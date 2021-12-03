import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Container, Content, OwnerContainer, UsersContainer, ConfigContainer } from './styles'
import Header from '../../components/Header'

import { Button, Modal } from 'antd';
import { CloseCircleFilled, AudioFilled, InfoCircleFilled, VideoCameraAddOutlined  } from '@ant-design/icons';

import Webcam from "react-webcam";
import Users from '../../components/Users';

interface Audio {
  muted: boolean;
  color: string;
}

interface webCam {
  video: boolean;
  color: string;
}

const Meeting: React.FC = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [audio, setAudio] = useState<Audio>({muted:true, color:'blue'});
  const [video, setVideo] = useState<webCam>({video:true, color:'blue'});

  const navigate = useNavigate();

  const actAudio = () => {
    setAudio(audio.muted ? {muted:false, color:'red'} : {muted:true, color:'blue'})
  }

  const actVideo = () => {
    setVideo(video.video ? {video:false, color:'red'} : {video:true, color:'blue'})
  }

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    navigate('/')
  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  return (
    <>
      <Container>
        <Header />
        <Content>
          <UsersContainer>
            <Users/>
          </UsersContainer>
          <OwnerContainer>
            <Webcam audio={audio.muted} width={350} height={250} style={{marginTop:'12px', borderRadius:'1.5rem', width:'auto'}}/>
          </OwnerContainer>
        </Content>
        <ConfigContainer>
          <Button type="primary" shape="circle" size="large" style={{background:audio.color, marginRight:'10px'}} onClick={actAudio} icon={<AudioFilled />} />
          <Button type="primary" shape="circle" size="large" style={{background:video.color, marginRight:'10px'}} onClick={actVideo} icon={<VideoCameraAddOutlined  />} />
          <Button type="primary" shape="circle" size="large" style={{background:'red', marginRight:'10px'}} onClick={showModal} icon={<CloseCircleFilled />} />
          <Modal title="Sair da chamada" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <p>Deseja sair da chamada?</p>
          </Modal>
          <Button type="primary" shape="circle" size="large" style={{background:'blue',marginRight:'10px'}} icon={<InfoCircleFilled  />} />
        </ConfigContainer>
      </Container>
    </>
  )
}

export default Meeting