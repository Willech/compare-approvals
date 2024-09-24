import { useState } from 'react';
import type { Response } from '../hooks/useCompanies'
import useCompanies from '../hooks/useCompanies';
import { DefaultPagination } from './ui/Pagination';
import { SortableTable } from './ui/SortableTable';
import { Card, CardBody, CardHeader, Typography } from '@material-tailwind/react';

const NUM_PER_PAGE = 10;

const CompanyMain = () => {
    
    const [page, setPage] = useState(1)

    const allCompanies = useCompanies();

    const startIndex = page*NUM_PER_PAGE - 10

    const companies = allCompanies.isSuccess ? (allCompanies.data as Response).enterprises.slice(startIndex, page*NUM_PER_PAGE) : []

    return (
        <Card className="h-full w-screen" placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
        <CardHeader floated={false} shadow={false} className="flex justify-start rounded-none" 
        placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
            <div className='flex flex-col gap-4 items-start'>
              <Typography variant="h5" color="blue-gray" 
              placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Foretak med sentral godkjenning
              </Typography>
              <Typography variant="paragraph" color="blue-gray" 
              placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>
                Dette er en liste som viser selskaper med sentral godkjenning, samt hvilke godkjenningsområder disse gjelder
              </Typography>
            </div>
          
        </CardHeader>
        <CardBody className="overflow-scroll px-0"
            placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}>

        <div className='flex flex-col gap-4 items-center'>
            <SortableTable companies={companies}/>
            <DefaultPagination active={page} setActive={setPage} />
        </div>
            </CardBody>
        </Card>
            
        
    );
};

export default CompanyMain;