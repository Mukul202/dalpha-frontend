import { useRouter } from "next/router";
import Dashboard from '../../components/DashboardTemplate'
import FinanceComponent from '../../components/finance/FinanceComponent'

export default function Company_Finance(props) {
  const router = useRouter();
  const q_cpid = router.query.cpid;
  const {cpid, cpname, financeData,link} = props;

  console.log(cpid, cpname);
  console.log(financeData);

    return (
      <Dashboard cpid={cpid} cpname={cpname} activeMenu={"company_finances"}>
        <FinanceComponent cpid={cpid} cpname={cpname} financeData={financeData} />
      </Dashboard>
    );
}

export async function getServerSideProps(context) {
  let {params, query} = context;
  let cpid = params.cpid;
  let cpname = query.cpname;
  console.log(cpid, cpname);
  let financeData = {};
  const response = await fetch(`http://dalpha-server-ism.herokuapp.com/api/v1/financials?id=${cpid}`);
  const data = await response.json();


  return {
    props: {
      cpid: cpid,
      cpname: cpname,
      financeData: data
    }
  };
}