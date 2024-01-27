export interface Topic {
  id: number,
  category: number,
  status: number,
  title: string,
  subtitle: string,
  children?: Topic[]
}
