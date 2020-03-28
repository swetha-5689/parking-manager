import React, { Component } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBInput, MDBBtn } from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

class ValidationPage extends Component {
  state = {
    fname: 'Mark',
    lname: 'Otto',
    email: '',
    city: '',
    state: '',
    zip: ''
  };

  submitHandler = event => {
    event.preventDefault();
    event.target.className += ' was-validated';
  };

  changeHandler = event => {
    this.setState({ ...this.state, [event.target.name]: event.target.value });
  };

  render() {
    const { fname, lname, email, city, state, zip } = this.state

    return (
      <MDBContainer>
        <DocsLink
          title='Form Validation'
          href='https://mdbootstrap.com/docs/react/forms/validation/'
        />

        <SectionContainer header='Validations'>
          <form
            className='needs-validation'
            onSubmit={this.submitHandler}
            noValidate
          >
            <MDBRow>
              <MDBCol md='4' className='mb-3'>
                <label
                  htmlFor='defaultFormRegisterNameEx'
                  className='grey-text'
                >
                  First name
                </label>
                <input
                  value={fname}
                  name='fname'
                  onChange={this.changeHandler}
                  type='text'
                  id='defaultFormRegisterNameEx'
                  className='form-control'
                  placeholder='First name'
                  required
                />
                <div className='valid-feedback'>Looks good!</div>
              </MDBCol>
              <MDBCol md='4' className='mb-3'>
                <label
                  htmlFor='defaultFormRegisterEmailEx2'
                  className='grey-text'
                >
                  Last name
                </label>
                <input
                  value={lname}
                  name='lname'
                  onChange={this.changeHandler}
                  type='text'
                  id='defaultFormRegisterEmailEx2'
                  className='form-control'
                  placeholder='Last name'
                  required
                />
                <div className='valid-feedback'>Looks good!</div>
              </MDBCol>
              <MDBCol md='4' className='mb-3'>
                <label
                  htmlFor='defaultFormRegisterConfirmEx3'
                  className='grey-text'
                >
                  Email
                </label>
                <input
                  value={email}
                  onChange={this.changeHandler}
                  type='email'
                  id='defaultFormRegisterConfirmEx3'
                  className='form-control'
                  name='email'
                  placeholder='Your Email address'
                />
                <small id='emailHelp' className='form-text text-muted'>
                  We'll never share your email with anyone else.
                </small>
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md='4' className='mb-3'>
                <label
                  htmlFor='defaultFormRegisterPasswordEx4'
                  className='grey-text'
                >
                  City
                </label>
                <input
                  value={city}
                  onChange={this.changeHandler}
                  type='text'
                  id='defaultFormRegisterPasswordEx4'
                  className='form-control'
                  name='city'
                  placeholder='City'
                  required
                />
                <div className='invalid-feedback'>
                  Please provide a valid city.
                </div>
                <div className='valid-feedback'>Looks good!</div>
              </MDBCol>
              <MDBCol md='4' className='mb-3'>
                <label
                  htmlFor='defaultFormRegisterPasswordEx4'
                  className='grey-text'
                >
                  State
                </label>
                <input
                  value={state}
                  onChange={this.changeHandler}
                  type='text'
                  id='defaultFormRegisterPasswordEx4'
                  className='form-control'
                  name='state'
                  placeholder='State'
                  required
                />
                <div className='invalid-feedback'>
                  Please provide a valid state.
                </div>
                <div className='valid-feedback'>Looks good!</div>
              </MDBCol>
              <MDBCol md='4' className='mb-3'>
                <label
                  htmlFor='defaultFormRegisterPasswordEx4'
                  className='grey-text'
                >
                  Zip
                </label>
                <input
                  value={zip}
                  onChange={this.changeHandler}
                  type='text'
                  id='defaultFormRegisterPasswordEx4'
                  className='form-control'
                  name='zip'
                  placeholder='Zip'
                  required
                />
                <div className='invalid-feedback'>
                  Please provide a valid zip.
                </div>
                <div className='valid-feedback'>Looks good!</div>
              </MDBCol>
            </MDBRow>
            <MDBCol md='4' className='mb-3'>
              <div className='custom-control custom-checkbox pl-3'>
                <input
                  className='custom-control-input'
                  type='checkbox'
                  value=''
                  id='invalidCheck'
                  required
                />
                <label className='custom-control-label' htmlFor='invalidCheck'>
                  Agree to terms and conditions
                </label>
                <div className='invalid-feedback'>
                  You must agree before submitting.
                </div>
              </div>
            </MDBCol>
            <MDBBtn color='unique' type='submit'>
              Submit Form
            </MDBBtn>
          </form>
        </SectionContainer>

        <SectionContainer header='Browser defualt validation'>
          <form>
            <MDBRow>
              <MDBCol md='4'>
                <MDBInput
                  value={fname}
                  name='fname'
                  onChange={this.changeHandler}
                  type='text'
                  id='browserFormRegisterNameEx'
                  label='First name'
                  required
                />
              </MDBCol>
              <MDBCol md='4'>
                <MDBInput
                  value={lname}
                  name='lname'
                  onChange={this.changeHandler}
                  type='text'
                  id='browserFormRegisterEmailEx2'
                  label='Last name'
                  required
                />
              </MDBCol>
              <MDBCol md='4'>
                <MDBInput
                  value={email}
                  onChange={this.changeHandler}
                  type='email'
                  id='browserFormRegisterConfirmEx3'
                  name='email'
                  label='Your Email address'
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md='4'>
                <MDBInput
                  value={city}
                  onChange={this.changeHandler}
                  type='text'
                  id='browserFormRegisterPasswordEx4'
                  name='city'
                  label='City'
                  required
                />
              </MDBCol>
              <MDBCol md='4'>
                <MDBInput
                  value={state}
                  onChange={this.changeHandler}
                  type='text'
                  id='browserFormRegisterPasswordEx4'
                  name='state'
                  label='State'
                  required
                />
              </MDBCol>
              <MDBCol md='4'>
                <MDBInput
                  value={zip}
                  onChange={this.changeHandler}
                  type='text'
                  id='browserFormRegisterPasswordEx4'
                  name='zip'
                  label='Zip'
                  required
                />
              </MDBCol>
            </MDBRow>
            <MDBRow>
              <MDBCol md='4' className='mb-3'>
                <div className='custom-control custom-checkbox pl-3'>
                  <input
                    className='custom-control-input'
                    type='checkbox'
                    value=''
                    id='browserInvalidCheck'
                    required
                  />
                  <label
                    className='custom-control-label'
                    htmlFor='browserInvalidCheck'
                  >
                    Agree to terms and conditions
                  </label>
                  <div className='invalid-feedback'>
                    You must agree before submitting.
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
            <MDBBtn color='primary' type='submit'>
              Submit Form
            </MDBBtn>
          </form>
        </SectionContainer>

        <SectionContainer header='Supported elements'>
          <MDBCol md='4'>
            <form className='was-validated' noValidate>
              <div className='custom-control custom-checkbox mb-3'>
                <input
                  type='checkbox'
                  className='custom-control-input'
                  id='customControlValidation1'
                  required
                />
                <label
                  className='custom-control-label'
                  htmlFor='customControlValidation1'
                >
                  Check this custom checkbox
                </label>
                <div className='invalid-feedback'>
                  Example invalid feedback text
                </div>
              </div>

              <div className='custom-control custom-radio'>
                <input
                  type='radio'
                  className='custom-control-input'
                  id='customControlValidation2'
                  name='radio-stacked'
                  required
                />
                <label
                  className='custom-control-label'
                  htmlFor='customControlValidation2'
                >
                  Toggle this custom radio
                </label>
              </div>
              <div className='custom-control custom-radio mb-3'>
                <input
                  type='radio'
                  className='custom-control-input'
                  id='customControlValidation3'
                  name='radio-stacked'
                  required
                />
                <label
                  className='custom-control-label'
                  htmlFor='customControlValidation3'
                >
                  Or toggle this other custom radio
                </label>
                <div className='invalid-feedback'>
                  More example invalid feedback text
                </div>
              </div>

              <div className='form-group'>
                <select className='custom-select bMDBRowser-default' required>
                  <option value=''>Open this select menu</option>
                  <option value='1'>One</option>
                  <option value='2'>Two</option>
                  <option value='3'>Three</option>
                </select>
                <div className='invalid-feedback'>
                  Example invalid custom select feedback
                </div>
              </div>

              <div className='custom-file'>
                <input
                  type='file'
                  className='custom-file-input'
                  id='validatedCustomFile'
                  required
                />
                <label
                  className='custom-file-label'
                  htmlFor='validatedCustomFile'
                >
                  Choose file...
                </label>
                <div className='invalid-feedback'>
                  Example invalid custom file feedback
                </div>
              </div>
            </form>
          </MDBCol>
        </SectionContainer>

        <SectionContainer header='Tooltips'>
          <MDBCol md=''>
            <form
              className='needs-validation'
              onSubmit={this.submitHandler}
              noValidate
            >
              <MDBRow>
                <div className='col-md-4 mb-3'>
                  <label
                    htmlFor='defaultFormRegisterNameEx'
                    className='grey-text'
                  >
                    First name
                  </label>
                  <input
                    value={fname}
                    name='fname'
                    onChange={this.changeHandler}
                    type='text'
                    id='defaultFormRegisterNameEx'
                    className='form-control'
                    placeholder='First name'
                    required
                  />
                  <div style={{ top: 'auto' }} className='valid-tooltip'>
                    Looks good!
                  </div>
                </div>
                <div className='col-md-4 mb-3'>
                  <label
                    htmlFor='defaultFormRegisterEmailEx2'
                    className='grey-text'
                  >
                    Last name
                  </label>
                  <input
                    value={lname}
                    name='lname'
                    onChange={this.changeHandler}
                    type='text'
                    id='defaultFormRegisterEmailEx2'
                    className='form-control'
                    placeholder='Last name'
                    required
                  />
                  <div style={{ top: 'auto' }} className='valid-tooltip'>
                    Looks good!
                  </div>
                </div>
                <div className='col-md-4 mb-3'>
                  <label
                    htmlFor='defaultFormRegisterConfirmEx3'
                    className='grey-text'
                  >
                    Email
                  </label>
                  <input
                    value={email}
                    onChange={this.changeHandler}
                    type='email'
                    id='defaultFormRegisterConfirmEx3'
                    className='form-control'
                    name='email'
                    placeholder='Your Email address'
                  />
                  <small id='emailHelp' className='form-text text-muted'>
                    We'll never share your email with anyone else.
                  </small>
                </div>
              </MDBRow>
              <MDBRow>
                <div className='col-md-4 mb-3'>
                  <label
                    htmlFor='defaultFormRegisterPasswordEx4'
                    className='grey-text'
                  >
                    City
                  </label>
                  <input
                    value={city}
                    onChange={this.changeHandler}
                    type='text'
                    id='defaultFormRegisterPasswordEx4'
                    className='form-control'
                    name='city'
                    placeholder='City'
                    required
                  />
                  <div style={{ top: 'auto' }} className='invalid-tooltip'>
                    Please provide a valid city.
                  </div>
                  <div style={{ top: 'auto' }} className='valid-tooltip'>
                    Looks good!
                  </div>
                </div>
                <div className='col-md-4 mb-3'>
                  <label
                    htmlFor='defaultFormRegisterPasswordEx4'
                    className='grey-text'
                  >
                    State
                  </label>
                  <input
                    value={state}
                    onChange={this.changeHandler}
                    type='text'
                    id='defaultFormRegisterPasswordEx4'
                    className='form-control'
                    name='state'
                    placeholder='State'
                    required
                  />
                  <div style={{ top: 'auto' }} className='invalid-tooltip'>
                    Please provide a valid state.
                  </div>
                  <div style={{ top: 'auto' }} className='valid-tooltip'>
                    Looks good!
                  </div>
                </div>
                <div className='col-md-4 mb-3'>
                  <label
                    htmlFor='defaultFormRegisterPasswordEx4'
                    className='grey-text'
                  >
                    Zip
                  </label>
                  <input
                    value={zip}
                    onChange={this.changeHandler}
                    type='text'
                    id='defaultFormRegisterPasswordEx4'
                    className='form-control'
                    name='zip'
                    placeholder='Zip'
                    required
                  />
                  <div style={{ top: 'auto' }} className='invalid-tooltip'>
                    Please provide a valid zip.
                  </div>
                  <div style={{ top: 'auto' }} className='valid-tooltip'>
                    Looks good!
                  </div>
                </div>
              </MDBRow>
              <button className='btn btn-unique' type='submit'>
                Submit Form
              </button>
            </form>
          </MDBCol>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default ValidationPage;
