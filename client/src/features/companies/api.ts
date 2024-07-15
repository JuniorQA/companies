/* eslint-disable import/prefer-default-export */
import type { Company, CompanyWithoutId } from './companies';

export const fetchLoadCompanies = async (): Promise<Company[]> => {
  const response = await fetch('/api/company');

  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data = await response.json();
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return, @typescript-eslint/no-unsafe-member-access
  return data.companies;
};

export const removeCompany = async (id: Company['id']): Promise<number> => {
  const response = await fetch(`/api/company/${id}`, {
    method: 'DELETE',
  });
  if (response.ok) {
    return id;
  }
  const data: { message: string } = await response.json();
  throw new Error(data.message);
};

export const addCompany = async (newCompany: CompanyWithoutId): Promise<Company> => {
  const response = await fetch('api/company', {
    method: 'POST',
    body: JSON.stringify(newCompany),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const company: Company = await response.json();
  if (response.ok) {
    return company;
  }
  throw new Error();
};
