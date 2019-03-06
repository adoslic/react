import React, { Component } from 'react';
import {Row, Col, Button, Card} from 'react-bootstrap'
import slika from '../../Img/imgNotFound.png'

class ArticleCard extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
  }
  readArticle = () => {
      const url = this.props.article.url;
      window.open(url, '_self');
  }
  render() {
    return (
      <div className="article ">
        <Row className="noPadding">
          <Card>
            <Col sm={12}>
              <Row>
                <Col sm={5} >
                  <div className="imgContainer" style={
                    //{'backgroundImage': `url(${this.props.article.urlToImage})`}
                    (this.props.article.urlToImage==null)?
                      {'backgroundImage': `url(${slika}`}:
                      {'backgroundImage': `url(${this.props.article.urlToImage})`}
                    }>
                  </div>
                </Col>
                <Col sm={7}>
                {/*console.log(this.props)*/}
                  <Card.Body>
                    <Card.Title>{
                      (this.props.article.title==null)?
                      "Unknown title":
                      this.props.article.title
                    }</Card.Title>
                    <Card.Subtitle>{
                      (this.props.article.author==null)?
                      'Author: unknown':
                      'Author:'+this.props.article.author
                      }</Card.Subtitle>
                    <Card.Text>{
                      (this.props.article.description==null)?
                      "Description not found":
                      this.props.article.description
                      }</Card.Text>
                    <Button 
                      onClick={this.readArticle}
                      variant="primary"
                    >
                    Read article
                    </Button>
                  </Card.Body>
                
                </Col>
              </Row>
              
            </Col>
          </Card>
        </Row>
      </div>
      //return <h1>{this.props.greeting}</h1>;
    )
  }
}
  
export default ArticleCard;
  