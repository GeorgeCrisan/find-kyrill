import React, { Component } from 'react';
import { Button, Modal,  Image} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import kyrill from './kyrill.gif';
import kyrill2 from './kyrill.jpg';
import firstImage from './first.jpg';
import secondImage from './second.jpg';
import thirdImage from './third.jpg';
import fourthImage from './fourth.jpg';
import fifthImage from './fifth.jpg';
import sixthImage from './sixth.jpg';
import seventhImage from './seventh.jpg';
import eighthImage from './eighth.jpg';
import ninthImage from './ninth.jpg';
import tenthImage from './tenth.jpg';

import 'font-awesome/css/font-awesome.min.css';
import './App.css';




class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

      showModal: true,
      showModal2: false,
      showCGO: false,
      letLatch: false,
      level: 1,
      images: ['',firstImage,secondImage,thirdImage,fourthImage,fifthImage,sixthImage,seventhImage,eighthImage,ninthImage,tenthImage],
      kyrillClass: 1,
      colorsInfo: ['','white','marron','lightblue','orange','purple']

    }

    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleShow2 = this.handleShow2.bind(this);
    this.handleClose2 = this.handleClose2.bind(this);
    this.renderNextLevel = this.renderNextLevel.bind(this);
    this.letLatch = this.letLatch.bind(this);
  }

  handleClose() {
    this.setState({ showModal: false });
    this.setState({ showCGO: true });
  }

  handleClose2() {
    this.setState({ showModal2: false });
    this.setState({ showCGO: false });
  }

  handleShow() {
    this.setState({ showModal: true });
 
  }

  handleShow2() {
    this.setState({ showModal2: true });
 
  }

  letLatch(){
    this.setState({letLatch: true });
  }

  renderNextLevel(){
      let levelT = this.state.level + 1;
      let kyrillClassT = this.state.kyrillClass + 1;

      if(levelT === 11){
        this.setState({showModal2: true})
          return;
      }
      if(this.state.letLatch )
     this.setState({level: levelT, kyrillClass: kyrillClassT , colorsInfo: levelT, letLatch: false});
     


  }


  render() {
    return (<div>
      <FirstModal show={this.state.showModal} close={this.handleClose} handleClose={this.handleClose} />
      <SecondModal show={this.state.showModal2} close={this.handleClose2} handleClose={this.handleClose2} />
      <ContainerGameOn kyrillClass={this.state.kyrillClass} show={this.state.showCGO} letLatch={this.letLatch} gameImages={this.state.images} level={this.state.level} renderNextLevel={this.renderNextLevel}>  </ContainerGameOn>
      
    </div>)
  }


}


class FirstModal extends React.Component {
  render() {

    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton className='closeButtonS'>
            <Modal.Title className='text-center modal-title'>Find Kyrill!</Modal.Title>
          </Modal.Header>

          <Modal.Body className='text-center'>
          <Image src={kyrill2} className='kyrill-img' ></Image>
            <p className='text-center p1'>Hello I am Kyrill and I love to hide and disguise. 
            Try to find me and you may ... win a Prize!!! Use your mouse and click on me if you can spot me. I need to warn you ...
            That is not easy ... ;)
            Good luck and have fun. </p>
            


          </Modal.Body>
          <Modal.Footer className='wrapper1'>
            <Button className='btn btn-danger button1' onClick={this.props.close}>Ok. Let's Play!</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


class SecondModal extends React.Component {
  render() {

    return (
      <div>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title className='text-center modal-title'>You Won !!!</Modal.Title>
          </Modal.Header>

          <Modal.Body className='text-center'>
          <Image src={kyrill2} className='kyrill-img' ></Image>
            <p className='text-center p1'>Well done. You won the game!!! You can have some vegetables for dinner now. Brocolli and yummy stuff ....Just joking. Go check with George for your prize. Good bye! </p>
            


          </Modal.Body>
          <Modal.Footer className='wrapper1'>
            <Button className='btn btn-danger button1' onClick={this.props.close}>Done!</Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}


class ContainerGameOn extends React.Component {
    render(){
       return  (<div className='container-game-on'>
             <div className={this.props.show ? 'infos' : 'remove-w-opacity'}>Level: {this.props.level} <div>Kyrill looks like this: <FontAwesome className={'font-awesome-icon colorForIcon' + this.props.kyrillClass} name='child' /> </div></div>
             
             <div className={this.props.show ?   'image-magnifier-container': 'remove-w-opacity'}>
             <FontAwesome className={'font-awesome-icon level'  + this.props.kyrillClass} name='child' size='1x' onClick={this.props.renderNextLevel} />
             <img src={this.props.gameImages[this.props.level]} onLoad={this.props.letLatch} id='img-mgn' className={'image-container'} />
             </div>
              



      </div>);
    }
}

export default App;
