import React from 'react';
import PropTypes from 'prop-types';

import { ModalContextCreator } from './ModalContext';
import EventForm from '../Forms/EventForm';
import DeleteForm from '../Forms/DeleteForm';
import SubmitForm from '../Forms/SubmitForm';
<<<<<<< HEAD
<<<<<<< HEAD
import SlackModal from './SlackModal';
=======
>>>>>>> feat(interests): add google calendar access (#210)
=======
import SlackModal from './SlackModal';
>>>>>>> feat(slack-modal): implement slack token callback (#217)

/*
  maps a string to a modal child, used to determine
  which modal child is to be rendered e.g:
  const MODAL_COMPONENTS = {
    'CREATE_EVENT': EventModal,
  };
 */
const MODAL_COMPONENTS = {
  CREATE_EVENT: EventForm,
  UPDATE_EVENT: EventForm,
  DELETE_EVENT: DeleteForm,
  SUBMIT_INVITE: SubmitForm,
<<<<<<< HEAD
<<<<<<< HEAD
  SLACK_MODAL: SlackModal,
=======
>>>>>>> feat(interests): add google calendar access (#210)
=======
  SLACK_MODAL: SlackModal,
>>>>>>> feat(slack-modal): implement slack token callback (#217)
};

const ModalContent = (props) => {
  const { modalProps, closeModal, activeModal } = props;

  const submitButtonLabels = {
    DELETE_EVENT: 'CONFIRM',
<<<<<<< HEAD
<<<<<<< HEAD
    SUBMIT_INVITE: 'CONFIRM',
    SLACK_MODAL: 'CONFIRM',
=======
    SUBMIT_INVITE: 'CONFIRM'
>>>>>>> feat(interests): add google calendar access (#210)
=======
    SUBMIT_INVITE: 'CONFIRM',
    SLACK_MODAL: 'CONFIRM',
>>>>>>> feat(slack-modal): implement slack token callback (#217)
  };
  const submitText = submitButtonLabels[activeModal] || 'Submit';

  const SpecificModal = MODAL_COMPONENTS[activeModal];
  return (
    <div className="modal__content">
      <header className="modal__header">
        <h3>{modalProps.modalHeadline}</h3>
      </header>
      <div className="modal__body">
        <SpecificModal dismiss={closeModal} {...modalProps} {...props} />
      </div>
      <footer className="modal__btns">
        <button
          className="modal__btn modal__btn-cancel"
          type="button"
          onClick={modalProps.cancel || closeModal}
        >Cancel</button>
        <button
          className="modal__btn modal__btn-submit"
          form={modalProps.formId}
          type="submit"
        >{submitText}</button>
      </footer>
    </div>
  );
};

const ModalContainer = (props) => {
  const {
    activeModal, closeModal,
  } = props;

  if (!activeModal) {
    return null;
  }
  return (
    <div
      className={`modal modal__${activeModal}`}
      onClick={(e) => {
        if (e.target.classList[0] !== 'modal') {
          return;
        }
        closeModal();
      }}
    >
      <ModalContent {...props}/>
    </div>
  );
};

ModalContainer.defaultProps = { activeModal: null };

ModalContainer.propTypes = {
  closeModal: PropTypes.func.isRequired,
  activeModal: PropTypes.string,
  modalProps: PropTypes.shape({ modalHeadline: PropTypes.string.isRequired }).isRequired,
};

export default ({ imageUploaded }) => (
    <ModalContextCreator.Consumer>
      {
        props => <ModalContainer imageUploaded={imageUploaded} {...props} />
      }
    </ModalContextCreator.Consumer>
);
