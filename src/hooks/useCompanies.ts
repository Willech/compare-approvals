import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import type {Company} from '../schemas/types/customtypes';

export interface Response {
    enterprises: Company[]
}

const fetchCompanies = async (): Promise<Response | Error> => {
    return axios.get('https://sgregister.dibk.no/api/enterprises.json', {
        headers: {
            'Accept': 'application/vnd.sgpub.v2'}
    }).then((response) => response.data)
    
}

const useCompanies = () => {
    return useQuery({
        queryKey: ['all_companies'],
        queryFn: () => fetchCompanies(),
        staleTime: 10000
    })
};

export default useCompanies;

