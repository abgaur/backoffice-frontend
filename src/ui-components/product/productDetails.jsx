import React, { useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from 'aws-amplify';
import { useParams } from 'react-router-dom';
import {
  Button,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import { listNotes } from "../../graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
  updateNote as updateNoteMutation,
} from "../../graphql/mutations";
import { StaticContent,
  Title,
  UpdateContent } from './product.style'

import { getNote as getNoteQuery } from "../../graphql/queries";


// async function fetchNotes() {
//   const apiData = await API.graphql({ query: listNotes });
//   const notesFromAPI = apiData.data.listNotes.items;
//   await Promise.all(
//     notesFromAPI.map(async (note) => {
//       if (note.image) {
//         const url = await Storage.get(note.name);
//         note.image = url;
//       }
//       return note;
//     })
//   );
//   setNotes(notesFromAPI);
// }



const ProductDetails = () => {
  const [note, setNote ] = useState({});
  const [image, setImage ] = useState('');
  const [editEnabled, setEditEnabled] = useState(false);


  const [productName, setProductName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [rating, setRating] = useState('');

  let { id } = useParams();
  console.log(id);


  useEffect(() => {
    getNoteData();
  }, [id]);


  const editAction = function() {
    console.log('editing');
    setEditEnabled(true);
  }

  const handleNameChange = (event)=> {
    setProductName(event.target.value);
  }
  const handleDescChange = (event)=> {
    setDescription(event.target.value);
  }
  const handlePriceChange = (event)=> {
    setPrice(event.target.value);
  }
  const handleRatingChange = (event)=> {
    setRating(event.target.value);
  }

  const saveAction = function() {
    console.log('editing');
    setEditEnabled(false);
  }

  const cancelAction = function() {
    console.log('editing');
    setEditEnabled(false);
  }
  
  async function saveProduct(event) {
    event.preventDefault();
    const data = {
      id: id,
      name: productName,
      description: description,
      price: price,
      rating: rating,
      image: image,
    };
    await API.graphql({
      query: updateNoteMutation,
      variables: { input: data },
    });
    // fetchNotes();
    // event.target.reset();
    // getNoteData();
    setEditEnabled(false);
  }

  async function getNoteData() {
    const apiData =  await API.graphql({
      query: getNoteQuery,
      variables: { id: id },
      
    })
    let noteFromAPI = apiData.data.getNote;

    await Promise.all(
      [noteFromAPI].map(async (note) => {
        if (note.image) {
          const url = await Storage.get(note.name);
          note.image = url;
        }
        return note;
      })
    );


    console.log(noteFromAPI);
    setNote(noteFromAPI)
    setProductName(noteFromAPI.name);
    setDescription(noteFromAPI.description);
    setPrice(noteFromAPI.price);
    setRating(noteFromAPI.rating);
    setImage(noteFromAPI.image)
    
  }


  return (
    <div>
      <Title>Product details</Title>

      <div className="container">
        <div className="row">
          <div className="col-6 image">

          {image && (
            
            <Image
              src={image}
              alt={description}
              // style={{ width: 400 }}
            />
          )}
          </div>


          {/* content */}

          { !editEnabled &&
          
          <StaticContent className="col-6 details">

              <div className="container">
                <div className="row">
                  <div className="col-6 offset-8">
                  <button 
                    type="button"
                    className="btn btn-primary"
                    onClick={editAction}
                  >Edit
                  </button>
                    </div>
                    </div>
              </div>
                <h2>{productName}</h2>
                <h2>{description}</h2>
                <h2>{price}</h2>
                <h2>{rating}</h2>
                {/* <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />

                    </div> */}
           


          </StaticContent>
          }

          {editEnabled && 
            <UpdateContent className="col-6 details"> 
                  <div className="container">
                    <div className="row">
                      <div className="col-6 offset-8">
                      <button 
                        type="button"
                        className="btn btn-success"
                        onClick={saveProduct}
                      >Save
                      </button>
                      <button 
                        type="button"
                        className="btn btn-secondary ms-1"
                        onClick={cancelAction}
                      >Cancel
                      </button>
                        </div>
                        </div>
                  </div>
                    <h2>Editing...</h2>
                    {/* <div class="input-group mb-3">
                      <label for="product-name" class="form-label">Product Name:&nbsp;&nbsp; </label>
                      <input type="text" class="form-control" id="product-name" placeholder={productName} onChange={handleNameChange} />
                    </div> */}
                    <div class="input-group mb-3">
                      <label for="basic-url" class="form-label">Product Name: &nbsp;&nbsp;</label>
                      <h4>{productName}</h4>
                    </div>
                    
                    <div class="input-group mb-3">
                      <label for="basic-url" class="form-label">Product Description: &nbsp;&nbsp;</label>
                      <input type="text" class="form-control" id="basic-url" placeholder={description} onChange={handleDescChange}/>
                    </div>

                    <div class="input-group mb-3">
                      <label for="rating" class="form-label">Product Rating: &nbsp;&nbsp;</label>
                      <input type="text" class="form-control" id="rating" placeholder={rating} onChange={handleRatingChange}/>
                    </div>

                    <div class="input-group mb-3">
                      <label for="rating" class="form-label">Product Price:&nbsp;&nbsp; </label>
                      <input type="text" class="form-control" id="rating" placeholder={price} onChange={handlePriceChange} />
                    </div>


              
            </UpdateContent>
          }






        </div>
      </div>
    </div>


  );
};

export default ProductDetails;