import { useState } from 'react';
import type { Response } from '../hooks/useCompanies'
import useCompanies from '../hooks/useCompanies';
import { DefaultPagination } from './ui/Pagination';
import { SortableTable } from './ui/SortableTable';

const NUM_PER_PAGE = 10;

const CompanyMain = () => {
    
    const [page, setPage] = useState(1)

    const allCompanies = useCompanies();

    const startIndex = page*NUM_PER_PAGE - 10

    const companies = allCompanies.isSuccess ? (allCompanies.data as Response).enterprises.slice(startIndex, page*NUM_PER_PAGE) : []
    
    return (
        <div className='flex flex-col gap-6 items-center'>
            <SortableTable companies={companies}/>
            <DefaultPagination active={page} setActive={setPage} />
        </div>
            
        
    );
};

export default CompanyMain;