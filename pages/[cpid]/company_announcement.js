import { useRouter } from "next/router";
import Dashboard from '../../components/DashboardTemplate'
import Announcement from "../../components/announcement/Announcement.js";

export default function Company_Finance(props) {
  const router = useRouter();
  const q_cpid = router.query.cpid;
  const {cpid, cpname, announcement, link} = props;

    return (
      <Dashboard cpid={cpid} cpname={cpname} activeMenu={"company_finances"} link={link}>
        <Announcement cpid={cpid} cpname={cpname} announcement={announcement} />
      </Dashboard>
    );
}

export async function getServerSideProps(context) {
  let {params, query} = context;
  let cpid = params.cpid;
  let cpname = query.cpname;
  const response = await fetch(`http://dalpha-server-ism.herokuapp.com/api/v1/announcements?id=${cpid}`);
  let dataurl = await fetch(`https://dalpha-server-ism.herokuapp.com/api/v1/download.csv?id=${cpid}`);
  let data = await response.json()
  return {
    props: {
      cpid: cpid,
      cpname: cpname,
      announcement: data,
      link: dataurl.url
    }
  };
}