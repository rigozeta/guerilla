import {useState, useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import icon_pin2 from '../assets/icon_pin2.png';

import {Row, Col, Card, Form} from 'react-bootstrap';

function Properties() {
  const [properties, setProperties] = useState([]);
  const [filteredProperties, setFilteredProperties] = useState([]);
  const [loaded, setLoaded] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = ["Apartment", "House", "Penthouse", "Villa"];

	useEffect(()=>{
		const getPropertyList = () => {

      const query = `
      {
        propertyCollection(limit:6) {
          items {
            id
            title
            address
            category
            image {
              url
            }
          }
        }
      }
      `;

      axios({
        method: 'POST',
        // url: "https://graphql.contentful.com/content/v1/spaces/161hd2xkukf5/",
        url: "https://graphql.contentful.com/content/v1/spaces/vyvd54sdd5jm/",
        headers: {
          "Content-Type": "application/json",
          // "Authorization": "Bearer tzGk2KUvfp2T1PAg58rrFnpUi3-xOv1lgGHJArdLksQ"
          "Authorization": "Bearer TVMyOuOqkY3kNh_wDrlce2zwju8TDkI-96twtPci8fk"
        },
        data: JSON.stringify({ query })
      }).then((response)=>{
        console.log("Properties", response.data.data.propertyCollection.items);
        setProperties(response.data.data.propertyCollection.items);
        setFilteredProperties(response.data.data.propertyCollection.items);
        setLoaded(true);
      },(error)=>{
        console.error("error getting properties", error);
      })
		}

		getPropertyList();
	}, [])

  const changeCategory = (newCategory) =>{
		if(newCategory.target.value){
      let filtered = properties.filter(property => property.category == newCategory.target.value);
      setFilteredProperties(filtered);
		}else{
      setFilteredProperties(properties);
    }
	}

  return (
    <div className="properties text-left">
      <h2>Properties</h2>
      <h4>Turpis facilisis tempor pulvinar in lobortis ornare magna.</h4>
      <Row className="mb-3">
        <Col md={{span: 3, offset:9}} align="end">
          <section>
            <Form>
            <Form.Control as="select" onChange={changeCategory} disabled={!loaded}>
            <option value="">All Categories</option>
            {categories.map((category)=>{
              return <option value={category} key={category}>{category}</option>
            })}
            </Form.Control>
          </Form>
          </section>
        </Col>
      </Row>

      {loaded && (
        <Row>
          {filteredProperties.map((property, id)=>{
            return <Col md="4"><Card>
              <Card.Img variant="top" src={property.image.url} />
              <Card.Body>
                <Card.Title><strong>{property.title}</strong></Card.Title>
                <Card.Text>
                  <img src={icon_pin2} title="address" alt="address" /> {property.address}
                </Card.Text>
              </Card.Body>
            </Card>
            </Col>
          })}
        </Row>
      )}

      {!loaded && (<Row><Col><div className='alert'>Loading properties...</div></Col></Row>)}

    </div>
  );
}

export default Properties;
