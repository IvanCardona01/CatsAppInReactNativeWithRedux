import React, { useEffect, useState } from 'react'
import CatsDataService from '../data/CatsDataService';
import { Cat, Cats } from '../redux/features/Cats';

export const useCats = () => {


    const getCats = async () => {

        const catsListPromise = CatsDataService.get<Cat[]>('');

        const response = await Promise.all([
            catsListPromise
        ]);

        const cats = response[0].data
        return(
            cats
        )

    }

    useEffect(() => {
      getCats()
    }, [])
    
    
    return({
        getCats
    })
}
