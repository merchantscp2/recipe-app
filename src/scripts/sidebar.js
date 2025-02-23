import SidebarMenu from 'react-bootstrap-sidebar-menu';
import Form from 'react-bootstrap/Form';
//import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import React from 'react';
/**
 * Creates sidebar with filters to search for recipes
 * @returns Sidebar for filtering recipes
 */
function Filters() {

    /**
     * https://stackoverflow.com/questions/63182107/how-can-i-get-a-value-from-a-react-bootstrap-form-on-submit
     * @param {*} e 
     */
    const onFormSubmit = e => {
        e.preventDefault()
        const formData = new FormData(e.target),
        formDataObj = Object.fromEntries(formData.entries())
        console.log(formDataObj)


        // From https://rapidapi.com/edamam/api/recipe-search-and-diet
        const axios = require("axios");

        const options = {
            method: 'GET',
            url: 'https://edamam-recipe-search.p.rapidapi.com/search',
            params: {q: 'chicken tomato garlic mozzarella'}, //input ingredients here {these are filler ingredients}
            headers: {
                'X-RapidAPI-Key': '1c01bfdfbcmsh477ce97a09c9667p14eef1jsne64d4135f9a5',
                'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
            }
        };

        axios.request(options).then(function (response) {
            /**
             * Fetch ingredients of first recipe found using results
             */
            var ingredients = response.data.hits[1].recipe.ingredients;
            for (let i = 0; i < ingredients.length; i++) {
                console.log(ingredients[i].text);
            }
        }).catch(function (error) {
            console.error(error);
        });
    }
    return (
        <SidebarMenu className="w-50 mx-4 sidebar">
            <SidebarMenu.Header>
                <p className="mx-4 my-4 pt-3">Select which ingredients you have, then press search to get recipes you can make!</p>
            </SidebarMenu.Header>
            <SidebarMenu.Body>
                <Form className="mx-4 filters" onSubmit={onFormSubmit}>
                    <Row>
                        <Form.Group controlId="protein">
                            <Form.Label>Protein</Form.Label>
                                <Form.Check type="checkbox" name="Chicken" label="Chicken"/>
                                <Form.Check type="checkbox" name="Beef" label="Beef"/>
                                <Form.Check type="checkbox" name="Pork" label="Pork"/>
                                <Form.Check type="checkbox" name="Egg" label="Egg"/>
                                <Form.Check type="checkbox" name="Veal" label="Veal"/>    
                            </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group controlId="vegetables">
                            <Form.Label>Vegetables</Form.Label>
                                <Form.Check type="checkbox" name="Carrots" label="Carrots"/>
                                <Form.Check type="checkbox" name="Red Pepper" label="Red Pepper"/>
                                <Form.Check type="checkbox" name="Green Pepper" label="Green Pepper"/>
                                <Form.Check type="checkbox" name="Yellow Pepper" label="Yellow Pepper"/>
                                <Form.Check type="checkbox" name="Red Onions" label="Red Onions"/>
                                <Form.Check type="checkbox" name="Yellow Onions" label="Yellow Onions"/>
                                <Form.Check type="checkbox" name="Green Onions" label="Green Onions"/>
                                <Form.Check type="checkbox" name="Tomatoes" label="Tomatoes"/>
                                <Form.Check type="checkbox" name="Broccoli" label="Broccoli"/>
                                <Form.Check type="checkbox" name="Cucumbers" label="Cucumbers"/>
                                <Form.Check type="checkbox" name="Salad Mix" label="Salad Mix"/>
                                <Form.Check type="checkbox" name="Potatos" label="Potatos"/>
                                <Form.Check type="checkbox" name="Kale" label="Kale"/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group controlId='spices'>
                            <Form.Label>Spices</Form.Label>
                                <Form.Check type="checkbox" name="Cannamon" label="Cinnamon"/>
                                <Form.Check type="checkbox" name="Ginger" label="Ginger"/>
                                <Form.Check type="checkbox" name="Black Pepper" label="Black Pepper"/>
                                <Form.Check type="checkbox" name="Salt" label="Salt"/>
                                <Form.Check type="checkbox" name="Paprika" label="Paprika"/>
                                <Form.Check type="checkbox" name="Cardamon" label="Cardamom"/>
                                <Form.Check type="checkbox" name="Turmeric Powder" label="Turmeric Powder"/>
                                <Form.Check type="checkbox" name="Cayenne Pepper" label="Cayenne Pepper"/>
                                <Form.Check type="checkbox" name="Oregano" label="Oregano"/>
                                <Form.Check type="checkbox" name="Rosemary" label="Rosemary"/>
                                <Form.Check type="checkbox" name="Chili Powder" label="Chili Powder"/>
                                <Form.Check type="checkbox" name="Red Pepper Flakes" label="Red Pepper Flakes"/>
                                <Form.Check type="checkbox" name="Basil" label="Basil"/>
                                <Form.Check type="checkbox" name="Bay Leaves" label="Bay Leaves"/>
                                <Form.Check type="checkbox" name="Garlic" label="Garlic"/>
                                <Form.Check type="checkbox" name="Garlic Powder" label="Garlic Powder"/>
                                <Form.Check type="checkbox" name="Thyme" label="Thyme"/>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group controlId='seafood'>
                            <Form.Label>Sea Food</Form.Label>
                                <Form.Check type="checkbox" name="Shrimp" label="Shrimp"/>
                                <Form.Check type="checkbox" name="Tuna" label="Tuna"/>
                                <Form.Check type="checkbox" name="Salmon" label="Salmon"/>
                                <Form.Check type="checkbox" name="Tilapia" label="Tilapia"/>
                                <Form.Check type="checkbox" name="Crab" label="Crab"/>
                                <Form.Check type="checkbox" name="Shrimp" label="Shrimp"/>
                        </Form.Group> 
                    </Row>
                    <Button variant="primary" type="submit">Submit</Button>
                </Form>
            </SidebarMenu.Body>
        </SidebarMenu>
    );
}

export default Filters;