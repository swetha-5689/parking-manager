import React from 'react';
import ReactDOM from 'react-dom';
import { MDBContainer } from 'mdbreact';
import DocsLink from '../components/docsLink';
import SectionContainer from '../components/sectionContainer';
import './Masonry.css';

class MasonryPage extends React.Component {
  MasonryRef = React.createRef();
  componentDidMount() {
    this.arrangeMasonry();
  }

  arrangeMasonry = () => {
    const numCols = 3;
    const colHeights = Array(numCols).fill(0);
    const container = ReactDOM.findDOMNode(this.MasonryRef.current);

    Array.from(container.children).forEach((child, i) => {
      const order = i % numCols;
      child.style.order = order;
      colHeights[order] += parseFloat(child.clientHeight);
    });
    container.style.height = `${Math.max(...colHeights)}px`;
  };

  render() {
    return (
      <MDBContainer className='mt-5'>
        <DocsLink
          title='Masks'
          href='https://mdbootstrap.com/docs/react/css/masks/'
        />

        <SectionContainer noBorder header='Column layout'>
          <div className='masonry-with-columns mx-0' ref={this.MasonryRef}>
            <div style={{ order: 0 }}>1</div>
            <div style={{ order: 1 }}>2</div>
            <div style={{ order: 2 }}>3</div>
            <div style={{ order: 0 }}>4</div>
            <div style={{ order: 1 }}>5</div>
            <div style={{ order: 2 }}>6</div>
            <div style={{ order: 0 }}>7</div>
            <div style={{ order: 1 }}>8</div>
            <div style={{ order: 2 }}>9</div>
            <div style={{ order: 0 }}>10</div>
            <div style={{ order: 1 }}>11</div>
            <div style={{ order: 2 }}>12</div>
            <div style={{ order: 0 }}>13</div>
            <div style={{ order: 1 }}>14</div>
            <div style={{ order: 2 }}>15</div>
          </div>
        </SectionContainer>

        <hr />

        <SectionContainer noBorder header='Horizontal layout'>
          <div className='masonry-with-columns-2 mx-0'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
          </div>
        </SectionContainer>

        <hr />

        <SectionContainer noBorder header='Flex layout'>
          <div className='masonry-with-flex mx-0'>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>6</div>
            <div>7</div>
            <div>8</div>
            <div>9</div>
            <div>10</div>
            <div>11</div>
            <div>12</div>
            <div>13</div>
            <div>14</div>
            <div>15</div>
          </div>
        </SectionContainer>
      </MDBContainer>
    );
  }
}

export default MasonryPage;
