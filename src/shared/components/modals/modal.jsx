import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { visibilityModal } from '../../../store/actions'
import { Modal, Image } from 'antd';

const ModalComponent = props => {
  const dispatch = useDispatch()
  const isVisible = useSelector(state => state.isVisible.isVisible)
  const poster = useSelector(state => state.url.url)

  const handleOk = () => {
    dispatch(visibilityModal(false))
  };

  const handleCancel = () => {
    dispatch(visibilityModal(false))
  };

  return (
    <>
      <Modal visible={isVisible} onOk={handleOk} onCancel={handleCancel}>
        <Image src={poster} />
      </Modal>
    </>
  );
};

export default ModalComponent