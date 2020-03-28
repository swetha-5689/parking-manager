import React, { Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBFormInline,
  MDBDropdown,
  MDBDropdownToggle,
  MDBDropdownMenu,
  MDBDropdownItem,
  MDBContainer,
  MDBIcon
} from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

class NavbarPage extends Component {
  state = {
    collapseID: ''
  };

  toggleCollapse = collapseID => () =>
    this.setState(prevState => ({
      collapseID: prevState.collapseID !== collapseID ? collapseID : ''
    }));

  render() {
    const { isOpen, collapseID } = this.state;
    return (
      <MDBContainer>
        <DocsLink
          title='Navbar'
          href='https://mdbootstrap.com/docs/react/navigation/navbar/'
        />

        <SectionContainer header='Basic example'>
          <MDBNavbar color='indigo' dark expand='md'>
            <MDBNavbarBrand>
              <strong className='white-text'>Navbar</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler onClick={this.toggleCollapse} />
            <MDBCollapse id='navbarCollapse3' isOpen={isOpen} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBLink to='#!'>Home</MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink to='#!'>Features</MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink to='#!'>Pricing</MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <span className='mr-2'>Dropdown</span>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu>
                      <MDBDropdownItem href='#!'>Action</MDBDropdownItem>
                      <MDBDropdownItem href='#!'>
                        Another Action
                      </MDBDropdownItem>
                      <MDBDropdownItem href='#!'>
                        Something else here
                      </MDBDropdownItem>
                      <MDBDropdownItem href='#!'>
                        Something else here
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBFormInline waves>
                    <div className='md-form my-0'>
                      <input
                        className='form-control mr-sm-2'
                        type='text'
                        placeholder='Search'
                        aria-label='Search'
                      />
                    </div>
                  </MDBFormInline>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          <MDBNavbar
            color='unique-color-dark'
            style={{ marginTop: '20px' }}
            dark
          >
            <MDBNavbarBrand href='#'>
              <img
                src='https://mdbootstrap.com/img/logo/mdb-transparent.png'
                height='30'
                alt=''
              />
            </MDBNavbarBrand>
          </MDBNavbar>
        </SectionContainer>

        <SectionContainer header='Color schemes'>
          <MDBNavbar
            color='bg-danger'
            style={{ marginTop: '20px' }}
            dark
            expand='md'
            scrolling
          >
            <MDBContainer>
              <MDBNavbarBrand>
                <strong className='white-text'>MDB</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse('navbarCollapse')}
              />
              <MDBCollapse id='navbarCollapse' isOpen={collapseID} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBLink to='#!'>Home</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Link</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Profile</MDBLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBFormInline waves>
                      <div className='md-form my-0'>
                        <input
                          className='form-control mr-sm-2'
                          type='text'
                          placeholder='Search'
                          aria-label='Search'
                        />
                      </div>
                    </MDBFormInline>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          <MDBNavbar
            color='default-color'
            style={{ marginTop: '20px' }}
            dark
            expand='md'
            scrolling
          >
            <MDBContainer>
              <MDBNavbarBrand>
                <strong className='white-text'>MDB</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse('navbarCollapse1')}
              />
              <MDBCollapse id='navbarCollapse1' isOpen={collapseID} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBLink to='#!'>Home</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Link</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Profile</MDBLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBFormInline waves>
                      <div className='md-form my-0'>
                        <input
                          className='form-control mr-sm-2'
                          type='text'
                          placeholder='Search'
                          aria-label='Search'
                        />
                      </div>
                    </MDBFormInline>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          <MDBNavbar
            color='amber lighten-4'
            style={{ marginTop: '20px' }}
            expand='md'
            light
          >
            <MDBContainer>
              <MDBNavbarBrand>
                <strong>MDB</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse('navbarCollapse2')}
              />
              <MDBCollapse id='navbarCollapse2' isOpen={collapseID} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBLink to='#!'>Home</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Link</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Profile</MDBLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBFormInline waves>
                      <div className='md-form my-0'>
                        <input
                          className='form-control mr-sm-2'
                          type='text'
                          placeholder='Search'
                          aria-label='Search'
                        />
                      </div>
                    </MDBFormInline>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
          <MDBNavbar
            color='secondary-color'
            style={{ marginTop: '20px' }}
            dark
            expand='md'
          >
            <MDBContainer>
              <MDBNavbarBrand>
                <strong className='white-text'>MDB</strong>
              </MDBNavbarBrand>
              <MDBNavbarToggler
                onClick={this.toggleCollapse('navbarCollapse3')}
              />
              <MDBCollapse id='navbarCollapse3' isOpen={collapseID} navbar>
                <MDBNavbarNav left>
                  <MDBNavItem active>
                    <MDBLink to='#!'>Home</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Link</MDBLink>
                  </MDBNavItem>
                  <MDBNavItem>
                    <MDBLink to='#!'>Profile</MDBLink>
                  </MDBNavItem>
                </MDBNavbarNav>
                <MDBNavbarNav right>
                  <MDBNavItem>
                    <MDBFormInline waves>
                      <div className='md-form my-0'>
                        <input
                          className='form-control mr-sm-2'
                          type='text'
                          placeholder='Search'
                          aria-label='Search'
                        />
                      </div>
                    </MDBFormInline>
                  </MDBNavItem>
                </MDBNavbarNav>
              </MDBCollapse>
            </MDBContainer>
          </MDBNavbar>
        </SectionContainer>

        <SectionContainer header='With dropdown'>
          <MDBNavbar
            color='indigo'
            dark
            expand='md'
            style={{ marginTop: '20px' }}
          >
            <MDBNavbarBrand>
              <strong className='white-text'>MDBNavbar</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse('navbarCollapse3')}
            />
            <MDBCollapse id='navbarCollapse3' isOpen={collapseID} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBLink to='#!'>Home</MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink to='#!'>Features</MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink to='#!'>Pricing</MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className='d-none d-md-inline'>MDBDropdown</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu right>
                      <MDBDropdownItem href='#!'>Action</MDBDropdownItem>
                      <MDBDropdownItem href='#!'>
                        Another Action
                      </MDBDropdownItem>
                      <MDBDropdownItem href='#!'>
                        Something else here
                      </MDBDropdownItem>
                      <MDBDropdownItem href='#!'>
                        Something else here
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBFormInline waves>
                    <div className='md-form my-0'>
                      <input
                        className='form-control mr-sm-2'
                        type='text'
                        placeholder='Search'
                        aria-label='Search'
                      />
                    </div>
                  </MDBFormInline>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          <MDBNavbar
            color='default-color'
            dark
            expand='md'
            style={{ marginTop: '20px' }}
          >
            <MDBNavbarBrand>
              <strong className='white-text'>MDBNavbar</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse('navbarCollapse3')}
            />
            <MDBCollapse id='navbarCollapse3' isOpen={collapseID} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBLink to='#!'>Home</MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink to='#!'>Features</MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink to='#!'>Pricing</MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className='d-none d-md-inline'>MDBDropdown</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className='dropdown-default' right>
                      <MDBDropdownItem href='#!'>Action</MDBDropdownItem>
                      <MDBDropdownItem href='#!'>
                        Another Action
                      </MDBDropdownItem>
                      <MDBDropdownItem href='#!'>
                        Something else here
                      </MDBDropdownItem>
                      <MDBDropdownItem href='#!'>
                        Something else here
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBLink className='waves-effect waves-light' to='#!'>
                    <MDBIcon brand icon='twitter' />
                  </MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink className='waves-effect waves-light' to='#!'>
                    <MDBIcon brand icon='google-plus' />
                  </MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <MDBIcon icon='user' />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className='dropdown-default' right>
                      <MDBDropdownItem href='#!'>Action</MDBDropdownItem>
                      <MDBDropdownItem href='#!'>
                        Another Action
                      </MDBDropdownItem>
                      <MDBDropdownItem href='#!'>
                        Something else here
                      </MDBDropdownItem>
                      <MDBDropdownItem href='#!'>
                        Something else here
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </SectionContainer>

        <SectionContainer header='Supportet content'>
          <MDBNavbar
            color='info-color'
            dark
            expand='md'
            style={{ marginTop: '20px' }}
          >
            <MDBNavbarBrand>
              <strong className='white-text'>MDBNavbar</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse('navbarCollapse3')}
            />
            <MDBCollapse id='navbarCollapse3' isOpen={collapseID} navbar>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBLink className='waves-effect waves-light' to='#!'>
                    <MDBIcon icon='envelope' className='mr-1' />
                    Contact
                  </MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink className='waves-effect waves-light' to='#!'>
                    <MDBIcon icon='cog' className='mr-1' />
                    Settings
                  </MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <MDBIcon icon='user' className='mr-1' />
                      Profile
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className='dropdown-default' right>
                      <MDBDropdownItem href='#!'>My account</MDBDropdownItem>
                      <MDBDropdownItem href='#!'>Log out</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
          <MDBNavbar
            color='secondary-color'
            dark
            expand='md'
            style={{ marginTop: '20px' }}
          >
            <MDBNavbarBrand>
              <strong className='white-text'>MDBNavbar</strong>
            </MDBNavbarBrand>
            <MDBNavbarToggler
              onClick={this.toggleCollapse('navbarCollapse3')}
            />
            <MDBCollapse id='navbarCollapse3' isOpen={collapseID} navbar>
              <MDBNavbarNav left>
                <MDBNavItem active>
                  <MDBLink to='#!'>Home</MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink to='#!'>Features</MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBLink to='#!'>Pricing</MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle nav caret>
                      <div className='d-none d-md-inline'>MDBDropdown</div>
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className='dropdown-default' right>
                      <MDBDropdownItem href='#!'>Action</MDBDropdownItem>
                      <MDBDropdownItem href='#!'>
                        Another Action
                      </MDBDropdownItem>
                      <MDBDropdownItem href='#!'>
                        Something else here
                      </MDBDropdownItem>
                      <MDBDropdownItem href='#!'>
                        Something else here
                      </MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
              <MDBNavbarNav right>
                <MDBNavItem>
                  <MDBLink
                    className='waves-effect waves-light d-flex align-items-center'
                    to='#!'
                  >
                    1<MDBIcon icon='envelope' className='ml-1' />
                  </MDBLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBDropdown>
                    <MDBDropdownToggle className='dopdown-toggle' nav>
                      <img
                        src='https://mdbootstrap.com/img/Photos/Avatars/avatar-2.jpg'
                        className='rounded-circle z-depth-0'
                        style={{ height: '35px', padding: 0 }}
                        alt=''
                      />
                    </MDBDropdownToggle>
                    <MDBDropdownMenu className='dropdown-default' right>
                      <MDBDropdownItem href='#!'>My account</MDBDropdownItem>
                      <MDBDropdownItem href='#!'>Log out</MDBDropdownItem>
                    </MDBDropdownMenu>
                  </MDBDropdown>
                </MDBNavItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBNavbar>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default NavbarPage;
