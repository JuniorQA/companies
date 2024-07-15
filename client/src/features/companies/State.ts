import type { Company } from './companies';

type CompanyState = {
  CompaniesList: Company[];
  error: string | null;
};

export default CompanyState;
