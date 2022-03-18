import { useRouter } from "next/router";
import Dashboard from '../../components/DashboardTemplate'
import InfoComponent from '../../components/info/InfoComponent'

export default function Company_Info(props) {
    const router = useRouter();
    const q_cpid = router.query.cpid;
    const {cpid, cpname, attributesData} = props;
  
    console.log(cpid, cpname);
    console.log(attributesData);

    return (
      <Dashboard cpid={cpid} activeMenu={"company_info"} attributesData={attributesData}>
        <InfoComponent />
      </Dashboard>
    );
}

export async function getServerSideProps(context) {
  let {params, query} = context;
  let cpid = params.cpid;
  let cpname = query.cpname;
  console.log(cpid, cpname);
  const attributes = ['returnonequity', 'netinventory', 'liabilities', 'financialleverage', 'operatingincome', 'nonoperatingincomeexpense', 'depreciation', 'incometaxesextraordinaryitemsnoncontrollinginterest', 'netincomeloss'];
  let attributesData = {};
  for(let attrib of attributes) {
    const response = await fetch(`https://dalpha-server.herokuapp.com/api/v1/${attrib}?id=${cpid}`);
    const data = await response.json();
    attributesData[attrib] = data;
  }
  // console.log(attributesData);

  return {
    props: {
      cpid: cpid,
      cpname: cpname,
      attributesData: attributesData
    }
  };
}