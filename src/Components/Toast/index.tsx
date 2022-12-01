import React from 'react';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { ButtonLayout } from '../Button/styles';


export function ToastMessage(){
  const notify = () => toast("teste");

  return (
    <div>
      <ButtonLayout onClick={notify}>{"oi"}!</ButtonLayout> 
      <ToastContainer />
    </div>
  );
}