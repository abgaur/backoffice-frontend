import React, { useState, useEffect } from "react";
import "./App.css";
import "@aws-amplify/ui-react/styles.css";
import { API, Storage } from 'aws-amplify';
import 'bootstrap/dist/css/bootstrap.css';
import {
  Button,
  components,
  Flex,
  Heading,
  Image,
  Text,
  TextField,
  View,
  withAuthenticator,
} from '@aws-amplify/ui-react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { listNotes } from "./graphql/queries";
import {
  createNote as createNoteMutation,
  deleteNote as deleteNoteMutation,
} from "./graphql/mutations";
import AddProducts from './ui-components/product/addProducts';
import ProductDetails from './ui-components/product/productDetails';
import Navbar from './ui-components/common/navbar';
import LandingPage from './ui-components/common/landingPage';


const App = ({ signOut }) => {
  
  return (
    <View className="App">
      <Navbar signOut={signOut}/>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/products" element={<AddProducts />} />
        <Route path="/productdetails/:id" element={<ProductDetails />}>
        
          {/* <Route index element={<Home />} />
          <Route path="blogs" element={<Blogs />} />
          <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
        </Route>
      </Routes>
        

      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
};

export default withAuthenticator(App);