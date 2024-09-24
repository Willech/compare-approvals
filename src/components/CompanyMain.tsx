import type { Response } from '../hooks/useCompanies'
import useCompanies from '../hooks/useCompanies';
import { SortableTable } from './ui/SortableTable';

const NUM_PER_PAGE = 10;

const CompanyMain = () => {
    
    
    const allCompanies = useCompanies();

    const companies = allCompanies.isSuccess ? (allCompanies.data as Response).enterprises.slice(0, NUM_PER_PAGE) : []

    return (
        <div className='flex flex-col gap-6 items-center'>
            <SortableTable companies={companies}/>
        </div>
            
        
    );
};

export default CompanyMain;