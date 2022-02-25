/**
 * Created by Iruobe Akhigbe<iruobeakhigbe@gmail.com>
 */
export interface IResponse {
  result?: any;
  data?: any;
  code: number;
  status: any;
  msg?: string;
  message?: string;
  totalRows: number;
}
