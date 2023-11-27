import React, { Fragment, useState, useEffect } from "react";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from 'aws-amplify';
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
import { Link} from "react-router-dom";
import { listLandingImages, landingByDate } from "../../graphql/queries";
import {
  createLandingImage as createLandingImageMutation,
  deleteLandingImage as deleteLandingImageMutation, 
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
  updateLandingImage,
} from "../../graphql/mutations";
import { CustomImage,
} from './common.style'

const LandingPage = () => {

  const [landingImages, setLandingImages] = useState([])
  const [description, setDescription] = useState('')
  const [imageName, setImageName] = useState('')
  const [sequence, setSequence] = useState('')


  useEffect(() => {
    fetchLandingImages();
  }, []);

  const handleTitleChange = (event)=> {
    // setProductName(event.target.value);
  }
  const handleDescChange = (event)=> {
    // setDescription(event.target.value);
  }
  const handleSequenceChange = (event)=> {
    // setPrice(event.target.value);
  }
  // const handleRatingChange = (event)=> {
  //   // setRating(event.target.value);
  // }


  const saveLandingImage = () => {
    console.log('saved')
  }

  const cancelLandingImage = () => {
    console.log('saved')
  }

  async function fetchLandingImages() {
    const apiData = await API.graphql({ query: landingByDate, variables: {
      type: 'landingImage',
      sortDirection: 'DESC'
    } });
    const landingImagesFromAPI = apiData.data.landingByDate.items;
    await Promise.all(
      landingImagesFromAPI.map(async (landing) => {
        if (landing.image) {
          const url = await Storage.get(landing.name);
          landing.image = url;
        }
        return landing;
      })
    );
    console.log(landingImagesFromAPI);
    setLandingImages(landingImagesFromAPI);
  }

  const addLandingImage = () => {
    console.log('landing111');
  }

  async function boost(img) {
    // event.preventDefault();
    const data = {
      id: img.id,
      name: img.name,
      description: img.description,
      sequence: "1",
      type: "landingImage",
    };
    await API.graphql({
      query: updateLandingImage,
      variables: { input: data },
    });
    fetchLandingImages();
  }

  async function deleteImage({ id, name }) {

    await Storage.remove(name);
    await API.graphql({
      query: deleteLandingImageMutation,
      variables: { input: { id } },
    });

    fetchLandingImages();
  }


  async function createLandingImage(event) {
    event.preventDefault();
    const form = new FormData(event.target);
    const image = form.get("image");
    const data = {
      name: form.get("name"),
      description: form.get("description"),
      image: image.name,
      sequence: "10",
      type: "landingImage",
    };


    if (!!data.image) await Storage.put(data.name, image);
    await API.graphql({
      query: createLandingImageMutation,
      variables: { input: data },
    });
    fetchLandingImages();
    event.target.reset();
  }
  


  return (
    <div className="container-fluid">
      <View as="form" margin="3rem 0" onSubmit={createLandingImage}>
        <Flex direction="row" justifyContent="center">
          <TextField
            name="name"
            placeholder="Product Name"
            label="Product Name"
            labelHidden
            variation="quiet"
            required
          />
          <TextField
            name="description"
            placeholder="Product Description"
            label="Product Description"
            labelHidden
            variation="quiet"
            required
          />
          <View
          name="image"
          as="input"
          type="file"
          style={{ alignSelf: "end" }}
        />
 

          
          <Button type="submit" variation="primary">
            Add Image
          </Button>
        </Flex>
      </View>  



      <View margin="3rem 0">
      <div class="container">
       
       <div class="row">
      {landingImages.map((landing) => (
<>
      
          <div class="col-md-12">

            


              
                <CustomImage src={landing.image}
                class="img-thumbnail"

                  alt={`visual aid for ${landing.name}`}
               />
               <button className="btn btn-primary" onClick={() =>boost(landing)} >Boost</button>&nbsp;&nbsp;&nbsp;&nbsp;
               <button className="btn btn-secondary" onClick={() =>deleteImage(landing)}>Delete</button>
             
              
            
            
          </div>
         

        </>
      ))}
              </div>
        </div>
      </View>


    </div>
    
  );
};

export default LandingPage;