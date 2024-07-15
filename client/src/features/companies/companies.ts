export type Company = {
  id: number;
  title: string;
  address: string;
};
export type CompanyWithoutId = Omit<Company, 'id'>;
