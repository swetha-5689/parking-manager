import React from 'react';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBListGroup,
  MDBListGroupItem,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
  MDBCol,
  MDBRow,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBCardGroup,
  MDBContainer
} from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';

const PanelPage = () => {
  const panelStyle = { width: '22rem' };
  return (
    <MDBContainer>
      <DocsLink
        title='Panels'
        href='https://mdbootstrap.com/docs/react/components/panels/'
      />

      <SectionContainer header='Basic example'>
        <MDBCard className='card-body' style={panelStyle}>
          <MDBCardTitle>Panel Title</MDBCardTitle>
          <MDBCardText>
            Some quick example text to build on the panel title and make up the
            bulk of the panel's content.
          </MDBCardText>
          <div className='flex-row'>
            <a href='#!'>MDBCard link</a>
            <a href='#!' style={{ marginLeft: '1.25rem' }}>
              Another link
            </a>
          </div>
        </MDBCard>
      </SectionContainer>

      <SectionContainer title='Content types' header='Body'>
        <MDBCard>
          <MDBCardBody>This is some text within a panel body.</MDBCardBody>
        </MDBCard>
      </SectionContainer>

      <SectionContainer header='Titles, text and links'>
        <MDBCard style={{ width: '22rem' }}>
          <MDBCardBody>
            <MDBCardTitle>Panel title</MDBCardTitle>
            <MDBCardTitle tag='h6' sub className='mb-2 text-muted'>
              Panel title
            </MDBCardTitle>
            <MDBCardText>
              Some quick example text to build on the panel title and make up
              the bulk of the panel's content.{' '}
            </MDBCardText>
            <a href='#!' className='card-link'>
              Panel link
            </a>
            <a href='#!' className='card-link'>
              Another link
            </a>
          </MDBCardBody>
        </MDBCard>
      </SectionContainer>

      <SectionContainer header='List groups'>
        <MDBCard style={{ width: '22rem' }}>
          <MDBListGroup>
            <MDBListGroupItem>Cras justo odio</MDBListGroupItem>
            <MDBListGroupItem>Dapibus ac facilisis in</MDBListGroupItem>
            <MDBListGroupItem>Vestibulum at eros</MDBListGroupItem>
          </MDBListGroup>
        </MDBCard>
      </SectionContainer>

      <SectionContainer
        header='Header and footer'
        className='d-flex justify-content-center'
      >
        <MDBCard
          style={{ width: '22rem', marginBottom: '2rem' }}
          className='mr-4'
        >
          <MDBCardHeader color='deep-orange lighten-1'>Featured</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional
              content.
            </MDBCardText>
            <MDBBtn color='deep-orange'>go somewhere</MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard style={{ width: '22rem' }} className='text-center mr-4'>
          <MDBCardHeader color='success-color'>Featured</MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional
              content.
            </MDBCardText>
            <MDBBtn color='success' size='sm'>
              go somewhere
            </MDBBtn>
          </MDBCardBody>
          <MDBCardFooter color='success-color'>2 days ago</MDBCardFooter>
        </MDBCard>

        <MDBCard style={{ width: '22rem', marginBottom: '2rem' }}>
          <MDBCardHeader color='primary-color' tag='h3'>
            Featured
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional
              content.
            </MDBCardText>
            <MDBBtn color='primary'>go somewhere</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </SectionContainer>

      <SectionContainer title='Sizing' header='Using grid components'>
        <MDBRow className='mb-4'>
          <MDBCol sm='4'>
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>Special title treatment</MDBCardTitle>
                <MDBCardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </MDBCardText>
                <MDBBtn color='primary'>go somewhere</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>

          <MDBCol sm='8'>
            <MDBCard>
              <MDBCardBody>
                <MDBCardTitle>Special title treatment</MDBCardTitle>
                <MDBCardText>
                  With supporting text below as a natural lead-in to additional
                  content.
                </MDBCardText>
                <MDBBtn color='primary'>go somewhere</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </SectionContainer>

      <SectionContainer header='Using utilities'>
        <MDBCard className='w-75 mb-4'>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional
              content.
            </MDBCardText>
            <MDBBtn color='primary'>go somewhere</MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className='w-50'>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional
              content.
            </MDBCardText>
            <MDBBtn color='primary'>go somewhere</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </SectionContainer>

      <SectionContainer header='Using custom CSS'>
        <MDBCard style={{ width: '20rem' }}>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional
              content.
            </MDBCardText>
            <MDBBtn color='primary'>go somewhere</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </SectionContainer>

      <SectionContainer
        title='Text alignment'
        className='d-flex justify-content-center'
      >
        <MDBCard className='text-left mr-4' style={{ width: '20rem' }}>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional
              content.
            </MDBCardText>
            <MDBBtn color='primary'>go somewhere</MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className='text-center mr-4' style={{ width: '20rem' }}>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional
              content.
            </MDBCardText>
            <MDBBtn color='primary'>go somewhere</MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard className='text-right' style={{ width: '20rem' }}>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional
              content.
            </MDBCardText>
            <MDBBtn color='primary'>go somewhere</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </SectionContainer>

      <SectionContainer title='Navigation'>
        <MDBCard className='text-center'>
          <MDBCardHeader>
            <MDBNav header>
              <MDBNavItem>
                <MDBNavLink active to='#'>
                  Active
                </MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink to='#'>Link</MDBNavLink>
              </MDBNavItem>
              <MDBNavItem>
                <MDBNavLink disabled to='#'>
                  Disabled
                </MDBNavLink>
              </MDBNavItem>
            </MDBNav>
          </MDBCardHeader>
          <MDBCardBody>
            <MDBCardTitle>Special title treatment</MDBCardTitle>
            <MDBCardText>
              With supporting text below as a natural lead-in to additional
              content.
            </MDBCardText>
            <MDBBtn color='primary'>go somewhere</MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </SectionContainer>

      <SectionContainer title='Styles' header='Background and color'>
        <MDBRow>
          <MDBCol md='6' className='mb-4'>
            <MDBCard color='indigo' text='white' className='text-center'>
              <MDBCardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </MDBCardBody>
            </MDBCard>

            <MDBCard
              color='pink lighten-2'
              text='white'
              className='text-center'
            >
              <MDBCardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </MDBCardBody>
            </MDBCard>

            <MDBCard color='info-color' text='white' className='text-center'>
              <MDBCardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
          <MDBCol md='6'>
            <MDBCard color='red lighten-1' text='white' className='text-center'>
              <MDBCardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </MDBCardBody>
            </MDBCard>

            <MDBCard color='success-color' text='white' className='text-center'>
              <MDBCardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </MDBCardBody>
            </MDBCard>

            <MDBCard
              color='mdb-color lighten-2'
              text='white'
              className='text-center'
            >
              <MDBCardBody>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </SectionContainer>

      <SectionContainer header='Border'>
        <MDBRow center>
          <MDBCard
            border='primary'
            className='m-3'
            style={{ maxWidth: '18rem' }}
          >
            <MDBCardHeader>Header</MDBCardHeader>
            <MDBCardBody className='text-primary'>
              <MDBCardTitle tag='h5'>Primary card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard
            border='secondary'
            className='m-3'
            style={{ maxWidth: '18rem' }}
          >
            <MDBCardHeader>Header</MDBCardHeader>
            <MDBCardBody className='text-secondary'>
              <MDBCardTitle tag='h5'>Secondary card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard
            border='success'
            className='m-3'
            style={{ maxWidth: '18rem' }}
          >
            <MDBCardHeader>Header</MDBCardHeader>
            <MDBCardBody className='text-success'>
              <MDBCardTitle tag='h5'>Success card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard
            border='danger'
            className='m-3'
            style={{ maxWidth: '18rem' }}
          >
            <MDBCardHeader>Header</MDBCardHeader>
            <MDBCardBody className='text-danger'>
              <MDBCardTitle tag='h5'>Danger card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard
            border='warning'
            className='m-3'
            style={{ maxWidth: '18rem' }}
          >
            <MDBCardHeader>Header</MDBCardHeader>
            <MDBCardBody className='text-warning'>
              <MDBCardTitle tag='h5'>Warning card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard border='info' className='m-3' style={{ maxWidth: '18rem' }}>
            <MDBCardHeader>Header</MDBCardHeader>
            <MDBCardBody className='text-info'>
              <MDBCardTitle tag='h5'>Info card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard border='light' className='m-3' style={{ maxWidth: '18rem' }}>
            <MDBCardHeader>Header</MDBCardHeader>
            <MDBCardBody>
              <MDBCardTitle tag='h5'>Light card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard
            border='success'
            className='m-3'
            style={{ maxWidth: '18rem' }}
          >
            <MDBCardHeader transparent border='success'>
              Header
            </MDBCardHeader>
            <MDBCardBody className='text-success'>
              <MDBCardTitle tag='h5'>Success card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter transparent border='success'>
              Footer
            </MDBCardFooter>
          </MDBCard>

          <MDBCard border='dark' className='m-3' style={{ maxWidth: '18rem' }}>
            <MDBCardHeader>Header</MDBCardHeader>
            <MDBCardBody className='text-dark'>
              <MDBCardTitle tag='h5'>Dark card title</MDBCardTitle>
              <MDBCardText>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBRow>
      </SectionContainer>

      <SectionContainer title='Layout' header='Groups'>
        <MDBCardGroup>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle tag='h5'>Panel title</MDBCardTitle>
              <MDBCardText>
                This is a wider panel with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
              <MDBCardText small muted>
                Last updated 3 mins ago
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle tag='h5'>Panel title</MDBCardTitle>
              <MDBCardText>
                This panel has supporting text below as a natural lead-in to
                additional content.
              </MDBCardText>
              <MDBCardText small muted>
                Last updated 3 mins ago
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle tag='h5'>Panel title</MDBCardTitle>
              <MDBCardText>
                This is a wider panel with supporting text below as a natural
                lead-in to additional content. This panel has even longer
                content than the first to show that equal height action.
              </MDBCardText>
              <MDBCardText small muted>
                Last updated 3 mins ago
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>

        <MDBCardGroup className='mt-4'>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle tag='h5'>Panel title</MDBCardTitle>
              <MDBCardText>
                This is a wider panel with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter small muted>
              Last updated 3 mins ago
            </MDBCardFooter>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle tag='h5'>Panel title</MDBCardTitle>
              <MDBCardText>
                This panel has supporting text below as a natural lead-in to
                additional content.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter small muted>
              Last updated 3 mins ago
            </MDBCardFooter>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle tag='h5'>Panel title</MDBCardTitle>
              <MDBCardText>
                This is a wider panel with supporting text below as a natural
                lead-in to additional content. This panel has even longer
                content than the first to show that equal height action.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter small muted>
              Last updated 3 mins ago
            </MDBCardFooter>
          </MDBCard>
        </MDBCardGroup>
      </SectionContainer>

      <SectionContainer header='Decks'>
        <MDBCardGroup deck>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle tag='h5'>Panel title</MDBCardTitle>
              <MDBCardText>
                This is a wider panel with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
              <MDBCardText small muted>
                Last updated 3 mins ago
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle tag='h5'>Panel title</MDBCardTitle>
              <MDBCardText>
                This panel has supporting text below as a natural lead-in to
                additional content.
              </MDBCardText>
              <MDBCardText small muted>
                Last updated 3 mins ago
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle tag='h5'>Panel title</MDBCardTitle>
              <MDBCardText>
                This is a wider panel with supporting text below as a natural
                lead-in to additional content. This panel has even longer
                content than the first to show that equal height action.
              </MDBCardText>
              <MDBCardText small muted>
                Last updated 3 mins ago
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>

        <MDBCardGroup deck className='mt-4'>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle tag='h5'>Panel title</MDBCardTitle>
              <MDBCardText>
                This is a wider panel with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter small muted>
              Last updated 3 mins ago
            </MDBCardFooter>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle tag='h5'>Panel title</MDBCardTitle>
              <MDBCardText>
                This panel has supporting text below as a natural lead-in to
                additional content.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter small muted>
              Last updated 3 mins ago
            </MDBCardFooter>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle tag='h5'>Panel title</MDBCardTitle>
              <MDBCardText>
                This is a wider panel with supporting text below as a natural
                lead-in to additional content. This panel has even longer
                content than the first to show that equal height action.
              </MDBCardText>
            </MDBCardBody>
            <MDBCardFooter small muted>
              Last updated 3 mins ago
            </MDBCardFooter>
          </MDBCard>
        </MDBCardGroup>
      </SectionContainer>

      <SectionContainer title='Columns'>
        <MDBCardGroup column>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle tag='h5'>
                Panel title that wraps to a new line
              </MDBCardTitle>
              <MDBCardText>
                This is a longer panel with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
          <MDBCard className='p-3'>
            <blockquote className='blockquote mb-0 card-body'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className='blockquote-footer'>
                <small className='text-muted'>
                  Someone famous in{' '}
                  <cite title='Source Title'>Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </MDBCard>
          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle tag='h5'>Panel title</MDBCardTitle>
              <MDBCardText>
                This panel has supporting text below as a natural lead-in to
                additional content.
              </MDBCardText>
              <MDBCardText small muted>
                Last updated 3 mins ago
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard
            color='primary-color'
            text='white'
            className='text-center p-3'
          >
            <blockquote className='blockquote mb-0'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat.
              </p>
              <footer className='blockquote-footer'>
                <small className='text-muted'>
                  Someone famous in{' '}
                  <cite title='Source Title'>Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </MDBCard>

          <MDBCard className='text-center'>
            <MDBCardBody>
              <MDBCardTitle tag='h5'>Panel title</MDBCardTitle>
              <MDBCardText>
                This panel has supporting text below as a natural lead-in to
                additional content.
              </MDBCardText>
              <MDBCardText small muted>
                Last updated 3 mins ago
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>

          <MDBCard className='text-right p-3'>
            <blockquote className='blockquote mb-0 card-body'>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
                posuere erat a ante.
              </p>
              <footer className='blockquote-footer'>
                <small className='text-muted'>
                  Someone famous in{' '}
                  <cite title='Source Title'>Source Title</cite>
                </small>
              </footer>
            </blockquote>
          </MDBCard>

          <MDBCard>
            <MDBCardBody>
              <MDBCardTitle tag='h5'>Panel title</MDBCardTitle>
              <MDBCardText>
                This is a wider panel with supporting text below as a natural
                lead-in to additional content. This panel has even longer
                content than the first to show that equal height action.
              </MDBCardText>
              <MDBCardText small muted>
                Last updated 3 mins ago
              </MDBCardText>
            </MDBCardBody>
          </MDBCard>
        </MDBCardGroup>
      </SectionContainer>
    </MDBContainer>
  );
};

export default PanelPage;
