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

  let { id } = useParams();
  console.log(id);


  useEffect(() => {
    getNoteData();
  }, [id]);


  const editAction = function() {
    console.log('editing');
    setEditEnabled(true);
  }

  async function getNoteData() {
    // const apiData = await API.graphql({ query: listNotes });
    // const notesFromAPI = apiData.data.listNotes.items;


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
    
  }


  return (


    <div>
      
      <Title>Product details</Title>

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
            </div></div>



      <div className="container">
        <div className="row">
          <div className="col-6 image">

          {note.image && (
            
            <Image
              src={note.image}
              alt={note.description}
              // style={{ width: 400 }}
            />
           
          )}


            {/* <img src="note.image" className="img-fluid" alt="cat" /> */}
          </div>


          {/* content */}

          { !editEnabled &&

          <StaticContent className="col-6 details">
                <h2>{note.name}</h2>
                <h2>{note.description}</h2>
                <h2>{note.price}</h2>
                <h2>{note.rating}</h2>
                {/* <div className="input-group mb-3">
                  <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />

                    </div> */}
         


          </StaticContent>
          }

          {editEnabled && 
            <UpdateContent className="col-6 details"> 
              <h2>Editing</h2>
              <div class="input-group mb-3">
                <label for="basic-url" class="form-label">Product Name: </label>
                <input type="text" class="form-control" id="basic-url" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              </div>
              <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
              <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
            </UpdateContent>
          }






        </div>
      </div>
    </div>


  );
};

export default ProductDetails;