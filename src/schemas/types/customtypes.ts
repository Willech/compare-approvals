export interface Company {
    organizational_number?: string;
    name: string;
    www?: string;
    phone?: string;
    email?: string;
    businessaddress?: {
      line_1?: string;
      line_2?: string;
      line_3?: string;
      line_4?: string;
      postal_code?: string;
      city?: string;
      country?: string;
    };
    postaladdress?: {
      line_1?: string;
      line_2?: string;
      line_3?: string;
      line_4?: string;
      postal_code?: string;
      city?: string;
      country?: string;
    };
    status?: {
      approved: boolean;
      approval_period_to: string;
      approval_certificate: string;
    };
    valid_approval_areas?: {
      function: string;
      function_xml: string;
      subject_area: string;
      subject_area_xml: string;
      pbl: string;
      pbl_xml: string;
      grade: string;
    }[]
}