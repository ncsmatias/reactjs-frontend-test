import React, { HtmlHTMLAttributes, useEffect, useState } from 'react';
import { Header } from '../../components/Header'
import Webcam from "react-webcam";
import { Modal, Button } from 'antd';

import '../Meting/styles.css'

interface Users{
  username: string,
  url: string,
}

export const Meting = () => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [user, setUser] = useState<Users[]>([]);

  function addUser(user : Users[]) {
    setUser(user);
  }

  console.log(user)

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);

  };

  const handleCancel = () => {
    setIsModalVisible(false);
  };

  const insertOn = () => {
    addUser([{username: 'Nicolas', url: 'https://www.youtube.com/watch?v=EhnXaybirdA&ab_channel=Rocketseat'}])
  }

  return(
    <>
    <div className='meeting'>
      <Header/>
      <div className='meetingContainer'>
        <div className='usersContainer'>
        </div>
        <div className='onwerContainer'>
          <Webcam audio={false} className='webcamContainerOnwer' width={475} height={600} videoConstraints/>
        </div>
      </div>
      <div className='controllerContainer'>
        <div className='controler'>
          <Button type="primary">Microfone</Button>
          <Button type="primary">Camera</Button>
          <Button type="primary" onClick={showModal}>
            Encerar
          </Button>
          
          <Button type="primary" onClick={insertOn}>Configuração</Button>
          <Button type="primary">Tela cheia</Button>
          <Modal title="Atenção" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
            <h2>Encerrar a chamada</h2>
            <p>A chamada se encerrá para todos os participantes</p>
          </Modal>
        </div>
      </div>
    </div>
    </>
  );
}