import React, { Component } from 'react';
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBInput,
  MDBIcon
} from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

class ModalFormPage extends Component {
  state = {
    modal1: false,
    modal2: false,
    modal3: false,
    modal4: false,
    modal5: false
  };

  toggle = nr => () => {
    const modalNumber = `modal${nr}`;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  render() {
    const { modal1, modal2, modal3, modal4, modal5, modal6 } = this.state;
    return (
      <MDBContainer>
        <DocsLink
          title='Modal Form'
          href='https://mdbootstrap.com/docs/react/modals/basic/'
        />

        <SectionContainer header='Simple modal login' flexCenter>
          <MDBBtn rounded onClick={this.toggle(1)}>
            Launch Modal Login Form
          </MDBBtn>
          <MDBModal isOpen={modal1} toggle={this.toggle(1)}>
            <MDBModalHeader
              className='text-center'
              titleClass='w-100 font-weight-bold'
              toggle={this.toggle(1)}
            >
              Sign in
            </MDBModalHeader>
            <MDBModalBody>
              <form className='mx-3 grey-text'>
                <MDBInput
                  label='Type your email'
                  icon='envelope'
                  group
                  type='email'
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput
                  label='Type your password'
                  icon='lock'
                  group
                  type='password'
                  validate
                />
              </form>
            </MDBModalBody>
            <MDBModalFooter className='justify-content-center'>
              <MDBBtn onClick={this.toggle(1)}>Login</MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>

        <SectionContainer header='Simple modal register' flexCenter>
          <MDBBtn rounded onClick={this.toggle(2)}>
            Launch Modal Register Form
          </MDBBtn>
          <MDBModal isOpen={modal2} toggle={this.toggle(2)}>
            <MDBModalHeader
              className='text-center'
              titleClass='w-100 font-weight-bold'
              toggle={this.toggle(2)}
            >
              Sign in
            </MDBModalHeader>
            <MDBModalBody>
              <form className='mx-3 grey-text'>
                <MDBInput
                  label='Your name'
                  icon='user'
                  group
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput
                  label='Your email'
                  icon='envelope'
                  group
                  type='email'
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput
                  label='Your password'
                  icon='lock'
                  group
                  type='password'
                  validate
                />
              </form>
            </MDBModalBody>
            <MDBModalFooter className='justify-content-center'>
              <MDBBtn color='deep-orange' onClick={this.toggle(2)}>
                SIGN UP
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>

        <SectionContainer header='Simple modal subscription' flexCenter>
          <MDBBtn rounded onClick={this.toggle(3)}>
            Launch Modal subscription Form
          </MDBBtn>
          <MDBModal isOpen={modal3} toggle={this.toggle(3)}>
            <MDBModalHeader
              className='text-center'
              titleClass='w-100 font-weight-bold'
              toggle={this.toggle(3)}
            >
              Subscribe
            </MDBModalHeader>
            <MDBModalBody>
              <form className='mx-3 grey-text'>
                <MDBInput
                  label='Your name'
                  icon='user'
                  group
                  type='text'
                  validate
                />
                <MDBInput
                  label='Your email'
                  icon='envelope'
                  group
                  type='email'
                  validate
                  error='wrong'
                  success='right'
                />
              </form>
            </MDBModalBody>
            <MDBModalFooter className='justify-content-center'>
              <MDBBtn color='indigo' onClick={this.toggle(3)}>
                Send
                <MDBIcon icon='paper-plane' className='ml-2' />
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>

        <SectionContainer header='Simple modal contact' flexCenter>
          <MDBBtn rounded onClick={this.toggle(4)}>
            Launch Modal Contact Form
          </MDBBtn>
          <MDBModal isOpen={modal4} toggle={this.toggle(4)}>
            <MDBModalHeader
              className='text-center'
              titleClass='w-100 font-weight-bold'
              toggle={this.toggle(4)}
            >
              Write to us
            </MDBModalHeader>
            <MDBModalBody>
              <form className='mx-3 grey-text'>
                <MDBInput
                  label='Your name'
                  icon='user'
                  group
                  type='text'
                  validate
                />
                <MDBInput
                  label='Your email'
                  icon='envelope'
                  group
                  type='email'
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput label='Your Subject' icon='tag' group type='text' />
                <MDBInput
                  type='textarea'
                  rows='2'
                  label='Your message'
                  icon='pencil'
                />
              </form>
            </MDBModalBody>
            <MDBModalFooter className='justify-content-center'>
              <MDBBtn color='unique' onClick={this.toggle(4)}>
                Send
                <MDBIcon icon='paper-plane' className='ml-2' />
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>

        <SectionContainer header='Modal with avatar' flexCenter>
          <MDBBtn rounded onClick={this.toggle(5)}>
            Launch Modal Login With Avatar
          </MDBBtn>
          <MDBModal
            size='sm'
            cascading
            className='modal-avatar'
            isOpen={modal5}
            toggle={this.toggle(5)}
          >
            <MDBModalHeader className='mx-auto'>
              <img
                src='https://mdbootstrap.com/img/Photos/Avatars/img%20%281%29.jpg'
                alt='avatar'
                className='rounded-circle img-responsive'
              />
            </MDBModalHeader>
            <MDBModalBody className='text-center mb-1'>
              <h5 className='mt-1 mb-2'>Maria Doe</h5>
              <form className='mx-3 grey-text'>
                <MDBInput
                  label='Enter password'
                  group
                  type='password'
                  validate
                />
              </form>
            </MDBModalBody>
            <MDBModalFooter className='justify-content-center'>
              <MDBBtn color='cyan' onClick={this.toggle(5)}>
                Login
                <MDBIcon icon='sign-in-alt' className='ml-2' />
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>

        <SectionContainer
          header='Subscription modal with orange header'
          flexCenter
        >
          <MDBBtn rounded onClick={this.toggle(6)}>
            Launch Modal Subscription
          </MDBBtn>
          <MDBModal
            className='modal-notify modal-warning white-text'
            isOpen={modal6}
            toggle={this.toggle(6)}
          >
            <MDBModalHeader
              className='text-center'
              titleClass='w-100 font-weight-bold'
              toggle={this.toggle(6)}
            >
              Subscribe
            </MDBModalHeader>
            <MDBModalBody>
              <form className='mx-3 grey-text'>
                <MDBInput
                  label='Your name'
                  icon='user'
                  iconClass='grey-text'
                  group
                  type='text'
                  validate
                  error='wrong'
                  success='right'
                />
                <MDBInput
                  label='Your email'
                  icon='envelope'
                  iconClass='grey-text'
                  group
                  type='email'
                  validate
                  error='wrong'
                  success='right'
                />
              </form>
            </MDBModalBody>
            <MDBModalFooter className='justify-content-center'>
              <MDBBtn color='warning' outline onClick={this.toggle(6)}>
                Send
                <MDBIcon icon='paper-plane' className='ml-2' />
              </MDBBtn>
            </MDBModalFooter>
          </MDBModal>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default ModalFormPage;
