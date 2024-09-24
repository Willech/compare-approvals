import {
    ChevronUpDownIcon,
  } from "@heroicons/react/24/outline";
  import {
    Typography,
    Chip,
  } from "@material-tailwind/react";
import type { Company } from "../../schemas/types/customtypes"
import type { colors } from "@material-tailwind/react/types/generic";
import CollapseDefault from "./Collapse";
   
  const TABLE_HEAD = ["Selskap", "Org.nummer", "Godkjenningsområder"];

  interface SortableTableProps {
    companies: Company[];
  }
   
  export const SortableTable: React.FC<SortableTableProps> = ({ companies }) => {

    const getChipColor = (funksjon: string) => {
        switch(funksjon){
            case 'Utførende': return 'green' 
            case 'Ansvarlig søker': return 'purple' 
            case 'Prosjekterende': return 'blue' 
            case 'Uavhengig kontrollerende': return 'amber' 
            default: return 'pink'
        }
      }

    const TABLEROWS = companies.map(company => {
        return {
            navn: company.name,
            orgnummer: company.organizational_number,
            poststed: `${company.postaladdress?.postal_code} ${company.postaladdress?.city}`,
            godkjenning: company.status?.approved,
            godkjenningsomrader: company.valid_approval_areas ? company.valid_approval_areas.map(area => {
                return {
                    funksjon: `${area.subject_area}, ${area.function}`,
                    grad: area.grade,
                    chipColor: getChipColor(area.function)
                }
            }) : []

        }
    })
    
    return (
          <table className="mt-4 w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head, index) => (
                  <th
                    key={head}
                    className="cursor-pointer border-y border-blue-gray-100 bg-blue-gray-50/50 p-4 transition-colors hover:bg-blue-gray-50"
                  >
                    <Typography
                            variant="small"
                            color="blue-gray"
                            className="flex items-center justify-between gap-2 font-normal leading-none opacity-70" 
                            placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                    >
                      {head}{" "}
                      {index !== TABLE_HEAD.length - 1 && (
                        <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                      )}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>

              {TABLEROWS.map(
                ({ navn, orgnummer, godkjenningsomrader
                                         }, index) => {
                  const isLast = index === TABLEROWS.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";
   
                  return (
                    <tr key={navn}>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <div className="flex flex-col">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-bold"
                                placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                            >
                              {navn}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                            <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                                placeholder={undefined} onPointerEnterCapture={undefined} onPointerLeaveCapture={undefined}                            >
                                {orgnummer}
                            </Typography>
                        </div>
                      </td>
         
                      <td className={classes}>
                        <div className='flex gap-1'>
                            {godkjenningsomrader.length > 2 ? 
                            (
                                <CollapseDefault title={`${godkjenningsomrader.length} områder`}>
                                    <div className='flex flex-col gap-2'>
                                        {godkjenningsomrader.map(omrade => {
                                        return (
                                            <Chip key={`${omrade.grad}-${omrade.funksjon}`} value={`${omrade.funksjon}: ${omrade.grad}`} color={omrade.chipColor as colors} />
                                        )
                                        })}
                                    </div>
                                </CollapseDefault>
                            ) : (
                                <div className='flex flex-col gap-2'>
                                    {godkjenningsomrader.map(omrade => {
                                        return (
                                            <Chip key={`${omrade.grad}-${omrade.funksjon}`} value={`${omrade.funksjon}: ${omrade.grad}`} color={omrade.chipColor as colors} />
                                        )
                                    })}
                                </div>
                            )}
                        </div>
                      </td>
                    </tr>
                  );
                },
              )}
            </tbody>
          </table>
    );
  }