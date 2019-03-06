import React, { Component } from 'react';
import './App.scss';
//import 'bootstrap/dist/css/bootstrap.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faIgloo } from '@fortawesome/free-solid-svg-icons';
//import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MaterialIcon from 'material-icons-react';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
// import Card from 'react-bootstrap/Card';
// import Image from 'react-bootstrap/Image';
// import Search from '../src/img/nature.jpg';
//import swal from 'sweetalert';

import ArticleCard from './components/ArticleCard'
import Modal from './components/Modal/Modal';

library.add(faIgloo)
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      articles: [],
      inputSearch: '',
      country: '',
      category: '',
      search: false,
      isShowing: false
    };
  }

filterSearch = (inputSearch='', country='', category='') => {
    if(inputSearch=='' && country=='' && category=='') country="us"
    let url = "https://newsapi.org/v2/top-headlines?q="+inputSearch+"&country="+country+"&category="+category+"&apiKey=f100b3cb4ed147d192f5237f42e0970c";
    console.log(url);
    fetch(url)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            articles: result.articles
          });
          //console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  componentDidMount() {
    //alert("radi");
    //event.preventDefault();
    /*fetch("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=f100b3cb4ed147d192f5237f42e0970c")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            articles: result.articles
          });
          console.log(result);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
      //fetch("https://newsapi.org/v2/top-headlines?q="+this.state.inputSearch+"+&country="+this.state.country+"&category="+this.state.category+"&apiKey=f100b3cb4ed147d192f5237f42e0970c")
      */
     this.filterSearch(this.state.inputSearch, this.state.country, this.state.category);
  }
  
  handleClick = () => {
    if(this.state.search){
      this.filterSearch(this.state.inputSearch, this.state.country, this.state.category);
    }
    else{
      this.setState({
        isShowing: true
      });
      //swal("Error!", "You need to enter some parametar to search!", "error");
      //alert("You need to enter some parametar to search!");
    }
  }
  handleHover = () =>{
    /*if(this.state.search){
      console.log("pointer");
      
    }
    else{
      console.log("not-allowed");
    }*/
    console.log("test");
  }

  removeInputs = () =>{
    this.setState({
      inputSearch: '',
      country: '',
      category: '',
      search: false
    });
  }

  updateInputValue = (event) =>{
    
    this.setState({
      inputSearch: event.target.value,
      search: true
    });
    if(event.target.value=='') this.setState({search: false})
    //console.log(this.state.inputSearch);
  }

  changeCountry = (event) =>{
    //event.preventDefault();
    this.setState({
      country: event.target.value,
      search: true
    });
    //console.log(event);
    //console.log(event.target.value);
  }
  changeCategory = (event) =>{
    //event.preventDefault();
    this.setState({
      category: event.target.value,
      search: true
    });
    //console.log(event);
    //console.log(event.target.value);
  }

  openModalHandler = () => {
    this.setState({
        isShowing: true
    });
}

  closeModalHandler = () => {
    this.setState({
        isShowing: false
    });
  }

  render() {

    return (
      <div className="App">
      { this.state.isShowing ? <div onClick={this.closeModalHandler} className="back-drop"></div> : null }

    {/* <button className="open-modal-btn" onClick={this.openModalHandler}>Open Modal</button> */}

    <Modal
        className="modal"
        show={this.state.isShowing}
        
        close={this.closeModalHandler}>
          You need to enter some parametar to search!
    </Modal>
        <Container>
          <Row className="justify-content-md-center">
            <Col sm={12}>
              <InputGroup>
                <FormControl
                  onChange={event => this.updateInputValue(event)}
                  placeholder="Search"
                  className="inputField"
                  value={this.state.inputSearch}
                />

                <DropdownButton
                  //onChange = {event => this.changeCountry(event)}
                  //onSelect={event => this.changeCountry(event)}
                  as={InputGroup.Append}
                  variant="outline-secondary"
                  title = {(this.state.country=='')? "select country": this.state.country}
                  id="input-group-dropdown"
                  value={this.state.country}
                  //onChange={this.handleChange}
                >
                  <Dropdown.Item 
                    as="button"
                    //onSelect={event => this.changeCountry(event)}
                    onClick = {event => this.changeCountry(event)}
                    value="us"
                  >
                    us
                  </Dropdown.Item>

                  <Dropdown.Item 
                    as="button"
                    //onSelect={event => this.changeCountry(event)}
                    onClick = {event => this.changeCountry(event)}
                    value="ru"
                  >
                    ru
                  </Dropdown.Item>
                  <Dropdown.Item 
                    as="button"
                    //onSelect={event => this.changeCountry(event)}
                    onClick = {event => this.changeCountry(event)}
                    value="de"
                  >
                    de
                  </Dropdown.Item>
                  <Dropdown.Item 
                    as="button"
                    //onSelect={event => this.changeCountry(event)}
                    onClick = {event => this.changeCountry(event)}
                    value="fr"
                  >
                    fr
                  </Dropdown.Item>
                  <Dropdown.Item 
                    as="button"
                    //onSelect={event => this.changeCountry(event)}
                    onClick = {event => this.changeCountry(event)}
                    value="gb"
                  >
                    gb
                  </Dropdown.Item>
                </DropdownButton>

                <DropdownButton
                  as={InputGroup.Append}
                  variant="outline-secondary"
                  title = {(this.state.category=='')? "select category": this.state.category}
                  id="input-group-dropdown"
                  value={this.state.category}
                >
                  <Dropdown.Item 
                    as="button"
                    onClick = {event => this.changeCategory(event)}
                    value="general"
                  >
                    general
                  </Dropdown.Item>
                  <Dropdown.Item 
                    as="button"
                    onClick = {event => this.changeCategory(event)}
                    value="business"
                  >
                    business
                  </Dropdown.Item>
                  <Dropdown.Item 
                    as="button"
                    onClick = {event => this.changeCategory(event)}
                    value="entertainment"
                  >
                    entertainment
                  </Dropdown.Item>
                  <Dropdown.Item 
                    as="button"
                    onClick = {event => this.changeCategory(event)}
                    value="sports"
                  >
                    sports
                  </Dropdown.Item>
                  <Dropdown.Item 
                    as="button"
                    onClick = {event => this.changeCategory(event)}
                    value="health"
                  >
                    health
                  </Dropdown.Item>
                </DropdownButton>

                <Button 
                  onClick={this.handleClick}
                  //className={this.state.search ? 'hover' : null}
                  //className="search"
                  variant="outline-secondary"
                >
                {
                  // (!this.state.search)?
                  // {"cursor": "not-allowed"}:
                  // {"cursor": "pointer"}
                }
                  <MaterialIcon 
                    icon="search"
                  />
                </Button>
                <Button 
                  onClick={this.removeInputs}
                  className="borderRadius"
                  variant="outline-secondary">
                  <MaterialIcon 
                    icon="close"
                  />
                </Button>
              </InputGroup>
            </Col>
          </Row>
          {
            this.state.articles.slice(0, 5).map(article => (
              <ArticleCard 
                article={article}
                key={article.title}
              />
            ))
          }
          {/* <ArticleCard article={this.state.articles && this.state.articles.length > 0 && this.state.articles[0]}/> */}
        </Container>
                
      </div>
    );
    
  }
}

export default App;
