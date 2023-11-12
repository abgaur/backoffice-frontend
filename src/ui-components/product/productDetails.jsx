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
} from "../../graphql/mutations";
import { Title } from './product.style'

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
  let { id } = useParams();
  console.log(id);


  useEffect(() => {
    getNoteData();
  }, [id]);

  async function getNoteData() {
    // const apiData = await API.graphql({ query: listNotes });
    // const notesFromAPI = apiData.data.listNotes.items;


    const apiData =  await API.graphql({
      query: getNoteQuery,
      variables: { id: id },
      
    })
    const notefromAPI = apiData.data.getNote;
    console.log(notefromAPI);
    setNote(notefromAPI)
    
  }


  return (


    <div>
      
      <Title>Product details</Title>
      <div className="container">
        <div className="row">
          <div className="col-6 image">
            <img src="https://backofficefrontend3369b469624b40d1824d01928f41852553-staging.s3.us-west-1.amazonaws.com/public/cat?x-amz-content-sha256=e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855&x-amz-user-agent=aws-amplify%2F5.3.11+storage%2F2+framework%2F1&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=ASIASPOCNZZ45ZGL366Y%2F20231104%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Date=20231104T234720Z&X-Amz-SignedHeaders=host&X-Amz-Expires=900&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMSJIMEYCIQC4hjsQDMUKnEqRVoBydHCh1DrdLJhy%2F%2BoRa%2FKVXf5PngIhAPkWQFG0RkISzjoRqXMjn8fESdYRS1d%2Bb3GDg3w3728UKsQECGkQARoMMTcwNTk1ODMxNDE3IgwdWYm7G4CUuk6MqHwqoQQ9IBYJm7BbbHFCZZR1Bpb6N6KILgGqqcf1%2Ff%2BVf17q2UzJRrJOVmgILSmwb9PVW0wLYz9lT5zK9qfVpTCo2NPZWfCEiUoOgAZS2hO4gQcklT0cYPz6Z6g4U9Xyf4MJ4oDRvDk86m8Ig8Zet5%2FxbgE1HXEd0L3xJaieHobl6YtFWbGwCt92v6kaJgVagJE%2FHzDuynwJp17Z1z6oTIXVYlxA2PVz7kX9HnO%2BvtsHnB%2Bky%2BV3FbT30tKnJjhhHIc12wzSkgLsC%2BCQWNxwSZ%2BTkHWngX6ykRYmBZnC1k1ZAuv4xpVI5niZxai38JAlfSH%2FMFeHmYsp%2BlrjHNc4J7k3eugns59A0Li5IZ1Vfo8NAeoaYm4r8JezeZF87m%2FEqTREtBVAsn3aJQgq2E9CllICohgKVJM35Yldza7h4Xf6vSLBozIyLR5lQuvKhBCmecYbs5Izqcr%2FgFol5NtnQE7VM5AWZRAJXtKgD0I1QZ9cyZ3vL2EAfrGl0i0EbJX%2BFJVQWh%2FO6M193IFz943vKScJNovDtgKhmNl2SfGtKOaaOiUORlt3rUEEYD5loqZSU935EcLwCC3yJnX1ztXr%2Fce0%2BS%2F3gjeeceqzoSqyPBcENxFQ08%2FFC%2BMD%2BcFs8I2hykki8uzJU4pApYQmcck3mpMDQ6T0X20pYn7Rm33%2B%2BOTBJvfAszrjEN7emPiVLdwuLLKO3nWvQQsckFiGSyiD1MFxpIBrHTCIsJuqBjqEAsSnaD5jjjTdTTCRBptYQ3UHD4aXgpKCa01deQQzYSANOIMvVWaZKbvgCpOg3oA6Llj2Ddouhle%2FAPWW9i2a0bKqfVm8mR7iWyzKVYhML7lqQH5DVgyVkIIvmPDOEHn3zVo3gCRO8bppS4T3JLjE5vtWXBcgHRgBCvJQEByJ0Bfim6OzEN7voCZe8fP4g9nUVGu9LCjIgZYAI63RLmx%2FuTRHr9gfJRacmsdku9f9rAsS3wlxNMc3RBsX%2BACEKZJaNphADjKCHJZ7oVmbhfn%2F%2FcIclkiy%2BuPnlb%2B7S6RQ6LCvfVzx68Z7QxlcOisrG02SlGCIU3pChqIBaOVRjPmT7N5PLo1R&X-Amz-Signature=d7bd19d4f1bddf8d50505d9fd72586b7ab0a661df4f2da36097af7e56126eac9" class="img-fluid" alt="cat" />
          </div>


          {/* content */}
          <div className="col-6 details">
            <div className="row">
              <div className="col image">
                <h2>{note.name}</h2>
                <h2>{note.description}</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>


  );
};

export default ProductDetails;