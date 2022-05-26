import CatsDataService from '../data/CatsDataService';
import { Cat } from '../redux/features/Cats';


export const GetCats = async () => {

    const catsListPromise = CatsDataService.get<Cat[]>('');

    const response = await Promise.all([
        catsListPromise
    ]);

    const cats = response[0].data
    return(
        cats
    )
}
