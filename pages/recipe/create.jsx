import styles from '../../styles/form_card.module.css'
import React, { useState } from 'react';
import { useRouter } from 'next/router'
import FormCard from '../../components/FormCard';

const Create = () => {
  
    return (
        <div style={{margin:"1em", height:"85vh"}}>
            <FormCard/>
        </div>
    )

}

export default Create
